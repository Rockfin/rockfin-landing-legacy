import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Rockfin LLC | Web3 Infrastructure & Government Contracting",
  description: "Rockfin LLC delivers enterprise-grade web3 infrastructure, strategic crypto investments, and secure logistics solutions for government and private entities.",
  keywords: ["web3", "blockchain", "cryptocurrency", "government contracting", "logistics", "infrastructure"],
  authors: [{ name: "Rockfin LLC" }],
  openGraph: {
    title: "Rockfin LLC | Web3 Infrastructure & Government Contracting",
    description: "Enterprise-grade web3 infrastructure, strategic crypto investments, and secure logistics solutions.",
    url: "https://rockfinllc.com",
    siteName: "Rockfin LLC",
    locale: "en_US",
    type: "website",
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
        className={`${montserrat.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
