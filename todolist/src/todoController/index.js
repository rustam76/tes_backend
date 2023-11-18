import db from "../model/database.js";
// import queryTodo from '../model/todoModel.js';

const getAll = async (req, res) => {
  try {
    let sql = "SELECT * FROM tb_list"
    db.query(sql,(err, result) =>{
        if (err) console.log(err);
        return res.json({
            status: '200',
            message: 'success',
            data: result
        });
    });
  } catch (err) {
    return res.json({
      status: "400",
      message: err,
    });
  }
};

const getById = async (req, res) => {
  try {
    const todoId = req.params.id;
    const sql = "SELECT * FROM tb_list WHERE id = ?";
    db.query(sql, [todoId], (err, result) => {
      if (err) console.log(err);
      return res.json({
        status: "200",
        message: "success",
        data: result,
      });
    });
  } catch (err) {
    return res.json({
      status: "400",
      message: err,
    });
  }
};

const addData = async (req, res) => {
  try {
    const { title, description, due_date } = req.body;
    const sql =
      "INSERT INTO tb_list (title, description, due_date) VALUES (?,?,?)";
    db.query(sql, [title, description, due_date], (err, result) => {
      if (err) console.log(err);
      return res.json({
        status: "201",
        message: "success berhasil di tambah",
        data: result.id,
      });
    });
  } catch (err) {
    return res.json({
      status: "400",
      message: err,
    });
  }
};

const updateData = async (req, res) => {
  try {
    const todoId = req.params.id;
    const { title, description, due_date, status } = req.body;
    const sql =
      "UPDATE tb_list SET title = ?, description = ?, due_date = ?, status = ? WHERE id = ?";
    db.query(
      sql,
      [title, description, due_date, status, todoId],
      (err, result) => {
        if (err) console.log(err);
        return res.json({
          status: "200",
          message: "success berhasil di ubah",
          data: result,
        });
      }
    );
  } catch (error) {
    return res.json({
      status: "400",
      message: err,
    });
  }
};

const deleteData = async (req, res) => {
  try {
    const todoId = req.params.id;
    const sql = "DELETE FROM tb_list WHERE id = ?";
    db.query(sql, [todoId], (err, result) => {
      if (err) console.log(err);
      return res.json({
        status: "200",
        message: "success berhasil di hapus",
        data: result.id,
      });
    });
  } catch (error) {
    return res.json({
      status: "400",
      message: err,
    });
  }
};

export default { getAll, getById, addData, updateData, deleteData };
