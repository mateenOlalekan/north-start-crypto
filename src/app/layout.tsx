import type { Metadata } from "next";
import { Poppins, Jost,Sansita } from "next/font/google";
import "./globals.css";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const jost = Jost({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-jost",
})

const sansita = Sansita({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "North Star Group",
  description: "North Star Group official platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" >
      <head />
      <body className={`min-h-sscreen ${sansita.className} ${poppins.variable} ${jost.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}


