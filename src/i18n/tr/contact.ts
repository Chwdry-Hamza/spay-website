/**
 * Turkish Contact page copy.
 *
 * The email address and phone number are contact details, not copy — they stay
 * exactly as they are, and so do their `mailto:` / `tel:` targets.
 */
import type { ContactContent } from "@/lib/site/contact";

export const TR_CONTACT: ContactContent = {
  hero: {
    title: "Hızlı yanıt veriyoruz",
    lede: "Aklınıza bir soru geldiği anda yapay zekâ asistanımızla sohbet edin, istediğiniz zaman bir temsilciye bağlanın ya da ekibe e-posta ve telefonla ulaşın. Kart ve dolandırıcılık konuları her zaman önceliklidir.",
    ctaLabel: "Canlı sohbeti başlat",
    ctaHref: "#channels",
    chat: {
      title: "SPay Asistanı",
      status: "Çevrimiçi",
      messages: [
        { from: "customer", text: "Kartım ödeme sırasında reddedildi. Neden?" },
        {
          from: "assistant",
          text: "Bakiyeniz tutarı karşılıyor ancak iş yeri engellenmiş bir kategoride. Orada başka bir kart deneyin — hesabınızdan hiçbir tutar çekilmedi.",
        },
        { from: "customer", text: "Biriyle görüşebilir miyim?" },
        {
          from: "assistant",
          text: "Sizi şimdi bir müşteri temsilcisine bağlıyorum. Ortalama bekleme süresi: 3 dakikanın altında.",
        },
      ],
      placeholder: "Mesajınızı yazın…",
    },
  },

  details: {
    title: "Ekibe doğrudan ulaşın",
    cards: [
      {
        eyebrow: "E-posta desteği",
        value: "support@spay.finance",
        href: "mailto:support@spay.finance",
        body: "Hesap, kart ve işlem konuları için. İş günlerinde 24 saat içinde yanıt verilir.",
      },
      {
        eyebrow: "Telefon desteği",
        value: "+971 55 947 6972",
        href: "tel:+971559476972",
        body: "Acil kart veya dolandırıcılık durumlarında canlı bir temsilciyle görüşün. Destek saatleri içinde ulaşılabilir.",
      },
      {
        eyebrow: "Destek saatleri",
        value: "Pzt – Cum",
        href: "",
        body: "09:00 – 18:00 (GST). BAE resmî tatillerinde kapalıdır.",
      },
    ],
  },

  marquee: { label: "Sen de hemen al." },

  channels: {
    title: "Uygulama içi destek",
    intro:
      "Canlı sohbet, SPay uygulamasındaki her ekranın alt köşesinde yer alır. Asistanla başlayın, ihtiyaç duyduğunuz anda bir kişiye devredin.",
    items: [
      {
        title: "Yapay zekâ asistanı",
        meta: "Anında, 7/24",
        body: "Bakiye, limit, ücret ya da reddedilen bir ödeme hakkında sorun. Asistan uygulama içinde yanıtlar ve çözümü adım adım gösterebilir.",
      },
      {
        title: "Bir kişiyle görüşün",
        meta: "Pzt – Cum, destek saatleri",
        body: "Asistan çözemedi mi? Aynı sohbet penceresinde bir temsilci isteyin. Geçmişiniz aktarılır, hiçbir şeyi tekrar anlatmanız gerekmez.",
      },
      {
        title: "Acil kart sorunları",
        meta: "Önce dondurun, sonra arayın",
        body: "Kartı uygulamadan hemen dondurun, ardından +971 55 947 6972 numarasını arayın; işlemleri birlikte inceleyelim.",
      },
    ],
  },
};
