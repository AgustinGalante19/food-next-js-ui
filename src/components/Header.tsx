'use client';

import { BookOutlined, CaretRightOutlined } from '@ant-design/icons';
import { Button } from '@nextui-org/react';
import React from 'react';

function Header() {
  return (
    <header className='container mx-auto mt-14 py-2'>
      <div className=' grid grid-rows-1 grid-cols-2 max-w-5xl mx-auto p-5 max-md:grid-rows-2 max-md:grid-cols-1'>
        <div className='w-full flex flex-col gap-4'>
          <h1 className='text-5xl max-md:max-w-full font-bold text-black max-w-sm leading-snug'>
            Be The Fastest In Delivering Your{' '}
            <span className='text-primary'>Food</span>
          </h1>
          <p className='text-gray-400 max-w-sm max-md:max-w-full'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
            ratione voluptatum, iure odio vitae dicta distinctio nisi
            dignissimos cumque iusto id quaerat possimus cupiditate laudantium
            quia! Quas saepe modi nobis.
          </p>
          <div className='flex max-w-sm gap-16'>
            <Button
              color='primary'
              variant='shadow'
              radius='full'
              startContent={<BookOutlined />}
            >
              Order Now
            </Button>
            <Button
              color='primary'
              variant='ghost'
              radius='full'
              startContent={<CaretRightOutlined />}
            >
              Order Process
            </Button>
          </div>
        </div>
        <div className="w-full h-full bg-cover bg-[url('/header.png')] max-[380px]:bg-center"></div>
      </div>
    </header>
  );
}

export default Header;
/* <Button
            as={Link}
            color='primary'
            className='px-8 rounded-full transition-all'
            href='/SignIn'
            variant='shadow'
          > */
