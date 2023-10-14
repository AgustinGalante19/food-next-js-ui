import { pool } from '@/services/database'
import { ApiResponse } from '@/types/ApiErrorResponse'
import ReviewType from '@/types/Review'
import { AxiosError } from 'axios'
import { NextResponse } from 'next/server'
import { QueryResult } from 'pg'

export async function GET() {
  try {
    const queryResult: QueryResult<ReviewType> = await pool.query(
      'select * from vs_reviews'
    )

    const { rows } = queryResult
    const response: ApiResponse<ReviewType> = {
      data: rows,
      errors: [],
      result: 'ok',
    }
    return NextResponse.json(response)
  } catch (err) {
    const error = err as AxiosError
    return NextResponse.json({ status: 500, data: [], errors: [error.message] })
  }
}
