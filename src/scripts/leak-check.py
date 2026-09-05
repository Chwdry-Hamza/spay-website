#!/usr/bin/env python3
"""
Every English string that survives verbatim on a translated page.

Renders each design page in each language against the English original and
lists the text nodes that came back identical. A node that matched is either
untranslated or a deliberate keep, and the two are told apart by
/tmp/kept.json — the set of strings the translators themselves left in English,
derived from src/i18n rather than guessed, so "Blog" in Turkish and "1 min" in
Spanish do not read as failures.

  npm run dev            # in another terminal
  npm run i18n:kept -- /tmp/kept.json
  python3 src/scripts/leak-check.py
"""
import html as H
import json
import re
import subprocess
import sys

ROUTES = ['/', '/about/', '/card/', '/contact/', '/how-it-works/']
LOCALES = ['tr', 'de', 'es', 'pl', 'pt', 'fr', 'ar', 'ur']
BASE = 'http://localhost:3000'

kept = {k: set(v) for k, v in json.load(open('/tmp/kept.json')).items()}

# An address is never translated — see ADDRESS_ONLY in the CMS's segments.ts.
ADDR = re.compile(r'^\s*(?:https?://\S+|mailto:\S+|tel:\S+|[^\s@]+@[^\s@]+\.[^\s@]+)\s*$', re.I)


def nodes(url):
    h = subprocess.run(['curl', '-s', url], capture_output=True, text=True).stdout
    h = re.sub(r'(?s)<script.*?</script>|<style.*?</style>|<!--.*?-->|<svg.*?</svg>', ' ', h)
    out = []
    for raw in re.findall(r'>([^<>]+)<', h):
        t = re.sub(r'\s+', ' ', H.unescape(raw)).strip()
        if len(t) >= 3 and re.search(r'[A-Za-z؀-ۿ]', t) and not ADDR.match(t):
            out.append(t)
    return out


total = 0
for route in ROUTES:
    en = set(nodes(BASE + route))
    print(f'\n  {route}   ({len(en)} English nodes)')
    for loc in LOCALES:
        leaks, seen = [], set()
        for t in nodes(f'{BASE}/{loc}{route}'):
            if t in en and t not in kept[loc] and t not in seen:
                seen.add(t)
                leaks.append(t)
        total += len(leaks)
        mark = '\x1b[32mok\x1b[0m  ' if not leaks else '\x1b[31m%2d\x1b[0m  ' % len(leaks)
        print(f'    {loc}  {mark}' + ('  ' + ' | '.join(leaks[:6]) if leaks else ''))

print(f'\n  {total} untranslated node(s)\n')
sys.exit(1 if total else 0)
