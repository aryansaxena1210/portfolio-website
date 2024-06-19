import Header from '@/components/header'
import './globals.css'
import { Inter } from 'next/font/google'
import ActiveSectionContextProvider from '@/context/active-section-context'
import Footer from '@/components/footer'
import { Toaster } from 'react-hot-toast'
import ThemeSwitch from '@/components/theme-switch'
import ThemeContextProvider from '@/context/theme-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Aryan Saxena | Portfolio',
  description: 'Portfolio of an upcoming developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className=' ${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90'>

        <div className="bg-[#fbe2e3] fixed h-[31.25rem] w-[31.25rem] top-[-8rem] right-[5rem] rounded-full sm:w-[68.75rem] blur-[10rem]  -z-10 dark:bg-[#946263] " />

        <div className="bg-[#dbd7fb] fixed h-[31.25rem] w-[50rem] top-[-1rem] left-[-35rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left[-5rem] -z-10 dark:bg-[#676394]" />


        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" />
          </ActiveSectionContextProvider>
          <ThemeSwitch />
        </ThemeContextProvider>


      </body>
    </html>
  )
}
