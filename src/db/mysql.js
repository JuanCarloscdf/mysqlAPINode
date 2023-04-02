import {createPool} from 'mysql2/promise'

export const pool = createPool({
  host: 'localhost',
  user: 'root',
  password: 'example',
  database: 'store',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
})

console.log('Pool de conexiones creado con éxito.')