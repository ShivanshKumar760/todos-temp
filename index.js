import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const port = 3000 || process.env.PORT;

app.use(cors());

app.get("/", (req, res) => {
  const todoList = [
    {
      title: "This is todo1",
      description: "todo1",
      id: 1,
    },
    {
      title: "This is todo2",
      description: "todo2",
      id: 2,
    },
  ];

  res.json(todoList);
});

app.listen(port, () => {
  console.log("Server is running !");
});
