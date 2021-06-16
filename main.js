const express = require ("express")
const app = express()

require("dotenv").config()
const db = require("./db")
const books = require("./books")
app.use(express.json());
app.post("/books",books.addNewBook)
app.get("/books",books.allBooks)
app.put("/books/:book_id",books.updateBooks)
app.delete("/books/:book_id",books.deleteBooks)
app.put("/books/books/DES",books.descendingBooks)
app.get("/books/null",books.nullPrice)
app.get("/books/price",books.allPriceBook)



app.listen(3000,()=>{
    console.log(
        "hello MYSQL"
    );
})