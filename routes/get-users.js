import express from 'express';
import pkg from '../generated/prisma/index.js';

const { PrismaClient } = pkg;
const prisma = new PrismaClient()
const getUsers = express.Router();


getUsers.get('/usuarios', async (req, res) => {
    let users = []
    if (req.query) {
        users = await prisma.user.findMany({
            where: {
                age: req.query.age
            }
        })
    } else {
        users = await prisma.user.findMany()

    }

    res.status(200).json(users)
})



export default getUsers;
