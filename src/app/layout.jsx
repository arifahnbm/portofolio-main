import { Geist, Geist_Mono, Russo_One, Sora } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const russoOne = Russo_One({
  variable: "--font-russo-one",
  weight: ["400"],
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Arifah Nur Basyiroh Machi's Portfolio",
  description: "Portfolio of Arifah Nur Basyiroh Machi, Software Engineer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sora.variable} ${russoOne.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
