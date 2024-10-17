const express = require("express");
const zod = require("zod");

const app = express();
const PORT = 3000;

const schema = zod.array(zod.number());

app.use(express.json());

app.post("/health-checkup", (req, res) => {
  const kidneys = req.body.kidneys;
  const response = schema.safeParse(kidneys);

  res.send({response});
});

//global catches
app.use((err, req, res, next) => {
  res.json({
    msg: "Internal server error"
  })
})

app.listen(PORT, ()=> {
  console.log("server is running");
})