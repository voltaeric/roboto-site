import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import '@/components/styles/80sNeon.css'

import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ['latin'] }) 

export const metadata: Metadata = {
  title: 'oTTo RoBoTo',
  description: 'The smart way to marketing and managing your social media',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html >
  )
}
