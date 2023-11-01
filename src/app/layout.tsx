import type { Metadata } from 'next'
import './globals.css'
import { GeistSans, GeistMono } from 'geist/font'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/ThemeProvider'
import { TailwindIndicator } from '@/components/TailwindIndicator'

export const metadata: Metadata = {
  title: 'Next Tailwind',
  description: 'Next Basic Starter Template',
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    // Web
    icon: "/favicon.ico",
    // Android
    shortcut: "favicon.ico",
    // iOS
    apple: "favicon.ico"
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        GeistSans.variable,
        GeistMono.variable
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          >
          {children}
        </ThemeProvider>
        <TailwindIndicator />
      </body>
    </html>
  )
}
