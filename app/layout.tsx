
import { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Klea",
  description: "Klea",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      className="bg-gray-100 text-gray-600 dark:bg-gray-900 dark:text-gray" >
        {children}
      </body>
    </html>
  );
}
