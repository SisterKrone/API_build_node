import express from 'express';
import pkg from '../generated/prisma/index.js';

const { PrismaClient } = pkg;
const prisma = new PrismaClient();
const deleteUsers = express.Router();

deleteUsers.delete('/usuarios/:id', async (req, res) => {
    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })
    res.status(200).json({ message: "Usuário deletado com sucesso" })
})

export default deleteUsers;
