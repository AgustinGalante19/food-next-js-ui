import { ApiResponse } from '@/types/ApiErrorResponse'
import ReviewType from '@/types/Review'

export default async function getReviews(): Promise<ApiResponse<ReviewType>> {
  const reviewsRequest = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/reviews`
  )
  const reviews: ApiResponse<ReviewType> = await reviewsRequest.json()
  return reviews
}
