'use client'

import { Button } from '@nextui-org/react'
import { Image } from '@nextui-org/react'
import { ToastContainer } from 'react-toastify'
import { signIn } from 'next-auth/react'
import { GithubOutlined, GoogleOutlined } from '@ant-design/icons'
import { toast } from 'react-toastify'

function SignIn() {
  const handleSignIn = () => {
    signIn('github', { redirect: false })
  }
  return (
    <div className="container max-w-5xl mx-auto py-8">
      <ToastContainer />
      <div className="flex p-4 max-md:flex-col max-md:p-1">
        <div className="flex flex-col max-md:hidden max-lg:m-auto">
          <Image
            src="/formbg.jpg"
            width="500px"
            height="auto"
            alt="pizza image"
            isZoomed
          />
        </div>
        <div className="flex flex-col flex-1 justify-center align-middle px-12 max-md:px-1 gap-2">
          <div className="my-2">
            <h2 className="font-bold text-4xl">Login</h2>
            <p className="text-sm text-gray-400 mt-2">
              You can login using your github or google account!
            </p>
          </div>
          <Button
            fullWidth
            color="primary"
            className="text-white"
            type="button"
            onClick={handleSignIn}
            endContent={<GithubOutlined />}
          >
            Github
          </Button>
          <Button
            fullWidth
            color="primary"
            className="text-white"
            type="button"
            onClick={() => toast.warning('coming soon')}
            endContent={<GoogleOutlined />}
          >
            Google
          </Button>
        </div>
      </div>
    </div>
  )
}

export default SignIn
