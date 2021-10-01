import {connect} from '../database/db'

export const getTasks = async (req, res) => {
  const db = await connect()
  const [rows] = await db.query('SELECT * FROM tbl_task')
  res.send(rows)
};

export const getTask = async (req, res) => {
  const db = await connect()
  const [rows] = await db.query('SELECT * FROM tbl_task WHERE id = ?', [req.params.id])
  res.json(rows[0])
};

export const getTaskCount = async (req, res) => {
  const conn = await connect()
  const [rows] = await conn.query('SELECT COUNT(*) FROM tbl_task')
  res.json({
    "Total de Tareas": rows[0]["COUNT(*)"]
  });
};

export const createTask = async (req, res) => {

  const {title, description} = req.body

  const db = await connect()
  const [results] = await db.query('INSERT INTO tbl_task (title, description) VALUES (?,?);', [title,description])


  res.json({
    id: results.insertId,
    ...req.body
  })
};

export const deleteTask = async (req, res) => {
  const db = await connect()
  const result = await db.query('DELETE FROM tbl_task WHERE id = ?', [req.params.id])
  res.sendStatus(204)
};

export const updateTask = async (req, res) => {
  const db = await connect()
  await db.query('UPDATE tbl_task SET ? WHERE id = ?', [req.body, req.params.id])
  res.sendStatus(204)
};
