const express=require("express");
const router=express.Router()


const Book = require("../model/Book");
const booksController=require('../controllers/books_controller')


// router.get("/",async(req,res,next)=>{
// The route will provide all of the blocks

// let books;
// try{
//     books=await Book.find()
// }
// catch(err){
// console.log(err);
// }


// if(!books){
//     return res.status(404).json({message:"No Product found"})
// }
// return res.status(200).json({books})
// })



router.get("/",booksController.getAllBooks)
router.post("/",booksController.addBook)
router.get("/:id",booksController.getById)  //http://localhost:5000/books/637bb5ecac258345063b4b4b(GET)
router.put("/:id"
,booksController.updateBook)  //http://localhost:5000/books/637bb5ecac258345063b4b4b(PUT)
router.delete("/:id",booksController.deleteBook);
module.exports=router;
