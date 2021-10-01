import {config as dotenv} from 'dotenv'
dotenv()

const {DB_HOST, DB_USER, DB_PASS, DB_DATABASE, DB_PORT} = process.env

export const config = {
    host: DB_HOST || '127.0.0.1',
    user: DB_USER || 'root',
    password: DB_PASS || '',
    database: DB_DATABASE,
    port: DB_PORT || 3306
}
