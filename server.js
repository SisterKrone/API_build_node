import express from 'express';
import getUsers from './routes/get-users.js';
import createUsers from './routes/create-users.js';
import updateUsers from './routes/update-users.js';
import deleteUsers from './routes/delete-users.js';
import pkg from './generated/prisma/index.js';

const { PrismaClient } = pkg;
const prisma = new PrismaClient()
const app = express();

// Middleware para interpretar JSON (se precisar)
app.use(express.json());


app.use(getUsers);
app.use(createUsers)
app.use(updateUsers)
app.use(deleteUsers)

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
