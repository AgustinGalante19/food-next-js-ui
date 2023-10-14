import ReviewType from '@/types/Review'
import Carousel from './components/Carousel'

import api from '@/api/serviceFactory'
import { ApiResponse } from '@/types/ApiErrorResponse'

async function Reviews() {
  const reviews = await api.get<ApiResponse<ReviewType>>('/reviews')
  return (
    <section>
      <div className="container mx-auto py-8">
        <h4 className="font-bold text-center text-3xl">
          Testimonials About Us
        </h4>
        <div className="bg-primary h-[8px] w-[50px] rounded-full mx-auto mt-2"></div>
        <p className="mx-auto text-center max-w-[60ch] my-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
          consectetur voluptas accusamus dolorum tempora doloribus!
        </p>
      </div>
      <Carousel reviews={reviews.data.data} />
    </section>
  )
}

export default Reviews
