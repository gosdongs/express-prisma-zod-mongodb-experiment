import express from "express";

// Initiate express
const app = express();

app.use(express.json());

const port = process.env.PORT || 3000;

app.get("*", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Core listening on port ${port}`);
});
