import getBuffer from "../utils/buffer.js";
import { sql } from "../utils/db.js";
import ErrorHandler from "../utils/errorHandler.js";
import {TryCatch} from "../utils/TryCatch.js";
import bcrypt from "bcrypt";

export const registerUser = TryCatch(async (req, res) => {
    const {name, email, password, phone_number, role, bio} = req.body;

    if(!name || !email || !password || !phone_number || !role) {
        throw new ErrorHandler(400,"All fields are required");
    }

    const existingUser = await sql`SELECT user_id FROM users WHERE email = ${email}`;

    if(existingUser.length > 0) {
        throw new ErrorHandler(400,"User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    let registeredUser;

    if(role === "recruiter") {
        const [user] = await sql`INSERT INTO users (name, email, password, phone_number, role) VALUES (${name}, ${email}, ${hashedPassword}, ${phone_number}, ${role}) RETURNING user_id`;

    registeredUser =user;
    
    }else if(role==="jobseeker"){
    const file = req.file;

    if(!file) {
        throw new ErrorHandler(400,"resume file is required for job seekers");
    }

    const fileBuffer = getBuffer(file)

    if(!fileBuffer || !fileBuffer.content) {
        throw new ErrorHandler(500,"falied to generate file ");
    }

    const [user] =
    await sql`INSERT INTO users (name, email, password, phone_number, role) VALUES
    (${name}, ${email}, ${hashedPassword}, ${phone_number}, ${role}) RETURNING
    user_id, name, email, phone_number, role, created_at`;
}

    res.json(email);    
});