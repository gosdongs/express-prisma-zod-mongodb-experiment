import express from "express";
import indexRoute from "./routes";

// Initiate express
const app = express();

app.use(express.json());

const port = process.env.PORT || 3000;

app.use(indexRoute);

app.listen(port, () => {
  console.log(`Core listening on port ${port}`);
});
