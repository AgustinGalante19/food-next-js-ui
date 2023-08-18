'use client'

import React from 'react'
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
} from '@nextui-org/react'
import { usePathname } from 'next/navigation'
import { ArrowRightOutlined } from '@ant-design/icons'
import { useAuthCtx } from '@/context/AuthContext'
import jwt_decode from 'jwt-decode'

interface Route {
  href: string
  title: string
}

export default function Navigation() {
  const routes: Route[] = [
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
  ]

  const pathname = usePathname()

  const { isAuth } = useAuthCtx()
  let decoded: any
  const token = localStorage.getItem('user-token') ?? ''
  if (token !== '') {
    decoded = jwt_decode(token)
  }
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
          {isAuth ? (
            <User
              className="font-bold cursor-pointer "
              name={`${decoded.body.name} ${decoded.body.surname}`}
              description={<span>{decoded.body.email}</span>}
              avatarProps={{
                src: 'https://avatars.githubusercontent.com/u/30373425?v=4',
              }}
            />
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
