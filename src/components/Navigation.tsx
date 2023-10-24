'use client'

import React, { useEffect, useMemo } from 'react'
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
import { usePathname, useRouter } from 'next/navigation'
import {
  ArrowRightOutlined,
  LogoutOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons'
import { useAuthStore } from '@/hooks/zustand/useAuthStore'
import { useCartStore } from '@/hooks/zustand/useCartStore'
import { signOut, useSession } from 'next-auth/react'
import { clsx } from 'clsx'

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
        href: '/Cart',
        title: 'Cart',
      },
      {
        href: '/Reviews',
        title: 'Reviews',
      },
    ],
    []
  )

  const pathname = usePathname()
  const isAuth = useAuthStore((state) => state.isAuth)
  const { items, clearCart } = useCartStore()
  const { data, status } = useSession()

  const { push } = useRouter()

  const authorize = useAuthStore((state) => state.authorize)
  useEffect(() => {
    if (status === 'authenticated') authorize()
    if (
      status === 'authenticated' &&
      (pathname === '/SignIn' || pathname === '/SignUp')
    )
      push('/')
  })

  const handleLogOut = () => {
    signOut()
    clearCart()
    window.localStorage.setItem('items', '')
  }

  return (
    <Navbar disableAnimation isBordered>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle className="text-primary" />
      </NavbarContent>
      <NavbarBrand className="max-sm:hidden">
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
              className={clsx('text-black font-bold', {
                'text-primary font-bold': href === pathname,
              })}
            >
              <div className="flex flex-col items-center">
                <p>{title}</p>
                {pathname === href && (
                  <div className="h-1 w-4 bg-primary rounded"></div>
                )}
              </div>
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="max-sm:hidden">
          {isAuth ? (
            <div className="flex gap-2 items-center">
              <User
                className="font-bold cursor-pointer "
                name={data?.user?.name || ''}
                description={
                  <span className="text-ellipsis">{data?.user?.email}</span>
                }
                avatarProps={{
                  src:
                    data?.user?.image ||
                    'https://avatars.githubusercontent.com/u/94130?v=4',
                }}
              />
              <Button
                isIconOnly
                onClick={handleLogOut}
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
        <div className="flex justify-between">
          <p className="font-bold text-4xl text-black">
            F<span className="text-primary">OO</span>D
          </p>
          <Button
            onClick={handleLogOut}
            className="bg-transparent"
            size="lg"
            endContent={<LogoutOutlined />}
          >
            Signout
          </Button>
        </div>

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
        <div className="flex-1">
          <User
            className="font-bold cursor-pointer absolute bottom-24"
            name={data?.user?.name || ''}
            description={
              <span className="text-ellipsis">{data?.user?.email}</span>
            }
            avatarProps={{
              src:
                data?.user?.image ||
                'https://avatars.githubusercontent.com/u/94130?v=4',
            }}
          />
        </div>
      </NavbarMenu>
    </Navbar>
  )
}
