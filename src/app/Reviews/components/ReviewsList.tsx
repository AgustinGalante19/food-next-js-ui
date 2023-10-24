'use client'

import ReviewType from '@/types/Review'
import ReviewItem from './ReviewItem'

interface Props {
  reviews: ReviewType[]
}
function ReviewsList({ reviews }: Props) {
  return (
    <div className="flex flex-wrap gap-4 justify-center px-2 py-8 bg-secondary">
      {reviews.map((review) => (
        <ReviewItem key={review.id} review={review} />
      ))}
    </div>
  )
}
export default ReviewsList
