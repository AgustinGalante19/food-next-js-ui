'use client'

import { Providers } from '@/context/Providers'
import 'react-toastify/dist/ReactToastify.css'
import './globals.css'
import { Open_Sans } from 'next/font/google'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useAuthStore } from '@/hooks/zustand/useAuthStore'
import { useCartStore } from '@/hooks/zustand/useCartStore'
import { Product } from '@/types/Category'
import NextTopLoader from 'nextjs-toploader'

const openSans = Open_Sans({ subsets: ['latin'] })

interface LayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: LayoutProps) {
  const pathname = usePathname()
  const { push } = useRouter()

  const { addItem } = useCartStore()

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

  useEffect(() => {
    const itemsOnCart: string = window.localStorage.getItem('items') ?? '[]'
    const parsedItems: Product[] = JSON.parse(itemsOnCart)
    if (parsedItems.length > 0) {
      parsedItems.forEach((item) => {
        addItem(item)
      })
    }
  }, [addItem])

  return (
    <html lang="en">
      <body className={openSans.className}>
        <NextTopLoader color="#ea3f30" />
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
