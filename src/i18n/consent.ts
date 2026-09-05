/**
 * The cookie banner, in every language.
 *
 * The banner is rendered once from the root layout, above every page, so it
 * cannot take its copy from a page's content the way the rest of the site does.
 * English keeps coming from the CMS — an editor can still reword it and see it
 * in the live preview — and the other eight languages are here.
 *
 * `learnMoreUrl` is deliberately absent: the privacy policy is English-only, so
 * the link keeps whatever the CMS points it at in every language rather than
 * being prefixed into a page that does not exist.
 */
import type { Locale } from './locales';

export type ConsentStrings = {
  message: string;
  learnMore: string;
  accept: string;
  decline: string;
  /** Screen-reader name for the banner itself. */
  label: string;
};

export const EN_CONSENT: ConsentStrings = {
  message: 'We use cookies to improve your experience and analyze traffic. See our Privacy Policy.',
  learnMore: 'Learn more',
  accept: 'Accept',
  decline: 'Decline',
  label: 'Cookie consent',
};

const BY_LOCALE: Record<Locale, ConsentStrings> = {
  en: EN_CONSENT,

  tr: {
    message: 'Deneyiminizi iyileştirmek ve trafiği analiz etmek için çerezler kullanıyoruz. Gizlilik Politikamıza göz atın.',
    learnMore: 'Daha fazla bilgi',
    accept: 'Kabul et',
    decline: 'Reddet',
    label: 'Çerez onayı',
  },

  de: {
    message: 'Wir verwenden Cookies, um Ihr Erlebnis zu verbessern und den Traffic zu analysieren. Siehe unsere Datenschutzerklärung.',
    learnMore: 'Mehr erfahren',
    accept: 'Akzeptieren',
    decline: 'Ablehnen',
    label: 'Cookie-Einwilligung',
  },

  es: {
    message: 'Usamos cookies para mejorar tu experiencia y analizar el tráfico. Consulta nuestra Política de Privacidad.',
    learnMore: 'Más información',
    accept: 'Aceptar',
    decline: 'Rechazar',
    label: 'Consentimiento de cookies',
  },

  pl: {
    message: 'Używamy plików cookie, aby ulepszyć Twoje doświadczenie i analizować ruch. Zobacz naszą Politykę prywatności.',
    learnMore: 'Dowiedz się więcej',
    accept: 'Akceptuję',
    decline: 'Odrzuć',
    label: 'Zgoda na pliki cookie',
  },

  pt: {
    message: 'Utilizamos cookies para melhorar a sua experiência e analisar o tráfego. Consulte a nossa Política de Privacidade.',
    learnMore: 'Saber mais',
    accept: 'Aceitar',
    decline: 'Recusar',
    label: 'Consentimento de cookies',
  },

  fr: {
    message: 'Nous utilisons des cookies pour améliorer votre expérience et analyser le trafic. Consultez notre Politique de confidentialité.',
    learnMore: 'En savoir plus',
    accept: 'Accepter',
    decline: 'Refuser',
    label: 'Consentement aux cookies',
  },

  ar: {
    message: 'نستخدم ملفات تعريف الارتباط لتحسين تجربتك وتحليل حركة الزيارات. اطّلع على سياسة الخصوصية لدينا.',
    learnMore: 'اعرف المزيد',
    accept: 'أوافق',
    decline: 'أرفض',
    label: 'الموافقة على ملفات تعريف الارتباط',
  },

  ur: {
    message: 'ہم آپ کے تجربے کو بہتر بنانے اور ٹریفک کا تجزیہ کرنے کے لیے کوکیز استعمال کرتے ہیں۔ ہماری پرائیویسی پالیسی دیکھیں۔',
    learnMore: 'مزید جانیں',
    accept: 'قبول کریں',
    decline: 'مسترد کریں',
    label: 'کوکیز کی رضامندی',
  },
};

/** The banner's copy for a language. Unknown codes fall back to English. */
export function consentStrings(locale: Locale): ConsentStrings {
  return BY_LOCALE[locale] ?? EN_CONSENT;
}
