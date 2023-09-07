'use client'

import CardType from '@/types/CardProps'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import classNames from 'classnames'
import Image from 'next/image'
import { useState } from 'react'

const Card = ({ title, description, user }: CardType) => {
  return (
    <div className="bg-white shadow-md p-6 rounded-lg transition-all duration-300">
      <div className="flex">
        <div className="flex flex-col align-middle">
          <Image
            className="my-auto"
            src="/products/burguer.png"
            width={100}
            height={100}
            alt="user image"
          />
        </div>
        <div className="flex flex-col w-full p-2">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-gray-700">{description}</p>
          <p className="mt-1">
            <span className="text-primary text-lg font-semibold">
              {user.name}
            </span>{' '}
            <br /> <span className="text-sm">{user.location}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

const Carousel = ({ cards }: { cards: CardType[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState('next')

  const handleNext = () => {
    setDirection('next')
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length)
  }

  const handlePrev = () => {
    setDirection('prev')
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    )
  }

  return (
    <div className="flex items-center justify-center max-w-5xl mx-auto">
      <button onClick={handlePrev} className="mr-4">
        <LeftOutlined />
      </button>
      <div className="flex flex-1 overflow-hidden p-4">
        <div
          className={classNames('transition-transform', {
            'animate-slide-in-right': direction === 'next',
            'animate-slide-out-left': direction === 'prev',
          })}
        >
          <Card {...cards[currentIndex]} />
        </div>
      </div>
      <button onClick={handleNext} className="ml-4">
        <RightOutlined />
      </button>
    </div>
  )
}

export default Carousel
