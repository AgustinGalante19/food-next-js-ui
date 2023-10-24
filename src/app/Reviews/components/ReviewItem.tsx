import ReviewType from '@/types/Review'
import { Card, CardBody, CardHeader, Divider } from '@nextui-org/react'

const ReviewItem = ({ review }: { review: ReviewType }) => {
  return (
    <Card className=" max-w-md">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md font-semibold text-primary">
            {review.name} {review.surname}
          </p>
          <p>{review.title}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>{review.quote}</CardBody>
    </Card>
  )
}

export default ReviewItem
