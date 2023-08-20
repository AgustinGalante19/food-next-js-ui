'use client'

import React, { useState } from 'react'
import {
  EyeInvisibleOutlined,
  EyeOutlined,
  MailOutlined,
} from '@ant-design/icons'
import { Button, Checkbox, Input } from '@nextui-org/react'
import { Image } from '@nextui-org/react'
import Link from 'next/link'
import useAuth from '@/hooks/auth/useAuth'
import { ToastContainer } from 'react-toastify'

function LoginForm() {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => setIsVisible(!isVisible)

  const { handleSignin, isLoading } = useAuth()

  return (
    <form
      className="flex flex-col w-[400px] mx-auto gap-4 max-sm:w-[300px]"
      onSubmit={handleSignin}
    >
      <h2 className="font-bold text-4xl mb-4">Login</h2>
      <div className="flex flex-col">
        <Input
          name="email"
          type="email"
          label="Email"
          labelPlacement="outside"
          placeholder="your@mail.com"
          endContent={<MailOutlined className="text-gray-400" />}
        />
      </div>
      <div className="flex flex-col">
        <Input
          type={isVisible ? 'text' : 'password'}
          name="password"
          label="Password"
          labelPlacement="outside"
          placeholder="y0urP4$sW0Rd"
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibility}
            >
              {isVisible ? (
                <EyeInvisibleOutlined className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <EyeOutlined className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
        />
      </div>
      <div className="flex justify-between mt-2">
        <div>
          <Checkbox defaultSelected size="sm">
            Kepp me logged in
          </Checkbox>
        </div>
        <div>
          <Link
            href="/PasswordRecovery"
            className="text-sm p-1 text-primary font-semibold hover:text-red-400"
          >
            Forgot Password?
          </Link>
        </div>
      </div>
      <Button
        fullWidth
        color="primary"
        className="text-white"
        type="submit"
        isLoading={isLoading}
      >
        Login
      </Button>
      <p>
        Don{`'`}t Have an Account?{' '}
        <Link
          href="/SignUp"
          className="text-primary font-semibold hover:text-red-400"
        >
          Signup
        </Link>{' '}
      </p>
    </form>
  )
}

function SignIn() {
  return (
    <div className="container max-w-5xl mx-auto py-8">
      <ToastContainer />
      <div className="flex p-4 max-md:flex-col max-md:p-1">
        <div className="flex flex-col max-md:hidden max-lg:m-auto">
          <Image
            src="/formbg.jpg"
            width="600px"
            height="auto"
            alt="pizza image"
            isZoomed
          />
        </div>
        <div className="flex flex-col flex-1 justify-center align-middle px-12 max-md:px-1">
          <LoginForm />
        </div>
        T
      </div>
    </div>
  )
}

export default SignIn
