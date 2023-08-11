'use client';
import { useState } from 'react';
import classNames from 'classnames';
import Image from 'next/image';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

interface CardType {
  title: string;
  description: string;
  user: {
    name: string;
    location: string;
  };
}

const cards: CardType[] = [
  {
    title: 'Card 1',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia culpa autem dicta laboriosam blanditiis, quaerat numquam inventore tempore pariatur aut distinctio placeat fugit recusandae voluptatum officia, neque tenetur nesciunt aperiam.',
    user: {
      name: 'Harry Kane',
      location: 'Berlin, Alemania',
    },
  },
  {
    title: 'Card 2',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia culpa autem dicta laboriosam blanditiis, quaerat numquam inventore tempore pariatur aut distinctio placeat fugit recusandae voluptatum officia, neque tenetur nesciunt aperiam.',
    user: {
      name: 'Vincent Kompany',
      location: 'Londres, UK',
    },
  },
];

const Card = ({ title, description, user }: CardType) => {
  return (
    <div className='bg-white shadow-md p-6 rounded-lg transition-all duration-300'>
      <div className='flex'>
        <div className='flex flex-col align-middle'>
          <Image
            className='my-auto'
            src='/products/burguer.png'
            width={100}
            height={100}
            alt='user image'
          />
        </div>
        <div className='flex flex-col w-full p-2'>
          <h3 className='text-lg font-semibold mb-2'>{title}</h3>
          <p className='text-gray-700'>{description}</p>
          <p className='mt-1'>
            <span className='text-primary text-lg font-semibold'>
              {user.name}
            </span>{' '}
            <br /> <span className='text-sm'>{user.location}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

const Carousel = ({ cards }: { cards: CardType[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('next');

  const handleNext = () => {
    setDirection('next');
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setDirection('prev');
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
  };

  return (
    <div className='flex items-center justify-center max-w-5xl mx-auto'>
      <button onClick={handlePrev} className='mr-4'>
        <LeftOutlined />
      </button>
      <div className='flex flex-1 overflow-hidden p-4'>
        <div
          className={classNames('transition-transform', {
            'animate-slide-in-right': direction === 'next',
            'animate-slide-out-left': direction === 'prev',
          })}
        >
          <Card {...cards[currentIndex]} />
        </div>
      </div>
      <button onClick={handleNext} className='ml-4'>
        <RightOutlined />
      </button>
    </div>
  );
};

function Reviews() {
  return (
    <div className='container mx-auto py-8'>
      <h4 className='font-bold text-center text-3xl'>Testimonials About Us</h4>
      <div className='bg-primary h-[8px] w-[50px] rounded-full mx-auto mt-2'></div>
      <p className='mx-auto text-center max-w-[60ch] my-2'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex consectetur
        voluptas accusamus dolorum tempora doloribus!
      </p>
      <Carousel cards={cards} />
    </div>
  );
}

export default Reviews;
