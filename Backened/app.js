// Am0taPtqfdBtJTQy

console.log(5859);
console.log("08d");

const express=require("express")
const mongoose=require("mongoose");
// const router = require("./routers/book-routes");
const router=require("./routers/book_routes")
const cors=require("cors")
const app=express()






//middleware
app.use(express.json()) //json data add from postman
app.use(cors())//for proiding security ,working as a middleware
app.use("/book",router)//localhost:5000/books



mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://admin:Am0taPtqfdBtJTQy@cluster0.fnrglhh.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
console.log("conected to the db");

}).then(()=>{
   app.listen(2000)
}).catch((err)=>{
console.log(err);
})



