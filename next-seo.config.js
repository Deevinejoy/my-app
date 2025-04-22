// next-seo.config.js
const config = {
  title: "Buy Cannabis, Vapes, Edibles & Narcotics Online, Fast Discreet Delivery",
  description:
    "Order premium cannabis, narcotics, edibles, concentrates, and vape products online with fast, secure, and discreet delivery. Trusted service at BudsDelivery.org.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://budsdelivery.org/", // You had a typo (you wrote .com instead of .org)
    site_name: "Buds Delivery",
    title: "Buy Cannabis, Vapes, Edibles & Narcotics Online | Buds Delivery",
    description:
      "Shop top-quality cannabis, vapes, edibles, and narcotics with safe, discreet online delivery. BudsDelivery.org offers fast shipping and secure checkout.",
    images: [
      {
        url: "https://budsdelivery.org/logo.png",
        width: 1200,
        height: 630,
        alt: "Buds Delivery - Cannabis and Narcotics Online Shop",
      },
    ],
  },
  twitter: {
    handle: "@charlie_dplug",
    site: "@charlie_dplug",
    cardType: "summary_large_image",
  },
};

export default config;
