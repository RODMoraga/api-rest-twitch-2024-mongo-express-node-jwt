import 'dotenv/config'
import './database/connectdb.js'
import express from 'express'
import router from './routes/auth.routes.js';

const app = express();

app.use(express.json())
app.use('/api', router)

const PORT = process.env.PORT || 4000

app.listen(PORT, () => console.log(`🔥🔥🔥 http://localhost:${PORT}`))