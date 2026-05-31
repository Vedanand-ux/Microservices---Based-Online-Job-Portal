import {TryCatch} from "../utils/TryCatch.js";

export const registerUser = TryCatch(async (req, res) => {
    const {email} = req.body;

    res.json(email);
});