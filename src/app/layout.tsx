import { Commissioner } from 'next/font/google'
import config from '../config'
import './globals.css'
import Navbar from '../components/navbar'
import ThemeProvider from '../components/theme/theme-provider'
import Footer from '../components/footer'
import { Metadata } from 'next'
const commissioner = Commissioner({ subsets: ['latin'] })

export const metadata:Metadata = {
  title: config.site.branding.name,
  description: config.site.branding.description,
  icons:{
    icon:"/favicon.ico"
  }
}
interface RootLayoutProps {
  children: React.ReactNode
}
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${commissioner.className}`}>
        <ThemeProvider>
          <Navbar branding={config.site.branding} links={config.site.links} />
          {children}
          <Footer copyright={config.site.copyright} />
        </ThemeProvider>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.0.0/flowbite.min.js"></script>
      </body>
    </html>
  )
}
