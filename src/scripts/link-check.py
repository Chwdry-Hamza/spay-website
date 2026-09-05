#!/usr/bin/env python3
"""
Every link on a translated page that would drop the reader back into English.

A reader who picks Urdu has picked it for the site. So on /ur/… every link to a
route Urdu publishes must carry the /ur prefix. This renders each page in each
language, collects the hrefs, and reports the ones that do not.

Paths Urdu does NOT publish (/privacy-policy/, /card-terms/) are expected to
stay unprefixed — prefixing them would 404 — so they are listed separately
rather than as failures.

Each link is also FOLLOWED, and its status compared against the same link on the
English page. A 404 both sides is a content gap (the chrome ships hrefs for
production posts that a test database does not have); a 404 only on the
translated side is a real routing bug.

  npm run dev            # in another terminal
  python3 src/scripts/link-check.py
"""
import html as H
import re
import subprocess
import sys

LOCALES = ['tr', 'de', 'es', 'pl', 'pt', 'fr', 'ar', 'ur']
PAGES = ['/', '/about/', '/card/', '/contact/', '/how-it-works/', '/blog/']
BASE = 'http://localhost:3000'

# Routes every language publishes — the ones a link must prefix.
LOCALISED = ('/about/', '/card/', '/contact/', '/how-it-works/', '/blog/')
# Routes only English has. Staying unprefixed is correct.
ENGLISH_ONLY = ('/privacy-policy/', '/card-terms/')


def hrefs(url):
    h = subprocess.run(['curl', '-s', url], capture_output=True, text=True).stdout
    return [H.unescape(m) for m in re.findall(r'href="([^"]*)"', h)]


_status_cache = {}


def status(url):
    if url not in _status_cache:
        _status_cache[url] = subprocess.run(
            ['curl', '-s', '-o', '/dev/null', '-w', '%{http_code}', url],
            capture_output=True, text=True).stdout.strip()
    return _status_cache[url]


def leaks(url, prefix):
    bad, expected, broken = set(), set(), set()
    for href in hrefs(url):
        if not href.startswith('/') or href.startswith('//'):
            continue
        path = href.split('#')[0].split('?')[0]

        if href.startswith(prefix + '/') or href == prefix + '/':
            # Prefixed correctly — but does it resolve? Compare against the
            # same route in English so a missing post is not read as a routing
            # bug: the chrome ships production slugs, and a test database has
            # different ones.
            here = status(BASE + path)
            if here == '404' and status(BASE + path[len(prefix):] or '/') != '404':
                broken.add(href)
            continue

        if path.startswith(ENGLISH_ONLY):
            expected.add(href)
        elif path == '/' or path.startswith(LOCALISED):
            bad.add(href)
    return sorted(bad), sorted(expected), sorted(broken)


total = 0
for locale in LOCALES:
    prefix = f'/{locale}'
    print(f'\n  ── {locale} ──')
    for page in PAGES:
        bad, expected, broken = leaks(f'{BASE}{prefix}{page}', prefix)
        total += len(bad) + len(broken)
        fails = bad + broken
        mark = '\x1b[32mok\x1b[0m  ' if not fails else '\x1b[31m%2d\x1b[0m  ' % len(fails)
        note = f'   ({len(expected)} English-only, as designed)' if expected else ''
        print(f'    {page:16} {mark}' + (' ' + ' '.join(fails[:5]) if fails else note))

print(f"\n  {total} link(s) that would change the reader's language or 404 only in it\n")
sys.exit(1 if total else 0)
