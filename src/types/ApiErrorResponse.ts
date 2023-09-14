export default interface ApiErrorResponse {
  data: any
  errors: {
    data: string
    message: string
  }
  result: string
}
