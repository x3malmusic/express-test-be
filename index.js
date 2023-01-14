import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import routes from "./routes";
import errorHandler from "./middlewares/errorHandler";

const app = express();

dotenv.config();

app.use(express.json({ extended: true }));

app.use(cors());

app.use('/', routes);
app.use(errorHandler);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});