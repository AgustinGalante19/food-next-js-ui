import { ApiResponse } from '@/types/ApiErrorResponse'
import ReviewType from '@/types/Review'
import { API_URL } from '@/utils/API'
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Textarea,
} from '@nextui-org/react'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import { ChangeEvent, useState } from 'react'

function ModalReview({
  isOpen,
  onOpenChange,
  onClose,
}: {
  isOpen: boolean
  onOpenChange: () => void
  onClose: () => void
}) {
  const [formData, setFormData] = useState({
    title: '',
    quote: '',
  })

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const session = useSession()
  const handleSubmit = async () => {
    const request = await axios.post<ApiResponse<ReviewType>>(
      `${API_URL}/reviews`,
      {
        title: formData.title,
        quote: formData.quote,
        author: session.data?.user?.name,
      }
    )
    if (request.data.result === 'ok') {
      console.log(request.data)
    }
  }

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 text-primary">
              Create Review
            </ModalHeader>
            <ModalBody>
              <div className="font-semibold text-secondary-foreground">
                <label htmlFor="title">Title</label>
                <Input
                  name="title"
                  placeholder="MiReviewTitle"
                  value={formData.title}
                  onChange={handleTextChange}
                />
              </div>
              <div className="font-semibold text-secondary-foreground">
                <label htmlFor="quote">Quote</label>
                <Textarea
                  name="quote"
                  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  value={formData.quote}
                  onChange={handleTextChange}
                />
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="flat" onPress={onClose}>
                Close
              </Button>
              <Button
                color="primary"
                className="text-white"
                onPress={handleSubmit}
              >
                Submit
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}
export default ModalReview
