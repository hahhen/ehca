import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme/theme-provider"

const appleGaramond = localFont({
  src: [
    {
      path: '../../public/fonts/apple-garamond/AppleGaramond.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/apple-garamond/AppleGaramond-Italic.woff',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/apple-garamond/AppleGaramond-Light.woff',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/apple-garamond/AppleGaramond-LightItalic.woff',
      weight: '300',
      style: 'italic',
    }
  ],
  variable: '--font-apple-garamond',
})

const chicagoFLF = localFont({ src: '../../public/fonts/chicago/chicago.ttf', variable: '--font-chicagoFLF' })

export const metadata: Metadata = {
  title: "Leibniz e Computação | Museu de Computação Prof. Odelar Leite Linhares",
  description: "Leibniz e Computação: Sistema Binário e Contador Mecânico, um projeto para o Museu de Computação Prof. Odelar Leite Linhares, Instituto de Ciências e Matemáticas e de Computação - ICMC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${chicagoFLF.className} ${appleGaramond.variable} antialiased w-full`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <div className="max-w-[1600px] mx-auto">
            <Header />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
