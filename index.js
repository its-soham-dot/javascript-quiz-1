const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const Questions = require("../COLLAB/models/question.js");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

let MONGO_URL = ("mongodb://127.0.0.1:27017/quiz");

main()
   .then(()=>{
    console.log("connected to DB");
   })
   .catch((err)=>{
    console.log(err);
   });

async function main(){
    await mongoose.connect(MONGO_URL);
}



function RandomQuestion() {
    const randomIndex = Math.floor(Math.random() * 123);
    return randomIndex;
}
RandomQuestion();


//index route
app.get("/questions", async (req,res)=>{
    let AllQuestions = await Questions.find({});
    res.render("allques.ejs",{ AllQuestions, RandomQuestion });
});


app.listen(8080, () => {
    console.log("Server is running on port 8080");
});


    
    