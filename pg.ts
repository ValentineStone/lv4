import { Pool, types } from 'pg'

types.setTypeParser(20, parseInt)

export const pg = new Pool({
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  host: process.env.PG_HOST,
  port: +process.env.PG_PORT,
  database: process.env.PG_DATABASE,
})