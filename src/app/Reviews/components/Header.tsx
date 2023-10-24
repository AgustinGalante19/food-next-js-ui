'use client'

import { FileTextOutlined } from '@ant-design/icons'
import { Button, useDisclosure } from '@nextui-org/react'
import ModalReview from './ModalReview'

function Header() {
  const { isOpen, onOpenChange, onOpen, onClose } = useDisclosure()
  return (
    <div className="mt-4">
      <h1 className="text-center text-5xl font-bold text-primary">Reviews</h1>
      <Button
        color="primary"
        className="text-white mb-4"
        endContent={<FileTextOutlined />}
        onClick={onOpen}
      >
        Make a Review
      </Button>
      <ModalReview
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onClose={onClose}
      />
    </div>
  )
}
export default Header
