'use client';

import React, { useState } from 'react';
import {
  EyeInvisibleOutlined,
  EyeOutlined,
  MailOutlined,
} from '@ant-design/icons';
import { Button, Checkbox, Input } from '@nextui-org/react';
import { Image } from '@nextui-org/react';
import Link from 'next/link';

function SignIn() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className='container mx-auto'>
      <div className='flex p-4'>
        <div className='flex flex-col'>
          <Image
            src='/formbg.jpg'
            width='600px'
            height='auto'
            alt='pizza image'
            isZoomed
          />
        </div>
        <div className='flex flex-col flex-1 justify-center align-middle'>
          <form className='flex flex-col w-[400px] mx-auto gap-4'>
            <h2 className='font-bold text-4xl mb-4'>Login</h2>
            <div className='flex flex-col'>
              <Input
                type='email'
                label='Email'
                labelPlacement='outside'
                placeholder='your@mail.com'
                endContent={<MailOutlined className='text-gray-400' />}
              />
            </div>
            <div className='flex flex-col'>
              <Input
                type={isVisible ? 'text' : 'password'}
                label='Password'
                labelPlacement='outside'
                placeholder='y0urP4$sW0Rd'
                endContent={
                  <button
                    className='focus:outline-none'
                    type='button'
                    onClick={toggleVisibility}
                  >
                    {isVisible ? (
                      <EyeInvisibleOutlined className='text-2xl text-default-400 pointer-events-none' />
                    ) : (
                      <EyeOutlined className='text-2xl text-default-400 pointer-events-none' />
                    )}
                  </button>
                }
              />
            </div>
            <div className='flex justify-between mt-2'>
              <div>
                <Checkbox defaultSelected size='sm'>
                  Kepp me logged in
                </Checkbox>
              </div>
              <div>
                <Link href='/PasswordRecovery' className='text-sm p-1'>
                  Forgot Password?
                </Link>
              </div>
            </div>
            <Button fullWidth color='primary' className='text-white'>
              Login
            </Button>
            <p>
              Don{`'`}t Have an Account?{' '}
              <Link
                href='/SignUp'
                className='text-primary font-semibold hover:text-red-400'
              >
                Signup
              </Link>{' '}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
