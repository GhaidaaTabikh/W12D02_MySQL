const { query } = require("express");
const db = require("./db");

const addNewBook = (req, res) => {
  console.log("=================", req.body.title);

  const command = `INSERT INTO books (title,author,published_a,price) VALUES (?,?,?,?);`;
  const { title, author, published_a, price } = req.body;

  const arr = [title, author, published_a, price];

  db.query(command, arr, (err, result) => {
    if (err) throw err;
    console.log("RESULT: ", result);
    res.json(result);
  });
};

const allBooks = (req, res) => {
  const command = `SELECT * FROM books`;
  db.query(command, (err, result) => {
    if (err) throw err;
    console.log("RESULT: ", result);
    res.json(result);
  });
};


//qu1
const updateBooks = (req, res) => {
  const command = `UPDATE books
   SET title = ?
   WHERE id = ? `;
  arr = [req.body.title, req.params.book_id];
  db.query(command, arr, (err, result) => {
    if (err) throw err;
    console.log("RESULT: ", result);
    res.json(result);
  });
};


//qu2
const deleteBooks = (req, res) => {
  const command = `DELETE FROM books WHERE id = ?;`;
  const arr = [req.params.book_id];
  db.query(command, arr, (err, result) => {
    if (err) throw err;
    console.log("RESULT: ", result);
    res.json(result);
  });
};


//qu3
const descendingBooks = (req, res) => {
  const command = `SELECT * FROM books ORDER BY id DESC`;
  db.query(command, (err, result) => {
    if (err) throw err;
    console.log("RESULT: ", result);
    res.json(result);
  });
};


//qu4
const nullPrice = (req,res)=>{
const command = `SELECT * FROM books WHERE price IS NULL`
db.query(command,(err,result)=>{
    if (err) throw err;
    console.log("RESULT: ", result);
    res.json(result);
})

}

//qu5
const allPriceBook = (req,res)=>{
const command= `SELECT * FROM books WHERE price IS NOT NULL`
db.query(command,(err,result)=>{
    if (err) throw err;
    console.log("RESULT: ", result);
    res.json(result);
})
}


module.exports = {
  addNewBook,
  allBooks,
  updateBooks,
  deleteBooks,
  descendingBooks,
  nullPrice,
  allPriceBook
};
