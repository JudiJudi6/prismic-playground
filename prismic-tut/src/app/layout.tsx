import { createClient, repositoryName } from "@/prismicio";
import type { Metadata } from "next";
import { Nunito, Nunito_Sans } from "next/font/google";
import Header from "./components/Header";
import "./globals.css";
import Footer from "./components/Footer";
import { PrismicPreview } from "@prismicio/next";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
  display: "swap",
});

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const client = createClient();
  const settings = await client.getSingle("settings", { lang });

  return {
    title: settings.data.site_title || "Flowrise fallback",
    description: settings.data.meta_description || "Flowrise is gut",
    openGraph: {
      images: [settings.data.meta_image.url || ""],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Header />
        {children}
        <Footer />
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
