import {neon} from '@neondatabase/serverless';
import dontenv from 'dotenv';

dontenv.config();

export const sql = neon(process.env.DB_URL as string);
