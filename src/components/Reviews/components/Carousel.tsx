'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import ReviewType from '@/types/Review'
import Card from './Card'
import 'swiper/css'
import 'swiper/css/navigation'

const Carousel = ({ reviews }: { reviews: ReviewType[] }) => {
  return (
    <div className="container mx-auto">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review.name} className="p-12">
            <Card review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Carousel
