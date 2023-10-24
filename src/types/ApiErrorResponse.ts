export default interface ApiErrorResponse {
  data: any
  errors: {
    data: string
    message: string
  }
  result: string
}

export interface ApiResponse<T> {
  data: T[]
  errors: string[]
  result: 'ok' | 'error'
}
