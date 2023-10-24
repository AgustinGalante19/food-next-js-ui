import { pool } from '@/services/database'
import { ApiResponse } from '@/types/ApiErrorResponse'
import ReviewType from '@/types/Review'
import { AxiosError } from 'axios'
import { NextResponse } from 'next/server'
import { QueryResult } from 'pg'

export async function GET() {
  try {
    const queryResult: QueryResult<ReviewType> = await pool.query(
      'select * from reviews'
    )

    const { rows } = queryResult
    const response: ApiResponse<ReviewType> = {
      data: rows,
      errors: [],
      result: 'ok',
    }
    return NextResponse.json<ApiResponse<ReviewType>>(response)
  } catch (err) {
    const error = err as AxiosError
    return NextResponse.json({ status: 500, data: [], errors: [error.message] })
  }
}

export async function POST(request: Request) {
  try {
    const { title, quote, author } = await request.json()

    const queryResult: QueryResult = await pool.query(
      'INSERT INTO reviews (title, quote, author) VALUES($1, $2, $3) RETURNING *',
      [title, quote, author]
    )
    return NextResponse.json<ApiResponse<ReviewType>>({
      result: 'ok',
      data: queryResult.rows,
      errors: [],
    })
  } catch (err) {
    const error = err as AxiosError
    return NextResponse.json<ApiResponse<[]>>({
      result: 'error',
      data: [],
      errors: [error.message],
    })
  }
}
