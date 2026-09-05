/**
 * Turkish homepage copy. Typed as the full `HomeContent`, so a new English
 * field cannot ship untranslated — the build fails instead.
 */
import type { HomeContent } from "@/lib/site/home";
import { APP_STORE_URL } from "@/lib/appStore";

const TICKS = {
  platinum: [
    "Sanal Visa kartı • Apple Pay ve Google Pay",
    "10.000 $'a kadar Satın Alma Koruması",
    "10.000 $'a kadar Uzatılmış Garanti",
    "2.000 $'a kadar Fiyat Koruması",
    "Araç Kiralama Sigortası (dünya geneli)",
    "7/24 özel destek ve Visa Avantajlar Portalı",
  ],
  signature: [
    "Platinum'daki her şey",
    "Visa Concierge hizmeti",
    "Visa Luxury Hotel Collection",
    "Havalimanı lounge erişimi (Visa Airport Companion)",
    "Daha yüksek harcama limitleri",
  ],
  infinite: [
    "Signature'daki her şey",
    "1.500.000 $'a kadar Seyahat Kaza Sigortası",
    "Bagaj Gecikmesi ve Kayıp Bagaj teminatı",
    "Öncelikli 7/24 concierge",
    "En yüksek koruma limitleri (Satın alma 20 bin $ • Garanti 25 bin $)",
    "Infinite'e özel ayrıcalıklar",
  ],
};

export const TR_HOME: HomeContent = {
  hero: {
    title: "Kripto cüzdanı ve USD Visa kartı",
    lede: "USDT, USDC, ETH ve TRX'i Tron ve Ethereum ağlarında tutun. Kriptonuz, uygulama içinde oluşturup aynı gün harcayabileceğiniz sanal bir USD Visa kartını besler — Visa'nın geçerli olduğu her yerde.",
    primary: { label: "SPay uygulamasını indir", href: APP_STORE_URL },
    secondary: { label: "Kart planlarını karşılaştır", href: "#plans" },
    image: { src: "/site/spay-hero-card.png", alt: "SPay Visa kartı" },
  },

  features: {
    image: { src: "/site/spay-phone-hand.png", alt: "SPay uygulamasının karşılama ekranı" },
    title: "SPay nasıl çalışır",
    steps: [
      {
        n: "01",
        title: "Cüzdanını oluştur",
        body: "Uygulamayı indirin, Face ID veya 6 haneli şifreyle açın ve doğrulamayı tamamlayın.",
      },
      {
        n: "02",
        title: "Kripto yatır",
        body: "Bir token ve ağ seçin, ardından adresinizi tarayın veya kopyalayın. USDT, USDC, ETH ve TRX desteklenir.",
      },
      {
        n: "03",
        title: "Kartını oluştur ve yükle",
        body: "Uygulama içinde sanal bir Visa kartı oluşturun ve USDC bakiyenizden yükleyin. Bakiye dakikalar içinde güncellenir.",
      },
      {
        n: "04",
        title: "USD ile harca",
        body: "Online, mağazada veya Apple Pay ile ödeyin. İş yerlerine, diğer kartlarda olduğu gibi dolar olarak ödenir.",
      },
    ],
  },

  wallet: {
    title: "İlk günden hazır, çoklu para birimli cüzdan",
    lede: "Her hesap, iki ağdaki en yaygın stablecoin ve coin'ler için cüzdanlarla açılır — her birinin kendi adresi, bakiyesi ve anlık USD değeri vardır.",
    tokens: ["USDT", "USDC", "ETH", "TRX", "Ethereum · Tron"],
    image: {
      src: "/site/spay-wallet-networks-v4.png",
      alt: "Ethereum ve Tron ağlarında SPay çoklu para birimli cüzdan",
    },
    tiles: [
      { n: "01", title: "Taranabilir QR" },
      { n: "02", title: "Kendini temizleyen pano" },
      { n: "03", title: "Ağ yönlendirmesi" },
      { n: "04", title: "Kendi saklamalı çekim" },
    ],
  },

  virtualCard: {
    title: "Anında sanal Visa kartı",
    lede: "Uygulama içinde sanal bir Visa kartı oluşturun ve hemen harcamaya başlayın. USDC bakiyenizden yükleyin ve Visa'nın geçerli olduğu her yerde dolarla ödeyin — online, mağazada ve mobil cüzdanınızda.",
    image: { src: "/site/spay-visa-cards.png", alt: "SPay sanal Visa kartları" },
  },

  plans: {
    title: "Sana uygun kartı seç",
    tiers: [
      {
        name: "Platinum",
        price: "9,99 $",
        priceNote: "Tek seferlik ücret",
        badge: "",
        features: TICKS.platinum,
        ctaLabel: "Hemen başla",
        ctaHref: APP_STORE_URL,
      },
      {
        name: "Signature",
        price: "19,99 $",
        priceNote: "Tek seferlik ücret",
        badge: "POPÜLER",
        features: TICKS.signature,
        ctaLabel: "Hemen başla",
        ctaHref: APP_STORE_URL,
      },
      {
        name: "Infinite",
        price: "49,99 $",
        priceNote: "Tek seferlik ücret",
        badge: "",
        features: TICKS.infinite,
        ctaLabel: "Hemen başla",
        ctaHref: APP_STORE_URL,
      },
    ],
  },

  send: {
    title: "Her SPay kullanıcısına para gönder",
    lede: "SPay'deki arkadaşlarınıza ve ailenize saniyeler içinde para gönderin. Para doğrudan kartlarına geçer, harcamaya hazır.",
    image: { src: "/site/spay-send-money.png", alt: "Başka bir SPay kullanıcısına para gönderme" },
    steps: [
      {
        n: "01",
        title: "Kişileri UID veya e-posta ile bul",
        body: "Onaylamadan önce doğrulanmış eşleşme gösterilir.",
      },
      {
        n: "02",
        title: "Son alıcılar",
        body: "Önceki bir transferi tek dokunuşla tekrarlayın.",
      },
    ],
  },

  rewards: {
    title: "Harcadıkça kazan, nakit iade olarak kullan",
    lede: "Uygulamayı kullandıkça puanlar otomatik birikir ve kart bakiyenize gerçek USDC olarak geçer.",
    points: [
      {
        n: "01",
        body: "Her kart harcaması puan kazandırır — seviyenize göre %1,5'e kadar geri kazanım.",
      },
      {
        n: "02",
        body: "Referans koduyla katılma, doğrulamayı tamamlama ve ilk kartınızı alma için tek seferlik bonuslar.",
      },
      {
        n: "03",
        body: "200 puan 1 USDC'ye dönüşür; 1.000 puandan itibaren esnek adımlarla kullanılabilir.",
      },
      {
        n: "04",
        body: "Bir arkadaşınızı davet edin ve ulaştığı her aşamada kazanın; ilerlemeyi takip edebilirsiniz.",
      },
    ],
    image: { src: "/site/spay-rewards-points-phone.png", alt: "SPay uygulaması ödül puanları ekranı" },
  },

  personalise: {
    image: { src: "/site/spay-settings-phone.png", alt: "Telefonda SPay uygulaması ayarlar ekranı" },
    title: "Kişisel, yerelleştirilmiş, kullanımı kolay",
    lede: "SPay dilinize, görünüm tercihinize ve para biriminize uyum sağlar — yardım da bir dokunuş uzağınızda.",
    languages: [
      { label: "English", note: "" },
      { label: "العربية", note: "RTL" },
      { label: "اردو", note: "RTL" },
      { label: "Türkçe", note: "" },
      { label: "Deutsch", note: "" },
      { label: "Español", note: "" },
      { label: "Polski", note: "" },
      { label: "Português", note: "" },
      { label: "Français", note: "" },
    ],
    tiles: [
      {
        title: "131 görüntüleme para birimi",
        body: "Bakiyelerinizi AED, USD, EUR, GBP, PKR, TRY ve daha fazlasında güncel kurlarla görün.",
      },
      {
        title: "Temalar ve vurgu renkleri",
        body: "Açık, koyu veya sistem teması; ayrıca uygulamayı anında yeniden renklendiren beş vurgu rengi.",
      },
      {
        title: "Uygulama içi destek",
        body: "Yapay zekâ asistanı anında yanıt verir ve gerektiğinde sohbete ekran görüntüleriyle birlikte bir temsilciyi dahil eder.",
      },
      {
        title: "E-ekstreler",
        body: "İstediğiniz dönem için giren, çıkan ve net tutarı gösteren bir PDF oluşturun, indirin veya e-postayla gönderin.",
      },
    ],
  },

  faqs: {
    title: "Sıkça sorulan sorular",
    items: [
      {
        q: "SPay kartına para nasıl yüklenir?",
        a: "SPay cüzdanınıza kripto yatırırsınız, ardından 10 $ ile 500 $ arasındaki hazır tutarlarla USDC bakiyenizden kartınıza yükleme yaparsınız. Bakiye dakikalar içinde güncellenir ve kart ABD doları olarak harcar.",
        linkLabel: "",
        linkHref: "",
        textAfter: "",
      },
      {
        q: "SPay'de hangi kriptoları tutabilirim?",
        a: "Tron (TRC-20) ve Ethereum (ERC-20) üzerinde USDT, Ethereum (ERC-20) üzerinde USDC, ayrıca native ETH ve native TRX. Her token ve ağ birleşiminin kendi yatırma adresi, bakiyesi ve anlık USD değeri vardır.",
        linkLabel: "",
        linkHref: "",
        textAfter: "",
      },
      {
        q: "Fiziksel bir SPay kartı var mı?",
        a: "Mağaza içi temassız ödeme ve ATM'den nakit çekme özellikleriyle turkuaz plastik bir Visa kartı yolda. Bugün kart sanaldır: uygulama içinde oluşturulur, online ve mağazalarda hemen harcanır ve Apple Wallet'a eklenebilir.",
        linkLabel: "",
        linkHref: "",
        textAfter: "",
      },
      {
        q: "SPay, Apple Pay ve Google Pay ile çalışıyor mu?",
        a: "Apple Pay aktif — kartınızı kart ekranından Apple Wallet'a ekleyin ve temassız ödeyin. Google Pay desteği geliştirme aşamasındadır.",
        linkLabel: "",
        linkHref: "",
        textAfter: "",
      },
      {
        q: "Nakit iade nasıl işliyor?",
        a: "Her kart harcamasında, seviyenize bağlı bir oranda puan kazanırsınız. Puanlar 200 puan = 1 dolar oranıyla USDC nakit iadesine dönüşür, 1.000 puandan itibaren kullanılabilir ve doğrudan kart bakiyenize geçer.",
        linkLabel: "",
        linkHref: "",
        textAfter: "",
      },
      {
        q: "Harcama limitleri nedir?",
        a: "Her seviyenin aylık, günlük ve tek işlem için bir üst sınırı vardır; kendi limitinizi 0 $ ile bu sınır arasında istediğiniz gibi belirlersiniz. Limitler otomatik olarak sıfırlanır. Platinum ayda 20.000 $, Signature 50.000 $ ve Infinite 100.000 $ ile sınırlıdır.",
        linkLabel: "",
        linkHref: "",
        textAfter: "",
      },
      {
        q: "Kriptomu kendi cüzdanıma nasıl çekerim?",
        a: "Çekimler, Base ağı üzerinden USDC olarak herhangi bir kendi saklamalı cüzdana gönderilir. Göndermeden önce alıcı cüzdanınızın Base ağını desteklediğinden emin olun; yanlış ağa gönderilen fonlar geri alınamaz.",
        linkLabel: "",
        linkHref: "",
        textAfter: "",
      },
      {
        q: "SPay'i BAE'de kullanabilir miyim?",
        a: "Kart, Visa ağı üzerinden iş yerlerine ABD doları olarak ödeme yapar; yani iş yerlerine hiçbir zaman kripto ödenmez. Bakiyeler dirhem olarak görüntülenebilir ve uygulama, sağdan sola desteğiyle tamamen Arapça'ya yerelleştirilmiştir. Uygunluk doğrulamaya bağlıdır — güncel ülke kapsamı için ",
        linkLabel: "İletişim",
        linkHref: "/tr/contact/",
        textAfter: " sayfasına bakın.",
      },
    ],
  },

  blogs: {
    title: "Blog",
    allLabel: "Tüm yazılar",
    allHref: "/tr/blog/",
    readMoreLabel: "Devamını oku",
  },
};
