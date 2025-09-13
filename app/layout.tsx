import type React from "react"
import { Inter, Manrope } from "next/font/google"
import "./globals.css"
import Script from "next/script";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} antialiased`}>
      <head>
         <Script
          id="impact-universal-tag"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(a,b,c,d,e,f,g){e['ire_o']=c;e[c]=e[c]||function(){(e[c].a=e[c].a||[]).push(arguments)};f=d.createElement(b);g=d.getElementsByTagName(b)[0];f.async=1;f.src=a;g.parentNode.insertBefore(f,g);})('https://utt.impactcdn.com/A6477190-e994-4812-b281-2b613f0e188b1.js','script','ire',document,window);`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.app'
    };
