import { Geist, Geist_Mono, Edu_SA_Hand } from "next/font/google";
import "./globals.css";
import Navbar from "../../Components/Navbar";
const eduSaHand = Edu_SA_Hand({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-edu",
});

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata = {
  title: "Krishna Sharma | Portfolio",
  description: "Frontend Developer Portfolio",
  icons: {
    icon: [
      { url: "/favicon.png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${eduSaHand.variable} pt-20  antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
