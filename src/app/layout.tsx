import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TranslationProvider } from "@/contexts/TranslationContext";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cafenoosi.fi";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Cafe Nöösi",
    template: "%s | Cafe Nöösi",
  },
  description:
    "1960-70 -lukujen modernismia sekä Bauhausin funktionalismia kanavoiva tamperelaiskahvila. Modernist café in Tampere with a pinch of Bauhaus.",
  keywords: [
    "kahvila tampere",
    "cafe tampere",
    "coffee shop tampere",
    "modernist kahvila",
    "bauhaus cafe",
    "satakunnankatu kahvila",
    "Cafe Nöösi",
  ],
  alternates: {
    canonical: "/",
    languages: {
      "fi-FI": "/",
      "en-FI": "/?lang=en",
    },
  },
  openGraph: {
    title: "Cafe Nöösi",
    description:
      "Modernistinen kahvila Tampereella Satakunnankadulla. Cafe Nöösi yhdistää 1960-70 -lukujen modernismin ja Bauhausin funktionalismin.",
    url: "/",
    siteName: "Cafe Nöösi",
    type: "website",
    locale: "fi_FI",
    alternateLocale: ["en_FI"],
    images: [
      {
        url: "/noosi_logo_big.JPG",
        width: 1200,
        height: 630,
        alt: "Cafe Nöösi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cafe Nöösi",
    description: "Modernist café in Tampere with a pinch of Bauhaus.",
    images: ["/noosi_logo_big.JPG"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const businessJsonLd = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    "@id": `${siteUrl}/#business`,
    name: "Cafe Nöösi",
    url: siteUrl,
    image: `${siteUrl}/noosi_logo_big.JPG`,
    description:
      "Cafe Nöösi on modernistinen kahvila Tampereella Satakunnankadulla – modernist café in Tampere with a pinch of Bauhaus.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Satakunnankatu 7 B 22",
      addressLocality: "Tampere",
      postalCode: "33100",
      addressCountry: "FI",
    },
    sameAs: ["https://www.instagram.com/cafenoosi"],
    servesCuisine: ["Coffee", "Wine", "Desserts"],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday"],
        opens: "14:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "11:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday"],
        opens: "11:00",
        closes: "18:00",
      },
    ],
    areaServed: {
      "@type": "City",
      name: "Tampere",
    },
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/noosi_logo.JPG" type="image/jpeg" />
        <link rel="shortcut icon" href="/noosi_logo.JPG" type="image/jpeg" />
        <link rel="preload" as="image" href="/cafe-noosi-hero.jpg" fetchpriority="high" />
        <link rel="preload" as="image" href="/noosi_naama_logo_transp.png" />
        <link rel="alternate" hrefLang="x-default" href={`${siteUrl}/`} />
        <link rel="alternate" hrefLang="fi-FI" href={`${siteUrl}/`} />
        <link rel="alternate" hrefLang="en-FI" href={`${siteUrl}/?lang=en`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <TranslationProvider>{children}</TranslationProvider>
      </body>
    </html>
  );
}
