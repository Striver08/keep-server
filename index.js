const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

const todoRoutes = require("./routes/todoRoutes")
const connectionOptions = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
};
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://todoDB:todopass@siddharth.lh3nn.gcp.mongodb.net/todoDB", connectionOptions)
    .then(() => console.log("Connected Succesfully"))
    .catch((err) => console.error(err));

app.use("/todos", todoRoutes)

app.listen(5000, () => {
    console.log("The Server is on Port 5000")
})