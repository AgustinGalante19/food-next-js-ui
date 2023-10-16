'use client'

import { Providers } from '@/context/Providers'
import 'react-toastify/dist/ReactToastify.css'
import './globals.css'
import { Open_Sans } from 'next/font/google'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { useEffect } from 'react'
import { useCartStore } from '@/hooks/zustand/useCartStore'
import { Product } from '@/types/Category'
import NextTopLoader from 'nextjs-toploader'

const openSans = Open_Sans({ subsets: ['latin'] })

interface LayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: LayoutProps) {
  const { addItem } = useCartStore()

  useEffect(() => {
    const itemsOnCart: string = window.localStorage.getItem('items') ?? '[]'
    if (itemsOnCart !== '') {
      const parsedItems: Product[] = JSON.parse(itemsOnCart) ?? []
      if (parsedItems.length > 0) {
        parsedItems.forEach((item) => {
          addItem(item)
        })
      }
    }
  }, [addItem])

  return (
    <html lang="en">
      <body className={openSans.className}>
        <Providers>
          <NextTopLoader color="#ea3f30" />
          <div className="light flex flex-col min-h-screen w-full bg-white">
            <div className="flex-1">
              <Navigation />
              {children}
            </div>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
