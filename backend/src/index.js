const express = require('express')
const { PrismaClient } = require('@prisma/client')
const cors = require('cors')
const prisma = new PrismaClient()

const app = express();
const port = 3011

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}

app.use(cors(corsOptions))
app.use(express.json())

app.post('/registro', async (req, res) => {
    const { username, email, phone, date } = req.body;
    const dateISO = new Date(date).toISOString();
  
    try {
      const existingUser = await prisma.user.findFirst({
        where: {
          OR: [
            { email: email },
            { phone: phone }
          ]
        }
      });
  
      if (existingUser) {
        if (existingUser.email === email) {
          return res.status(400).json({ message: 'Lo siento, pero este email ya se encuentra registrado.' });
        }
        if (existingUser.phone === phone) {
          return res.status(400).json({ message: 'Lo siento, pero este número ya se encuentra registrado.' });
        }
      }
  
      const user = await prisma.user.create({
        data: { 
          username, 
          email: email || undefined,
          phone: phone || undefined,
          date: dateISO 
        }
      });
  
      res.status(201).json({ 
        message: '¡Grandioso, te has registrado con éxito!', 
        user: {
          username: user.username,
          date: user.date
        }
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error en el servidor' });
    }
  });

app.post('/login', async (req, res) => {
  const { email, phone, date } = req.body

  try {
    const dateISO = new Date(date).toISOString()

    const user = await prisma.user.findFirst({
      where: {
        AND: [
          {
            OR: [
              { email: email},
              { phone: phone}
            ]
          },
          { date: dateISO }
        ]
      }
    });
    
    if (user) {
      res.status(200).json(
        {
          message: 'Es un gusto tenerte de nuevo',
          user: {
            username: user.username,
            date: date
          }
        })
    } else {
      res.status(401).json({ message: 'Credenciales invalidas, intenta de nuevo.'})
    }
  } catch (error) {
      res.status(500).send('Server error')
  }
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})