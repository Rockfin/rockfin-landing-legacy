import type { Metadata } from "next";
import { Montserrat, Inter, Quicksand } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"], // Adjust weights as needed
});

export const metadata: Metadata = {
  title: "Rockfin.io | Web3 Infrastructure & Government Contracting",
  description: "Rockfin.io delivers enterprise-grade web3 infrastructure, strategic crypto investments, and secure logistics solutions for government and private entities.",
  keywords: ["web3", "blockchain", "cryptocurrency", "government contracting", "logistics", "infrastructure"],
  authors: [{ name: "Rockfin.io" }],
  icons: {
    icon: "/Rockfin.svg",
    apple: "/Rockfin.svg",
  },
  openGraph: {
    title: "Rockfin.io | Web3 Infrastructure & Government Contracting",
    description: "Enterprise-grade web3 infrastructure, strategic crypto investments, and secure logistics solutions.",
    url: "https://rockfin.io",
    siteName: "Rockfin.io",
    locale: "en_US",
    type: "website",
    images: [{
      url: "/Rockfin.svg",
      width: 800,
      height: 600,
      alt: "Rockfin.io Logo"
    }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${inter.variable} ${quicksand.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
