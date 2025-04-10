import type { Metadata } from "next";
import "../styles/globals.css";
import { Roboto, Roboto_Mono } from "next/font/google";
import ReduxProvider from "@/providers/ReduxProvider";
import ReactQuery from "@/providers/ReactQuery";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  title: "Next MERN Template",
  description:
    "A template for Next.js with MongoDB, Express, React, and Node.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${robotoMono.variable} antialiased`}>
        <ReactQuery>
          <ReduxProvider>
            {children}
          </ReduxProvider>
        </ReactQuery>
      </body>
    </html>
  );
}
