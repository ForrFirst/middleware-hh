import express from "express";
import assignmentRouter from "./routes/assignment.mjs";

const app = express();
const port = 4001;

app.use(express.json());
app.use('/assignments',assignmentRouter)

app.get("/test", (req, res) => {
  return res.json("Server API is working 🚀");
});

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
