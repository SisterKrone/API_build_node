import express from 'express';
import pkg from '../generated/prisma/index.js';


const { PrismaClient } = pkg;
const prisma = new PrismaClient();
const createUsers = express.Router();



createUsers.post('/usuarios', async (req, res) => {
    await prisma.user.create({
        data: {
            name: req.body.name,
            age: req.body.age,
            email: req.body.email,


        }
    })

    res.status(201).json(req.body)
})




export default createUsers;
