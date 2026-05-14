import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://einvite-bi4o-opal.vercel.app/"),

  title: "Celebration of life of Alhaja Risikat Adejoke Adelabu",
  description: "Invitation for Burial Ceremony",


  openGraph: {
    title: "Special Celebration of Alhaja Risikat Adelabu",
    description: "Official Invitation",
    images: [
      {
        url: "/assets/riskat.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
