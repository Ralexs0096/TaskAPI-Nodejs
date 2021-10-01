import express from 'express'
import taskRoute from '../routes/task.routes.js'
import cors from 'cors'
import morgan from 'morgan'
import swagerrJSDoc from 'swagger-jsdoc'
import swaggerUI from 'swagger-ui-express'
import {options} from '../swaggerOptions'

class Server{
  constructor(){
    this.app = express()
    this.port = process.env.PORT || 4000
    this.taskPath = '/api/task'
    this.specs = swagerrJSDoc(options)

    this.midlewares()
    this.routes()
    this.doc()
  }

  // Methods ***************************

  midlewares(){
    this.app.use(express.json())
    this.app.use(express.urlencoded({extended: true}))
    this.app.use(cors())
    this.app.use(morgan("dev"))
  }

  doc(){
    this.app.use('/docs', swaggerUI.serve, swaggerUI.setup(this.specs))
  }

  routes(){
    this.app.use(this.taskPath, taskRoute)
  }

  listen(){
    this.app.listen(this.port, () => console.log('Server running on Port ', this.port))
  }
}

export default Server
