import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "InglésAI - Aprende inglés con IA",
  description:
    "Aprende inglés fácilmente utilizando inteligencia artificial. Mejora tu nivel de inglés, prepara el examen FCE y pasa de un nivel B1 a un B2 sin complicaciones.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "InglésAI - Aprende inglés con IA",
    description:
      "Descubre cómo mejorar tu inglés con inteligencia artificial. InglésAI te ayuda a alcanzar un nivel B2 desde B1 de manera rápida y efectiva.",
    images: [
      {
        url: "https://mdialityc.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "InglésAI - Aprende inglés con IA",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@inglesai",
    title: "InglésAI - Aprende inglés con IA",
    description:
      "Descubre cómo mejorar tu inglés con inteligencia artificial. InglésAI te ayuda a alcanzar un nivel B2 desde B1 de manera rápida y efectiva.",
    images: ["https://mdialityc.com/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="keywords"
          content="Aprender inglés, inteligencia artificial, curso de inglés, examen FCE, nivel B1 a B2"
        />
        <meta name="author" content="Mdiality" />
        <meta name="rating" content="general" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://inglesai.mdialityc.com" />

        {/* Hreflang */}
        <link rel="alternate" hrefLang="es" href="https://mdialityc.com/es" />
        <link rel="alternate" hrefLang="en" href="https://mdialityc.com/en" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "InglésAI",
              url: "https://mdialityc.com",
              logo: "https://mdialityc.com/logo.png",
              description:
                "Aprende inglés fácilmente utilizando inteligencia artificial. Mejora tu nivel de inglés, prepara el examen FCE y pasa de un nivel B1 a un B2 sin complicaciones.",
              sameAs: [
                "https://facebook.com/inglesai",
                "https://twitter.com/inglesai",
                "https://instagram.com/inglesai",
              ],
            }),
          }}
        ></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col">
          <Navbar />
          <main className="pt-10">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
