/**
 * Turkish About page copy. Typed as the full `AboutContent`, so a new English
 * field cannot ship untranslated — the build fails instead.
 */
import type { AboutContent } from "@/lib/site/about";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/appStore";

export const TR_ABOUT: AboutContent = {
  hero: {
    title: "Dijital para, nakit kadar kolay kullanılmalı",
    lede: "SPay basit bir fikir üzerine kuruldu: dijital para nakit kadar kolay kullanılmalı — ve daha güvenli olmalı. Ailenize para gönderirken, online öderken ya da en sevdiğiniz mağazada harcarken stablecoin ödemelerini herkes için basit ve erişilebilir kılan, güvenli ve kullanımı kolay bir kripto cüzdanıyız.",
    appStore: { eyebrow: "İndirin", name: "App Store", href: APP_STORE_URL },
    playStore: { eyebrow: "Edinin", name: "Google Play", href: PLAY_STORE_URL },
    image: {
      src: "/site/about-hero-woman-card.png",
      alt: "SPay uygulamasını kullanırken SPay Visa kartı tutan kadın",
    },
  },

  borderless: {
    image: {
      src: "/site/borderless-banking.png",
      alt: "Yörüngesinde ödeme yolları olan dünya küresi",
    },
    title: "Sınırsız bankacılıkta yeni bir standart",
    paragraphs: [
      "Geleneksel kartlar bir bankaya, banka da bir ülkeye bağlıdır. Taşınana, seyahat edene ya da farklı bir ülkeden ödeme alana kadar bu sorun olmaz — sonrasında evrak işleri başlar.",
      "SPay Kartı bunların hiçbirine bağlı değildir. Bakiyeniz stablecoin olarak durur. Yüklemeniz zincir üzerinde, kendi cüzdanınızdan gelir. Kartınız, Visa ve Mastercard'ın geçerli olduğu her ülkede aynı şekilde çalışır. Gidilecek bir şube, açılacak yerel bir hesap ya da kanıtlanacak bir adres yoktur.",
      "Bilinçli olarak basittir: değerinizi USDT veya USDC olarak tutun, karşınızdaki terminal hangi para birimini istiyorsa onunla harcayın ve her işlemi gerçekleştiği anda uygulamada görün.",
    ],
  },

  stablecoin: {
    title: "Bakiyeniz neden bir stablecoin?",
    paragraphs: [
      "SPay bakiyeniz USDT ve USDC olarak tutulur — bunlar ABD dolarına sabitlenmiş stablecoin'lerdir, yani 1 USDT veya 1 USDC her zaman 1 dolar değerinde kalmayı hedefler. Böylece her iki dünyanın da en iyisini elde edersiniz: blokzincir ödemelerinin hızı, düşük maliyeti ve sınır tanımayan erişimi; Bitcoin gibi coin'lerin sert fiyat dalgalanmaları olmadan.",
      "Paranız, harcadığınızda aldığınız andaki değerindedir. Grafik takip etmek, piyasa zamanlaması yapmak yok — yalnızca saniyeler içinde hareket eden, sınır ötesinde çalışan ve SPay kartınızda her an harcanmaya hazır dijital dolarlar.",
    ],
    image: { src: "/site/stablecoin-balance.png", alt: "Altın renkli stablecoin diskleri" },
  },

  marquee: { label: "Sen de hemen al." },

  security: {
    title: "Katmanlı güvenlik, kontrol sizde",
    intro:
      "Koruma, uygulamayı açtığınız andan yeni bir cihaz giriş yaptığında aldığınız bildirime kadar sürer.",
    image: {
      src: "/site/layered-security.png",
      alt: "Katmanlı hesap güvenliğini temsil eden kalkan ve asma kilit",
    },
  },
};
