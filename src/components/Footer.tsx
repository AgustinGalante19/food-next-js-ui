import { MailOutlined, SendOutlined } from '@ant-design/icons'
import { Button, Divider, Input } from '@nextui-org/react'
import Link from 'next/link'

function Footer() {
  return (
    <footer className="flex px-60 py-16 max-md:px-16 max-md:py-4">
      <div className="flex flex-col w-full container mx-auto ">
        <div className="flex justify-between flex-wrap">
          <div className="flex-col max-w-xs">
            <p className="text-5xl font-bold mb-6">
              F<span className="text-primary">OO</span>D
            </p>
            <p className="text-gray-500 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              deleniti velit earum suscipit maxime quam repellendus in,
              perspiciatis ad quaerat, reiciendis voluptate molestiae culpa
            </p>
          </div>
          <div className="flex-col p-2">
            <span className="font-bold">Company</span>
            <ul className="mt-8">
              <li className="text-sm mb-2 text-gray-400 font-semibold hover:text-gray-500 transition">
                <Link href="#">About Us</Link>
              </li>
              <li className="text-sm mb-2 text-gray-400 font-semibold hover:text-gray-500 transition">
                <Link href="#">Blog</Link>
              </li>
              <li className="text-sm mb-2 text-gray-400 font-semibold hover:text-gray-500 transition">
                <Link href="#">All Products</Link>
              </li>
              <li className="text-sm mb-2 text-gray-400 font-semibold hover:text-gray-500 transition">
                <Link href="#">Location Map</Link>
              </li>
            </ul>
          </div>
          <div className="flex-col p-2">
            <span className="font-bold">Services</span>
            <ul className="mt-8">
              <li className="text-sm mb-2 text-gray-400 font-semibold hover:text-gray-500 transition">
                <Link href="#">Order tracking</Link>
              </li>
              <li className="text-sm mb-2 text-gray-400 font-semibold hover:text-gray-500 transition">
                <Link href="#">Wish List</Link>
              </li>
              <li className="text-sm mb-2 text-gray-400 font-semibold hover:text-gray-500 transition">
                <Link href="#">My account</Link>
              </li>
              <li className="text-sm mb-2 text-gray-400 font-semibold hover:text-gray-500 transition">
                <Link href="#">Termns & Conditions</Link>
              </li>
            </ul>
          </div>
          <div className="flex-col p-2 max-w-xs">
            <span className="font-bold">Get in Touch</span>
            <div className="mt-8">
              <p className="text-gray-500 text-sm">
                Suscribe to our weekly Newsletter <br /> and receive updates via
                email
              </p>
              <div className="flex align-middle gap-2 p-2">
                <div>
                  <Input
                    type="email"
                    placeholder="your@mail.com"
                    startContent={
                      <MailOutlined className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                  />
                </div>
                <div className="my-auto">
                  <Button
                    radius="full"
                    isIconOnly
                    className="bg-primary text-white"
                  >
                    <SendOutlined />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Divider className="my-4" />
        <div className="flex justify-between">
          <div>
            <span className="text-gray-400  text-sm">
              All Rights Reserved @FoodApp {new Date().getFullYear()}
            </span>
          </div>
          <div className="flex gap-10">
            <button
              onClick={() => console.log(localStorage.getItem('user-token'))}
              className="text-gray-400 hover:text-gray-500 transition  text-sm"
            >
              Get Token
            </button>

            <Link
              href="#"
              className="text-gray-400 hover:text-gray-500 transition  text-sm"
            >
              Privacy & Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
