import { Roboto, Roboto_Mono } from "next/font/google";
import Head from "next/head";
import React from "react";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

interface ITProps {
  children: React.ReactNode;
  title: string;
}

export default function BaseLayout({ title, children }: ITProps) {
  return (
    <>
      <Head>
        <title>{title + " | Next.js boilerplate"}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Next.js boilerplate with full-stack capabilities"
        />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${roboto.variable} ${robotoMono.variable} antialiased`}>
        {children}
      </main>
    </>
  );
}
