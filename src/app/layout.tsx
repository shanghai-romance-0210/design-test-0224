import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "design-test-0224",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
