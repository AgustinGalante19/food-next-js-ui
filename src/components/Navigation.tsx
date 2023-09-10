'use client'

import React, { useEffect, useMemo, useState } from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  User,
  Badge,
} from '@nextui-org/react'
import { usePathname } from 'next/navigation'
import {
  ArrowRightOutlined,
  LogoutOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons'
import jwt_decode from 'jwt-decode'
import useAuth from '@/hooks/auth/useAuth'
import { useAuthStore } from '@/hooks/zustand/useAuthStore'
import { useCartStore } from '@/hooks/zustand/useCartStore'

interface Route {
  href: string
  title: string
}

export default function Navigation() {
  const routes: Route[] = useMemo(
    () => [
      {
        href: '/',
        title: 'Home',
      },

      {
        href: '/Menu',
        title: 'Menu',
      },

      {
        href: '/Service',
        title: 'Service',
      },
      {
        href: '/Contact',
        title: 'Contact',
      },
    ],
    []
  )

  const authorize = useAuthStore((state) => state.authorize)

  const pathname = usePathname()
  const isAuth = useAuthStore((state) => state.isAuth)
  const { handleSignout } = useAuth()

  const [decoded, setDecoded] = useState<any>('')

  const { items } = useCartStore()
  const token = localStorage.getItem('user-token') ?? ''

  useEffect(() => {
    if (token !== '') {
      setDecoded(jwt_decode(token))
    }
  }, [token])

  useEffect(() => {
    if (token !== '') {
      authorize()
    }
  })

  return (
    <Navbar disableAnimation isBordered>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle className="text-primary" />
      </NavbarContent>
      <NavbarBrand>
        <p className="font-bold text-4xl text-black">
          F<span className="text-primary">OO</span>D
        </p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {routes.map(({ href, title }) => (
          <NavbarItem key={href}>
            <Link
              href={href}
              aria-current="page"
              className={
                href === pathname ? 'text-primary font-bold' : 'text-black'
              }
            >
              {title}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          {isAuth && decoded !== '' ? (
            <div className="flex gap-2 items-center">
              <User
                className="font-bold cursor-pointer "
                name={`${decoded.name} ${decoded.surname}`}
                description={<span>{decoded.email}</span>}
                avatarProps={{
                  src: 'https://avatars.githubusercontent.com/u/30373425?v=4',
                }}
              />
              <Button
                isIconOnly
                onClick={handleSignout}
                className="bg-transparent hover:text-red-400 text-lg"
                size="lg"
              >
                <LogoutOutlined />
              </Button>
              <Button
                isIconOnly
                as={Link}
                href="/Cart"
                className="bg-transparent"
                size="lg"
              >
                <Badge
                  content={items.length}
                  shape="circle"
                  color={items.length > 0 ? 'primary' : 'default'}
                >
                  <ShoppingCartOutlined style={{ fontSize: '26px' }} />
                </Badge>
              </Button>
            </div>
          ) : (
            <Button
              as={Link}
              color="primary"
              className="px-8 rounded-full transition-all"
              href="/SignIn"
              variant="shadow"
            >
              Sign In
              <ArrowRightOutlined />
            </Button>
          )}
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {routes.map((item, index) => (
          <NavbarMenuItem key={`${item.title}-${index}`}>
            <Link
              className="w-full"
              color={pathname === item.href ? 'primary' : 'foreground'}
              href={item.href}
              size="lg"
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
