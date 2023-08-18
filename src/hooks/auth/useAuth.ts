import { FormEvent, useState } from 'react'
import { AxiosError } from 'axios'
import { toast } from 'react-toastify'
import { useAuthCtx } from '@/context/AuthContext'
import api from '@/api/serviceFactory'
import ApiErrorResponse from '@/types/ApiErrorResponse'
import { useRouter } from 'next/navigation'

export default function useAuth() {
  const [isLoading, setIsLoading] = useState(false)

  const { setIsAuth } = useAuthCtx()
  const router = useRouter()

  const handleSubmitSignIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const fields = new FormData(e.currentTarget)
    const name = fields.get('name')
    const surname = fields.get('surname')
    const email = fields.get('email')
    const phone = fields.get('phone')
    const password = fields.get('password')
    const password2 = fields.get('password2')

    //TODO: Validar formulario...
    try {
      setIsLoading(true)
      const body = {
        name,
        surname,
        email,
        password,
        phone,
      }
      api
        .post('/token', body)
        .then((response) => {
          const token = response.headers['user-token']
          setIsAuth(true)
          localStorage.setItem('user-token', token)
          router.push('/')
        })
        .catch((err) => console.log(err))
    } catch (err) {
      const error = err as AxiosError<ApiErrorResponse>
      const errorData = error.response?.data.errors
      if (errorData?.data.includes('email')) {
        return toast.error('That email already exists', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        })
      }
      return toast.error('Unexpected Error', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      })
    } finally {
      setIsLoading(false)
    }
  }

  return { handleSubmitSignIn, isLoading }
}
