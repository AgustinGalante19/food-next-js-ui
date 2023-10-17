'use client'

import { Button } from '@nextui-org/react'
import { Image } from '@nextui-org/react'
import { ToastContainer } from 'react-toastify'
import { signIn } from 'next-auth/react'

function LoginForm() {
  const handleSignIn = () => {
    signIn('github', { redirect: false })
  }

  return (
    <div>
      <h2 className="font-bold text-4xl mb-4">Login</h2>
      <Button
        fullWidth
        color="primary"
        className="text-white"
        type="button"
        onClick={handleSignIn}
      >
        Login
      </Button>
    </div>
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
      </div>
    </div>
  )
}

export default SignIn
