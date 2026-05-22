import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "manus — олимпиадная школа по математике",
  description:
    "Онлайн-школа manus: готовим к олимпиадам по математике. Системные курсы, кураторы и преподаватели — призёры и победители олимпиад.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "manus",
    title:
      "manus — олимпиадная школа по математике",
    description:
      "Готовим к олимпиадам по математике.",
    url: "/",
    images: [{ url: "/assets/brand/logo.png" }],
  },
  twitter: { card: "summary_large_image" },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/assets/brand/favicon.png", type: "image/png", sizes: "256x256" },
    ],
    apple: "/assets/brand/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#1E7BFF",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
