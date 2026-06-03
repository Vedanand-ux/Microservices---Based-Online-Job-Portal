import { sql } from "../utils/db.js";
import ErrorHandler from "../utils/errorHandler.js";
import {TryCatch} from "../utils/TryCatch.js";

export const registerUser = TryCatch(async (req, res) => {
    const {name, email, password, phonenumber, role, bio} = req.body;

    if(!name || !email || !password || !phonenumber || !role) {
        throw new ErrorHandler(400,"All fields are required");
    }

    const existingUser = await sql`SELECT user_id FROM users WHERE email = ${email}`;

    if(existingUser.length > 0) {
        throw new ErrorHandler(400,"User already exists");
    }

    res.json(email);
});