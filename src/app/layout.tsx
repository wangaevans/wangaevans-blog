import { Commissioner } from 'next/font/google'
import config from '../config'
import './globals.css'
import Navbar from '../components/navbar'
import ThemeProvider from '../components/theme/theme-provider'
import Footer from '../components/footer'
import { Metadata } from 'next'
import GoogleAnalytics from './GoogleAnalytics'
import Script from 'next/script'
const commissioner = Commissioner({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: config.site.branding.name,
  description: config.site.branding.description,
  icons: {
    icon: '/favicon.ico'
  },
  alternates:{
    canonical:`https://wangaevans.com`
  },
  robots:{
    index:true,
    follow:true,
  }
}
interface RootLayoutProps {
  children: React.ReactNode
}
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-WPL65WDW');
        `}
    </Script>
      <body className={`${commissioner.className}`}>
       
          <GoogleAnalytics/>
        <ThemeProvider>
          <Navbar branding={config.site.branding} links={config.site.links} />
          {children}
          <Footer copyright={config.site.copyright} />
        </ThemeProvider>
        <noscript
        dangerouslySetInnerHTML={{
        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WPL65WDW" height="0" width="0" style="display: none; visibility: hidden;"></iframe>`,
        }} 
    />
      </body>
    </html>
  )
}
