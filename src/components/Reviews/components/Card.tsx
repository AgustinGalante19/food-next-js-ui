import ReviewType from '@/types/Review'
import { Image } from '@nextui-org/react'

const Card = ({ review }: { review: ReviewType }) => {
  return (
    <div className="bg-white shadow-md p-6 rounded-lg transition-all duration-300">
      <div className="flex">
        <div className="flex flex-col align-middle">
          <Image
            className="my-auto"
            src="/products/burguer.avif"
            width={100}
            height={100}
            alt="user image"
          />
        </div>
        <div className="flex flex-col w-full p-2">
          <h3 className="text-lg font-semibold mb-2">{review.title}</h3>
          <p className="text-gray-700">{review.quote}</p>
          <p className="mt-1">
            <span className="text-primary text-lg font-semibold">
              {review.author}
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card
