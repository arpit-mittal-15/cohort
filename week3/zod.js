const express = require("express");
const zod = require("zod");

const app = express();
const PORT = 3000;

const schema = zod.array(zod.number());

// {
//   email: string => email,
//   password: string => atleast 8 digits,
//   country: "IN", "US"
// }

// const schema = zod.object({
//   email: zod.string().email(),
//   password: zod.string().min(8),
//   country: zod.literal("IN").or(zod.literal("US"))
// })

app.use(express.json());

app.post("/health-checkup", (req, res) => {
  const kidneys = req.body.kidneys;
  const response = schema.safeParse(kidneys);

  if(!response.success){
    res.status(411).json({
      msg: "input is invalid"
    })
    return;
  }
  else{
    res.send({
      response
    })
  }

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