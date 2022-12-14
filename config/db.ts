import mongoose from "mongoose";

const URI = "mongodb://localhost/BOOKS";
const lifeURI =
  "mongodb+srv://Sukanmi157:Sukanmi157@cluster0.dorzl9v.mongodb.net/bookStore?retryWrites=true&w=majority";
mongoose.connect(lifeURI);
mongoose.connection
  .on("open", () => {
    console.log("db is connected");
  })
  .once("error", (error) => {
    console.log("error occ");
  });
