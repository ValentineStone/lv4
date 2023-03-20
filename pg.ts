import { Pool, types } from 'pg'

types.setTypeParser(20, parseInt)

export const pg = new Pool({
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  host: process.env.PG_HOST,
  port: +process.env.PG_PORT,
  database: process.env.PG_DATABASE,
})

const cache = {}

export const query = async (queryStr: string, params: any[] = [], timeout = 2000) => {
  const key = queryStr + '[' + params.join(',') + ']'
  if (!cache[key])
    cache[key] = pg.query(queryStr, params)
      .then(value => {
        setTimeout(() => { delete cache[key] }, timeout)
        return value
      })
  return await cache[key]
}