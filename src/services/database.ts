import pg from 'pg'

export const pool = new pg.Pool({
  port: Number(process.env.DB_PORT) ?? 5432,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: process.env.NODE_ENV === 'production',
})

pool.on('connect', () => {
  console.log('Connected to database server')
})

pool.on('error', (err) => {
  console.error('Failed to connect to database', err)
})
