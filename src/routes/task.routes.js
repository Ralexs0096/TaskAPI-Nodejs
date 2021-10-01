import {Router} from 'express'
const router = Router()

import {
  getTasks,
  getTask,
  createTask,
  getTaskCount,
  deleteTask,
  updateTask,
} from "../controllers/taskController"

/**
* @swagger
* tags:
*   name: Tasks
*   description: Task endpoint
*/

/**
* @swagger
* /task:
*  get:
*     summary: Get all tasks
*     tags: [Tasks]
*/
router.get("/", getTasks)

/**
* @swagger
* /task:
*  post:
*     summary: save a new task
*     tags: [Tasks]
*/
router.post("/", createTask)

/**
* @swagger
* /task/count:
*  get:
*     summary: Get total tasks counter
*     tags: [Tasks]
*/
router.get("/count", getTaskCount)

/**
* @swagger
* /task/:id:
*  get:
*     summary: Get a tasks by id
*     tags: [Tasks]
*/
router.get("/:id", getTask)

/**
* @swagger
* /task/:id:
*  delete:
*     summary: Deleta a task by id
*     tags: [Tasks]
*/
router.delete("/:id", deleteTask)

/**
* @swagger
* /task/:id:
*  put:
*     summary: Updata a task by id
*     tags: [Tasks]
*/
router.put("/:id", updateTask)

export default router
