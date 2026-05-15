import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NEPEBE | European Electromagnetic Research Initiative",
  description:
    "NEPEBE is a European deep-tech research platform exploring next-generation electromagnetic systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
