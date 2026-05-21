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
  icons: { icon: "/assets/brand/arrow-circle.png" },
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
