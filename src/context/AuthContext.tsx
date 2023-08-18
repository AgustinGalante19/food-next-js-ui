import { createContext, useContext, useEffect, useState } from 'react'

export const useAuthCtx = () => {
  const data = useContext(AuthContext)

  return data
}
interface AuthContextType {
  isAuth: boolean
  setIsAuth: any
}

export const AuthContext = createContext<AuthContextType>({
  isAuth: false,
  setIsAuth: null,
})

export function AuthProvider({ children }: { children: React.JSX.Element }) {
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('user-token')
    if (token) {
      setIsAuth(true)
    }
  }, [])

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </AuthContext.Provider>
  )
}
