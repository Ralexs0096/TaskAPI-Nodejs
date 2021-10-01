require('dotenv').config()
import Server from './models/Server'

const app = new Server()
app.listen()
