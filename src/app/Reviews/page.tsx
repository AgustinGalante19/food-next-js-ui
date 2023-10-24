import Header from './components/Header'
import ReviewsList from './components/ReviewsList'
import getReviews from '@/services/getReviews'

async function Reviews() {
  const reviews = await getReviews()
  return (
    <div className="container mx-auto">
      <Header />
      <ReviewsList reviews={reviews.data} />
    </div>
  )
}
export default Reviews
