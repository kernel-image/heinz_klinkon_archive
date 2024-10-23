import pg from 'pg';
import { getConfig } from './config.js'

const { Pool } = pg;
const pgconfig = getConfig();
pgconfig.validate();
const pool = new Pool({
    host: pgconfig.host,
    port: pgconfig.port,
    user: pgconfig.user,
    password: pgconfig.password,
    database: pgconfig.database,
});

export { pool };


