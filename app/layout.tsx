import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Japan Bridge - Buy from Japan",
  description: "International shopping service from Japan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}