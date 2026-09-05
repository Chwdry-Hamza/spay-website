/**
 * Turkish "How it works" copy. The journey step numbers ("01"…"06") are the
 * design's own numerals and stay as they are.
 */
import type { HowItWorksContent } from "@/lib/site/howItWorks";

export const TR_HOW_IT_WORKS: HowItWorksContent = {
  hero: {
    title: "SPay kartı nasıl çalışır",
    lede: "Kayıttan ilk ödemeye kadar, baştan sona yaklaşık beş dakika. İşte her adım — hesabı oluşturmaktan bir harcamanın geçmişinizde göründüğü ana kadar.",
    image: {
      src: "/site/spay-phone-hand.png",
      alt: "SPay uygulamasının açık olduğu telefonu tutan el",
    },
    steps: [
      {
        title: "Hesabınızı oluşturun",
        body: "Bir e-posta adresi girin, şifre belirleyin ve e-postayı onaylayın. Hesap bu kadar — şube ziyareti yok, evrak yok.",
      },
      {
        title: "Kripto ile yükleyin",
        body: "Yatırma bölümünü açın, USDT, USDC, ETH veya TRX'i seçin, ardından adresinizi görmek için Tron ya da Ethereum'u belirleyin. Herhangi bir cüzdandan veya borsadan gönderin; bakiye dakikalar içinde düşer.",
      },
      {
        title: "Sanal kartınızı alın",
        body: "Platinum, Signature veya Infinite'i seçin ve tek seferlik ücreti ödeyin. Kart numarası, son kullanma tarihi ve CVV uygulamada belirir; Apple Pay veya Google Pay için hazırdır.",
      },
      {
        title: "Harcayın, yönetin, transfer edin",
        body: "Mağazalarda temassız ödeyin, online alışveriş yapın ve aboneliklerinizi ABD doları ile karşılayın. Her işlem; iş yerini, yerel tutarı ve dönüşüm sonrası tam maliyeti gösterir.",
      },
    ],
  },

  journey: {
    title: "Kayıttan ilk ödemeye",
    steps: [
      { n: "01", title: "Hesap oluşturuldu", duration: "30 sn", body: "E-posta, şifre, onay" },
      { n: "02", title: "Kimlik doğrulandı", duration: "2–5 dk", body: "Kimliğinizle uygulama içi KYC" },
      { n: "03", title: "Bakiye yüklendi", duration: "1–10 dk", body: "Cüzdanınızdan kripto gönderin" },
      { n: "04", title: "Kart alındı", duration: "1 dk", body: "Bir plan seçin ve tek seferlik ücreti ödeyin" },
      { n: "05", title: "Cüzdana eklendi", duration: "30 sn", body: "Apple Pay veya Google Pay" },
      { n: "06", title: "İlk ödeme", duration: "Anında", body: "Temassız ödeyin veya ödeme sayfasına yapıştırın" },
    ],
  },

  marquee: { label: "Sen de hemen al." },

  verification: {
    title: "Doğrulama çok kolay",
    cards: [
      {
        title: "Temel bilgiler",
        body: "Yalnızca temel bilgiler — adınız, e-postanız ve telefon numaranız. Banka hesabı yok, adres kanıtı yok, evrak yok. Bir dakika içinde içeridesiniz.",
      },
      {
        title: "Hızlı kimlik kontrolü",
        body: "Pasaportunuzun veya kimliğinizin fotoğrafını çekin ve bir selfie alın. Doğrulama otomatiktir ve genellikle günler değil, dakikalar içinde tamamlanır.",
      },
      {
        title: "Kartınız hazır!",
        body: "Onaydan sonra sanal kartınız anında görünür — bakiyenizden yükleyin ve hemen harcamaya başlayın. Fiziksel kartı istediğiniz zaman sipariş edebilirsiniz.",
      },
    ],
    image: {
      src: "/site/spay-kyc-phone.png",
      alt: "Telefonda SPay KYC doğrulama ekranı",
    },
  },
};
