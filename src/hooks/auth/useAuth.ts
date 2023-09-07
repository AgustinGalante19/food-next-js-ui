import { FormEvent, useState } from 'react'
import { AxiosError } from 'axios'
import { toast } from 'react-toastify'
import api from '@/api/serviceFactory'
import ApiErrorResponse from '@/types/ApiErrorResponse'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '../zustand/useAuthStore'

export default function useAuth() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const authorize = useAuthStore((state) => state.authorize)
  const unauthorize = useAuthStore((state) => state.unauthorize)

  const handleSubmitSignup = async (e: FormEvent<HTMLFormElement>) => {
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
        .post('/auth/signup', body)
        .then((response) => {
          const token = response.headers['user-token']
          authorize()
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

  const handleSignin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const fields = new FormData(e.currentTarget)
    const email = fields.get('email')
    const password = fields.get('password')
    setIsLoading(true)
    api
      .post('/auth/signin', { email, password })
      .then((response) => {
        const token = response.headers['user-token']
        authorize()
        localStorage.setItem('user-token', token)
        router.push('/')
      })
      .catch((err) => {
        const error = err as AxiosError<ApiErrorResponse>
        const errorData = error.response?.data.errors
        console.log(errorData)
        if (errorData?.data.includes('Email')) {
          return toast.error('Email not found', {
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
        if (errorData?.data.includes('password')) {
          return toast.error('Wrong password!', {
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
      })
      .finally(() => setIsLoading(false))
  }

  const handleSignout = () => {
    localStorage.removeItem('user-token')
    unauthorize()
    /* window.location.reload() */
  }

  return { handleSubmitSignup, isLoading, handleSignout, handleSignin }
}
