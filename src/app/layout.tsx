import { Commissioner } from 'next/font/google'
import config from '../config'
import './globals.css'
import Navbar from '../components/navbar'
import ThemeProvider from '../components/theme/theme-provider'
import Footer from '../components/footer'
import { Metadata } from 'next'
import { Suspense } from 'react'
import Analytics from '../components/analytics'
import GoogleAnalytics from './GoogleAnalytics'
const commissioner = Commissioner({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: config.site.branding.name,
  description: config.site.branding.description,
  icons: {
    icon: '/favicon.ico'
  }
}
interface RootLayoutProps {
  children: React.ReactNode
}
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${commissioner.className}`}>
        <Suspense>
          <Analytics />
        </Suspense>
          <GoogleAnalytics/>
        <ThemeProvider>
          <Navbar branding={config.site.branding} links={config.site.links} />
          {children}
          <Footer copyright={config.site.copyright} />
        </ThemeProvider>
     
      </body>
    </html>
  )
}
