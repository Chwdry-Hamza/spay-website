/**
 * The blog's own furniture, in every language.
 *
 * Post bodies come from the CMS and are translated there. Everything AROUND a
 * post — breadcrumbs, "On this page", the byline's reading time, the share
 * controls, the app CTA — lives in this repo and is translated here, exactly
 * like the five brand pages.
 *
 * These are passed down as props rather than read from a context. Server
 * components render most of this tree, and a prop is the only thing that
 * crosses that boundary without turning a page into a client component.
 */
import type { Locale } from './locales';

export type BlogStrings = {
  /** Blog index page. */
  index: {
    title: string;
    intro: string;
    /** Breadcrumb label for the site root. */
    home: string;
    /** Breadcrumb label for the blog itself. */
    blog: string;
    searchPlaceholder: string;
    searchLabel: string;
    empty: string;
  };

  /** A single post. */
  post: {
    /** `{n}` is replaced by the number of minutes. */
    readTime: string;
    toc: string;
    related: string;
    copyLink: string;
    copied: string;
    shareX: string;
    shareLinkedIn: string;
    /** Label before the tag pills at the foot of an article. */
    tagsLabel: string;
    /** Shown when a post is only partly translated. */
    partialNotice: string;
  };

  /** The app call-to-action under a post, and its narrow rail version. */
  cta: {
    title: string;
    body: string;
    appStore: string;
    playStore: string;
    railBody: string;
    railButton: string;
  };

  /** Category and tag listings. */
  listing: {
    /** `{tag}` is replaced by the tag itself. */
    taggedTitle: string;
    /**
     * `{n}` is replaced by the count.
     *
     * Written so it is grammatical for ANY number, rather than carrying a
     * plural form per language. Arabic alone has six plural categories and
     * Polish three; a count-label phrasing ("Articles: 5") is correct in every
     * language and avoids shipping grammar that is subtly wrong.
     */
    articleCount: string;
  };

  /** Pagination — labels only; the numbers are numbers everywhere. */
  pagination: {
    label: string;
    previous: string;
    next: string;
  };
};

export const EN_BLOG: BlogStrings = {
  index: {
    title: 'Blog',
    intro: 'Guides and updates on spending crypto, the SPay card, and the wallet behind it.',
    home: 'Home',
    blog: 'Blog',
    searchPlaceholder: 'Search posts and pages…',
    searchLabel: 'Search posts and pages',
    empty: 'No posts yet.',
  },
  post: {
    readTime: '{n} min read',
    toc: 'On this page',
    related: 'Keep reading',
    copyLink: 'Copy link to this article',
    copied: 'Copied',
    shareX: 'Share on X',
    shareLinkedIn: 'Share on LinkedIn',
    tagsLabel: 'Tags:',
    partialNotice: 'Some of this article is still shown in English.',
  },
  cta: {
    title: 'One app, all your money',
    body: 'Holding, sending, and spending crypto used to mean three apps and constant shuffling between them. SPay puts all three in one place, with your keys, your control, and one tap at the till.',
    appStore: 'Download on the App Store',
    playStore: 'Get it on Google Play',
    railBody: 'Hold, send and spend crypto from one self-custody app.',
    railButton: 'Get the app',
  },
  listing: {
    taggedTitle: 'Posts tagged “{tag}”',
    articleCount: 'Articles: {n}',
  },
  pagination: {
    label: 'Pagination',
    previous: 'Previous',
    next: 'Next',
  },
};

const TR_BLOG: BlogStrings = {
  index: {
    title: 'Blog',
    intro: 'Kripto harcama, SPay kartı ve arkasındaki cüzdan üzerine rehberler ve güncellemeler.',
    home: 'Ana sayfa',
    blog: 'Blog',
    searchPlaceholder: 'Yazılarda ve sayfalarda ara…',
    searchLabel: 'Yazılarda ve sayfalarda ara',
    empty: 'Henüz yazı yok.',
  },
  post: {
    readTime: '{n} dk okuma',
    toc: 'Bu sayfada',
    related: 'Okumaya devam edin',
    copyLink: 'Bu yazının bağlantısını kopyala',
    copied: 'Kopyalandı',
    shareX: "X'te paylaş",
    shareLinkedIn: "LinkedIn'de paylaş",
    tagsLabel: 'Etiketler:',
    partialNotice: 'Bu yazının bir bölümü hâlâ İngilizce görünüyor.',
  },
  cta: {
    title: 'Tek uygulama, tüm paranız',
    body: 'Kripto tutmak, göndermek ve harcamak eskiden üç ayrı uygulama ve sürekli geçiş yapmak demekti. SPay üçünü tek yerde toplar; anahtarlar sizde, kontrol sizde, kasada tek dokunuş.',
    appStore: "App Store'dan indirin",
    playStore: "Google Play'den alın",
    railBody: 'Kriptonuzu tek bir self-custody uygulamadan tutun, gönderin ve harcayın.',
    railButton: 'Uygulamayı edinin',
  },
  listing: {
    taggedTitle: '“{tag}” etiketli yazılar',
    articleCount: 'Yazı sayısı: {n}',
  },
  pagination: { label: 'Sayfalama', previous: 'Önceki', next: 'Sonraki' },
};

const DE_BLOG: BlogStrings = {
  index: {
    title: 'Blog',
    intro: 'Ratgeber und Neuigkeiten rund um das Ausgeben von Krypto, die SPay-Karte und die Wallet dahinter.',
    home: 'Startseite',
    blog: 'Blog',
    searchPlaceholder: 'Beiträge und Seiten durchsuchen…',
    searchLabel: 'Beiträge und Seiten durchsuchen',
    empty: 'Noch keine Beiträge.',
  },
  post: {
    readTime: '{n} Min. Lesezeit',
    toc: 'Auf dieser Seite',
    related: 'Weiterlesen',
    copyLink: 'Link zu diesem Artikel kopieren',
    copied: 'Kopiert',
    shareX: 'Auf X teilen',
    shareLinkedIn: 'Auf LinkedIn teilen',
    tagsLabel: 'Schlagwörter:',
    partialNotice: 'Ein Teil dieses Artikels wird noch auf Englisch angezeigt.',
  },
  cta: {
    title: 'Eine App für Ihr ganzes Geld',
    body: 'Krypto halten, senden und ausgeben hieß bisher drei Apps und ständiges Hin und Her. SPay bringt alle drei an einen Ort — mit Ihren Schlüsseln, Ihrer Kontrolle und einem Tippen an der Kasse.',
    appStore: 'Im App Store laden',
    playStore: 'Bei Google Play holen',
    railBody: 'Krypto halten, senden und ausgeben — aus einer einzigen Self-Custody-App.',
    railButton: 'App holen',
  },
  listing: {
    taggedTitle: 'Beiträge mit „{tag}“',
    articleCount: 'Beiträge: {n}',
  },
  pagination: { label: 'Seitennummerierung', previous: 'Zurück', next: 'Weiter' },
};

const ES_BLOG: BlogStrings = {
  index: {
    title: 'Blog',
    intro: 'Guías y novedades sobre gastar cripto, la tarjeta SPay y el monedero que hay detrás.',
    home: 'Inicio',
    blog: 'Blog',
    searchPlaceholder: 'Buscar en publicaciones y páginas…',
    searchLabel: 'Buscar en publicaciones y páginas',
    empty: 'Aún no hay publicaciones.',
  },
  post: {
    readTime: '{n} min de lectura',
    toc: 'En esta página',
    related: 'Sigue leyendo',
    copyLink: 'Copiar el enlace de este artículo',
    copied: 'Copiado',
    shareX: 'Compartir en X',
    shareLinkedIn: 'Compartir en LinkedIn',
    tagsLabel: 'Etiquetas:',
    partialNotice: 'Parte de este artículo todavía se muestra en inglés.',
  },
  cta: {
    title: 'Una app, todo tu dinero',
    body: 'Guardar, enviar y gastar cripto solía significar tres apps y saltar de una a otra sin parar. SPay reúne las tres en un solo sitio, con tus claves, tu control y un toque al pagar.',
    appStore: 'Descargar en el App Store',
    playStore: 'Consíguelo en Google Play',
    railBody: 'Guarda, envía y gasta cripto desde una sola app de autocustodia.',
    railButton: 'Descargar la app',
  },
  listing: {
    taggedTitle: 'Publicaciones etiquetadas «{tag}»',
    articleCount: 'Artículos: {n}',
  },
  pagination: { label: 'Paginación', previous: 'Anterior', next: 'Siguiente' },
};

const PL_BLOG: BlogStrings = {
  index: {
    title: 'Blog',
    intro: 'Poradniki i nowości o wydawaniu krypto, karcie SPay i portfelu, który za nią stoi.',
    home: 'Strona główna',
    blog: 'Blog',
    searchPlaceholder: 'Szukaj we wpisach i stronach…',
    searchLabel: 'Szukaj we wpisach i stronach',
    empty: 'Nie ma jeszcze wpisów.',
  },
  post: {
    readTime: '{n} min czytania',
    toc: 'Na tej stronie',
    related: 'Czytaj dalej',
    copyLink: 'Skopiuj link do tego artykułu',
    copied: 'Skopiowano',
    shareX: 'Udostępnij na X',
    shareLinkedIn: 'Udostępnij na LinkedInie',
    tagsLabel: 'Tagi:',
    partialNotice: 'Część tego artykułu jest nadal wyświetlana po angielsku.',
  },
  cta: {
    title: 'Jedna aplikacja, wszystkie Twoje pieniądze',
    body: 'Trzymanie, wysyłanie i wydawanie krypto oznaczało do tej pory trzy aplikacje i ciągłe przeskakiwanie między nimi. SPay łączy wszystkie trzy w jednym miejscu — z Twoimi kluczami, Twoją kontrolą i jednym dotknięciem przy kasie.',
    appStore: 'Pobierz w App Store',
    playStore: 'Pobierz z Google Play',
    railBody: 'Trzymaj, wysyłaj i wydawaj krypto z jednej aplikacji z własnymi kluczami.',
    railButton: 'Pobierz aplikację',
  },
  listing: {
    taggedTitle: 'Wpisy z tagiem „{tag}”',
    articleCount: 'Liczba artykułów: {n}',
  },
  pagination: { label: 'Paginacja', previous: 'Poprzednia', next: 'Następna' },
};

const PT_BLOG: BlogStrings = {
  index: {
    title: 'Blog',
    intro: 'Guias e novidades sobre gastar criptomoedas, o cartão SPay e a carteira por trás dele.',
    home: 'Início',
    blog: 'Blog',
    searchPlaceholder: 'Pesquisar em artigos e páginas…',
    searchLabel: 'Pesquisar em artigos e páginas',
    empty: 'Ainda não há artigos.',
  },
  post: {
    readTime: '{n} min de leitura',
    toc: 'Nesta página',
    related: 'Continue a ler',
    copyLink: 'Copiar a ligação deste artigo',
    copied: 'Copiado',
    shareX: 'Partilhar no X',
    shareLinkedIn: 'Partilhar no LinkedIn',
    tagsLabel: 'Etiquetas:',
    partialNotice: 'Parte deste artigo ainda é apresentada em inglês.',
  },
  cta: {
    title: 'Uma app, todo o seu dinheiro',
    body: 'Guardar, enviar e gastar criptomoedas costumava significar três apps e saltar constantemente entre elas. A SPay junta as três num só lugar, com as suas chaves, o seu controlo e um toque na caixa.',
    appStore: 'Descarregar na App Store',
    playStore: 'Disponível no Google Play',
    railBody: 'Guarde, envie e gaste criptomoedas a partir de uma única app de autocustódia.',
    railButton: 'Obter a app',
  },
  listing: {
    taggedTitle: 'Artigos com a etiqueta «{tag}»',
    articleCount: 'Artigos: {n}',
  },
  pagination: { label: 'Paginação', previous: 'Anterior', next: 'Seguinte' },
};

const FR_BLOG: BlogStrings = {
  index: {
    title: 'Blog',
    intro: 'Guides et actualités sur les dépenses en cryptos, la carte SPay et le portefeuille qui la soutient.',
    home: 'Accueil',
    blog: 'Blog',
    searchPlaceholder: 'Rechercher dans les articles et les pages…',
    searchLabel: 'Rechercher dans les articles et les pages',
    empty: 'Pas encore d’articles.',
  },
  post: {
    readTime: '{n} min de lecture',
    toc: 'Sur cette page',
    related: 'Poursuivre la lecture',
    copyLink: 'Copier le lien de cet article',
    copied: 'Copié',
    shareX: 'Partager sur X',
    shareLinkedIn: 'Partager sur LinkedIn',
    tagsLabel: 'Mots-clés :',
    partialNotice: 'Une partie de cet article s’affiche encore en anglais.',
  },
  cta: {
    title: 'Une seule app pour tout votre argent',
    body: 'Conserver, envoyer et dépenser des cryptos demandait jusqu’ici trois applications et des allers-retours permanents. SPay réunit les trois au même endroit, avec vos clés, votre contrôle et un seul geste en caisse.',
    appStore: 'Télécharger dans l’App Store',
    playStore: 'Disponible sur Google Play',
    railBody: 'Conservez, envoyez et dépensez vos cryptos depuis une seule app en auto-conservation.',
    railButton: 'Télécharger l’app',
  },
  listing: {
    taggedTitle: 'Articles marqués « {tag} »',
    articleCount: 'Articles : {n}',
  },
  pagination: { label: 'Pagination', previous: 'Précédent', next: 'Suivant' },
};

const AR_BLOG: BlogStrings = {
  index: {
    title: 'المدونة',
    intro: 'أدلة وأخبار عن إنفاق العملات الرقمية وبطاقة SPay والمحفظة التي تقف خلفها.',
    home: 'الرئيسية',
    blog: 'المدونة',
    searchPlaceholder: 'ابحث في المقالات والصفحات…',
    searchLabel: 'ابحث في المقالات والصفحات',
    empty: 'لا توجد مقالات بعد.',
  },
  post: {
    readTime: 'قراءة {n} دقيقة',
    toc: 'في هذه الصفحة',
    related: 'تابع القراءة',
    copyLink: 'انسخ رابط هذا المقال',
    copied: 'تم النسخ',
    shareX: 'شارك على X',
    shareLinkedIn: 'شارك على LinkedIn',
    tagsLabel: 'الوسوم:',
    partialNotice: 'لا يزال جزء من هذا المقال معروضًا بالإنجليزية.',
  },
  cta: {
    title: 'تطبيق واحد لكل أموالك',
    body: 'كان الاحتفاظ بالعملات الرقمية وإرسالها وإنفاقها يعني ثلاثة تطبيقات وتنقلًا دائمًا بينها. يجمع SPay الثلاثة في مكان واحد، بمفاتيحك أنت، وتحكمك أنت، وبلمسة واحدة عند الدفع.',
    appStore: 'حمّله من App Store',
    playStore: 'احصل عليه من Google Play',
    railBody: 'احتفظ بعملاتك الرقمية وأرسلها وأنفقها من تطبيق واحد تملك مفاتيحه.',
    railButton: 'حمّل التطبيق',
  },
  listing: {
    taggedTitle: 'مقالات موسومة بـ «{tag}»',
    articleCount: 'عدد المقالات: {n}',
  },
  pagination: { label: 'ترقيم الصفحات', previous: 'السابق', next: 'التالي' },
};

const UR_BLOG: BlogStrings = {
  index: {
    title: 'بلاگ',
    intro: 'کرپٹو خرچ کرنے، SPay کارڈ اور اس کے پیچھے موجود والٹ کے بارے میں رہنمائی اور تازہ خبریں۔',
    home: 'ہوم',
    blog: 'بلاگ',
    searchPlaceholder: 'مضامین اور صفحات میں تلاش کریں…',
    searchLabel: 'مضامین اور صفحات میں تلاش کریں',
    empty: 'ابھی کوئی مضمون نہیں۔',
  },
  post: {
    readTime: '{n} منٹ کا مطالعہ',
    toc: 'اس صفحے پر',
    related: 'مزید پڑھیں',
    copyLink: 'اس مضمون کا لنک کاپی کریں',
    copied: 'کاپی ہو گیا',
    shareX: 'X پر شیئر کریں',
    shareLinkedIn: 'LinkedIn پر شیئر کریں',
    tagsLabel: 'ٹیگز:',
    partialNotice: 'اس مضمون کا کچھ حصہ ابھی انگریزی میں دکھایا جا رہا ہے۔',
  },
  cta: {
    title: 'ایک ایپ، آپ کا سارا پیسہ',
    body: 'کرپٹو رکھنا، بھیجنا اور خرچ کرنا پہلے تین الگ ایپس اور ان کے درمیان مسلسل بھاگ دوڑ کا مطلب تھا۔ SPay تینوں کو ایک جگہ لے آتا ہے — آپ کی کیز، آپ کا اختیار، اور کاؤنٹر پر صرف ایک ٹیپ۔',
    appStore: 'App Store سے ڈاؤن لوڈ کریں',
    playStore: 'Google Play سے حاصل کریں',
    railBody: 'ایک ہی سیلف کسٹڈی ایپ سے کرپٹو رکھیں، بھیجیں اور خرچ کریں۔',
    railButton: 'ایپ حاصل کریں',
  },
  listing: {
    taggedTitle: '«{tag}» ٹیگ والے مضامین',
    articleCount: 'مضامین: {n}',
  },
  pagination: { label: 'صفحہ بندی', previous: 'پچھلا', next: 'اگلا' },
};

const BY_LOCALE: Record<Locale, BlogStrings> = {
  en: EN_BLOG,
  tr: TR_BLOG,
  de: DE_BLOG,
  es: ES_BLOG,
  pl: PL_BLOG,
  pt: PT_BLOG,
  fr: FR_BLOG,
  ar: AR_BLOG,
  ur: UR_BLOG,
};

/** The blog furniture for a language. Unknown codes fall back to English. */
export function blogStrings(locale: Locale): BlogStrings {
  return BY_LOCALE[locale] ?? EN_BLOG;
}

/**
 * `readTime` with its `{n}` filled in.
 *
 * Takes the `post` group rather than the whole object, because that is what the
 * components which need it already receive.
 */
export function readTimeLabel(post: BlogStrings['post'], minutes: number): string {
  return post.readTime.replace('{n}', String(minutes));
}
