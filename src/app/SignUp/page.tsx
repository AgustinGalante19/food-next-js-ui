'use client'

import useAuth from '@/hooks/auth/useAuth'
import {
  EyeInvisibleOutlined,
  EyeOutlined,
  MailOutlined,
  PhoneFilled,
  UserOutlined,
} from '@ant-design/icons'
import { Button, Checkbox, Image, Input, Link } from '@nextui-org/react'
import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function SignUpForm() {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => setIsVisible(!isVisible)

  const { handleSubmitSignIn, isLoading } = useAuth()
  return (
    <form
      className="flex flex-col w-[400px] mx-auto gap-4 max-sm:w-[300px]"
      onSubmit={handleSubmitSignIn}
    >
      <h2 className="font-bold text-4xl mb-4">SignUp</h2>
      <div className="flex flex-col">
        <Input
          type="text"
          name="name"
          label="Name"
          labelPlacement="outside"
          placeholder="Jhon"
          endContent={<UserOutlined className="text-gray-400" />}
        />
      </div>
      <div className="flex flex-col">
        <Input
          type="text"
          name="surname"
          label="Surname"
          labelPlacement="outside"
          placeholder="Doe"
          endContent={<UserOutlined className="text-gray-400" />}
        />
      </div>
      <div className="flex flex-col">
        <Input
          type="email"
          name="email"
          label="Email"
          labelPlacement="outside"
          placeholder="your@mail.com"
          endContent={<MailOutlined className="text-gray-400" />}
        />
      </div>
      <div className="flex flex-col">
        <Input
          type="number"
          name="phone"
          label="Phone"
          labelPlacement="outside"
          placeholder="3446777123"
          endContent={<PhoneFilled className="text-gray-400" />}
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
      <div className="flex flex-col">
        <Input
          type={isVisible ? 'text' : 'password'}
          name="password2"
          label="Repeat Password"
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
      <Button
        fullWidth
        color="primary"
        className="text-white"
        type="submit"
        isLoading={isLoading}
      >
        Register
      </Button>
      <p>
        Already Have an Account?{' '}
        <Link
          href="/SignIn"
          className="text-primary font-semibold hover:text-red-400"
        >
          Login
        </Link>
      </p>
    </form>
  )
}

function SignUp() {
  return (
    <div className="container max-w-5xl mx-auto py-8">
      <ToastContainer />
      <div className="flex p-4 max-md:flex-col max-md:p-1">
        <div className="flex flex-col max-md:hidden max-lg:m-auto">
          <Image
            src="/form2bg.jpg"
            width="600px"
            height="auto"
            alt="pizza image"
            isZoomed
          />
        </div>
        <div className="flex flex-col flex-1 justify-center align-middle px-12 max-md:px-1">
          <SignUpForm />
        </div>
      </div>
    </div>
  )
}

export default SignUp
