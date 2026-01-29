import express  from "express";
import crypto  from "crypto";
import jwt  from 'jsonwebtoken';
import zod  from 'zod';
import User, { UserModel } from "../database/models/User";
import {v4 as uuidv4} from 'uuid';
const router = express.Router();
import asyncHandler  from "../helpers/asyncHandler";
import {SECRET1}  from "../config";
const SECRET=SECRET1 || "ibovsSecret";
function hashPassword(password: string) {
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto.pbkdf2Sync(password, salt, 10000, 16, "sha512").toString("hex");
  return `${salt}:${hash}`;
};
const schema = zod.object({
    email: zod.string().email({ message: "Invalid email address" }),
    password: zod.string().min(6, { message: "Password must be at least 6 characters long" }),
    name: zod.string().nonempty({ message: "Name cannot be empty" }),
    username: zod.string().min(5, { message: "username min length must  5 characters long" })
});

router.post("/register", asyncHandler( async (req, res) => {
    console.log(schema.safeParse(req.body));
  const {error, success} = schema.safeParse(req.body);
    if (!success) {
        throw new Error( error.issues[0].message );
        res.end();
        return;
    }
    const email = await UserModel.findOne({ email: req.body.email });
    if (email) {
    throw new Error(`User with this email already exists ${email}` );
    }
    const username = await UserModel.findOne({ username: req.body.username });
    if (username) {
        throw new Error("User with this username already exists" );
        res.end();
    }
        const resp = await UserModel.create(req.body);
        if (!resp) {
            res.status(400).json({status: "!resp", error: "User already exists" });
            res.end();
            // return;
        }
        const token = jwt.sign({ key: resp._id },SECRET);

        console.log(resp.username + " registered");

        res.status(200).json({ token, resp });
        res.end();
    
        
    

})
);

function verifyPassword(stored: string, passwordAttempt: string) {
  if (!stored) return false;
  const [salt, hash] = stored.split(":");
  if (!salt || !hash) return false;
  const attempt = crypto.pbkdf2Sync(passwordAttempt, salt, 10000, 64, "sha512").toString("hex");
  return attempt === hash;
};

const loginschema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(6)
})
router.post("/display", asyncHandler(async (req, res) => {
    const resp = await UserModel.find({status:true}).select({password:0});
     ;
    res.status(200).json(resp);
    res.end();
    return;
 
}))
router.delete("/:username", asyncHandler(async (req, res) => {
    const resp = await UserModel.updateOne( {username: req.params.username} , {status: false});
    res.status(200).json(resp);
    res.end();
    return;
 
}))

router.post("/login", async (req, res) => {

    console.log(req.body.email);

    try{
        const { email, password } = loginschema.parse(req.body);
        console.log(email, password);
        const resp = await UserModel.findOne({ email: req.body.email, password: req.body.password });
        console.log(resp);
        if (!resp) {
            res.status(400).json({ error: "E-mail address or Password is wrong" });
            res.end();
            return;
        }

        const token = jwt.sign({ key: resp._id }, SECRET);

        console.log(resp.name + " logged");

        res.status(200).json({ token, resp });

    }catch(err){
        console.log(err)
        res.status(400).json({ error: "Invalid data" });
        res.end();
        return;
    }
});

export default router;
