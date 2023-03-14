import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import TasksRouter from "./routes/tasks.routes.js";
import "dotenv/config.js";

const app = express();

// settings
app.set("json spaces", 2);
mongoose.set("strictQuery", false);

// middlewares
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routers
app.use("/api/tasks", TasksRouter);

// Index
const indexJSON = [
  {
    API: "Kanban Board Tasks",
  },
  {
    author: "Franco-IC",
  },
  {
    try: "/api/tasks",
  },
  {
    github: "https://github.com/Franco-IC",
  },
];

app.get("/", (req, res) => {
  res.json(indexJSON);
});

app.get("/api", (req, res) => {
  res.json(indexJSON);
});

// db connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("connected with MongoDB Atlas"))
  .catch((err) => console.error(err));

// srv start
const server = app.listen(process.env.PORT || 0, () => {
  console.log(`srv on http://localhost:${server.address().port}`);
});
