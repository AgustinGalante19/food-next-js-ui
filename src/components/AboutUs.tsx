'use client'

import { Image } from '@nextui-org/react'

interface Card {
  title: string
  text: string
  image: {
    name: string
    extension: string
  }
}

const cardsData: Card[] = [
  {
    title: 'Easy To Order',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    image: { extension: 'png', name: 'burguer' },
  },
  {
    title: 'Fastest Delivery',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    image: { extension: 'jpg', name: 'order' },
  },
  {
    title: 'Best Quality',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    image: { extension: 'jpg', name: 'delivery' },
  },
]

const Card = ({ card }: { card: Card }) => {
  return (
    <div className="flex flex-col max-w-[250px] bg-white rounded-lg h-[300px] py-6 px-5 max-md:mx-auto shadow-xl">
      <div className="flex  justify-center">
        <Image
          className="mx-auto"
          src={`/about us/${card.image.name}.${card.image.extension}`}
          width={140}
          height="auto"
          alt=""
        />
      </div>
      <p className="text-black text-lg font-bold text-center">{card.title}</p>
      <p className="text-gray-400 text-center mt-2">{card.text}</p>
    </div>
  )
}

const CardList = ({ cards }: { cards: Card[] }) => {
  return cards.map((card) => <Card card={card} key={card.title} />)
}

function AboutUs() {
  return (
    <main className="flex container mx-auto px-5 py-12 bg-secondary">
      <div className="flex flex-col mx-auto">
        <div className="flex">
          <h6 className="text-primary text-sm text-center mx-auto">
            What We Serve
          </h6>
        </div>
        <div className="flex mt-6">
          <h2 className="text-black text-3xl font-bold max-w-sm text-center mx-auto leading-snug">
            Your Favorite Food Delivery Partner
          </h2>
        </div>
        <div className="flex justify-center gap-10 my-12 max-md:flex-col">
          <CardList cards={cardsData} />
        </div>
      </div>
    </main>
  )
}

export default AboutUs
