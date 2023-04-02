import { pool } from "../db/mysql.js"
export const setUser = async ()=>{
    const resp = await pool.query('SELECT 1 + 1 AS result')
    return resp
}