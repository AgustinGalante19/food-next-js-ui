"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { ArrowRightOutlined } from "@ant-design/icons";
interface Route {
  href: string;
  title: string;
}

const routes: Route[] = [
  {
    href: "/",
    title: "Home",
  },

  {
    href: "#",
    title: "Menu",
  },

  {
    href: "#",
    title: "Service",
  },
  {
    href: "#",
    title: "Contact",
  },
];

export default function Navigation() {
  const pathname = usePathname();
  console.log(`${pathname} - ${routes[0].href}`, pathname === routes[0].href);
  return (
    <Navbar>
      <NavbarBrand>
        <p className='font-bold text-4xl'>
          F<span className='text-primary'>OO</span>D
        </p>
      </NavbarBrand>
      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        {routes.map(({ href, title }) => (
          <NavbarItem key={href}>
            <Link
              href={href}
              aria-current='page'
              className={
                href === pathname ? "text-primary font-bold" : "text-secondary"
              }
            >
              {title}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem>
          <Button
            as={Link}
            color='primary'
            className='px-8 rounded-full'
            href='#'
            variant='shadow'
          >
            Sign Up
            <ArrowRightOutlined />
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
