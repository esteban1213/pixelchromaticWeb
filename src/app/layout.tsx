import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import Header from "./header";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "Pixelchromatic",
  description: "Boost Your Success",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Header /> */}

        {children}
        <Footer />
      </body>
    </html>
  );
}
