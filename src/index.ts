import express from "express";

const app = express();

app.get("/", (request, response) => {
  return response.json({ hello: "Hello world" });
});

const PORT = 4000;
app.listen(PORT, () =>
  console.log(`Server Listening on http://localhost:${PORT}`)
);
