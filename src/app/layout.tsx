'use client'

import { Providers } from '@/context/Providers'
import 'react-toastify/dist/ReactToastify.css'
import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useAuthStore } from '@/hooks/zustand/useAuthStore'

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

interface LayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: LayoutProps) {
  const pathname = usePathname()
  const { push } = useRouter()

  const authorize = useAuthStore((state) => state.authorize)
  useEffect(() => {
    const token = window.localStorage.getItem('user-token') ?? ''
    if (token !== '') {
      authorize()
      if (pathname === '/SignIn' || pathname === '/SignUp') {
        return push('/')
      }
    }
  })

  return (
    <html lang="en">
      <body className={openSans.className}>
        <Providers>
          <div className="light">
            <div className="flex flex-col min-h-screen w-full bg-white">
              <Navigation />
              <div className="flex-1">{children}</div>
              <Footer />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  )
}
