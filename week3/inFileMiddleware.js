const express = require("express");

const app = express();
const PORT = 3000;

function userMiddleware(req, res, next) {
  if (username != "harkirat" || password != "pass") {
    res.status(403).json({
      msg: "invalid user",
    });
  } else {
    next();
  }
}

function kidneyMiddleware(req, res, next) {
  if (kidneyId != 1 && kidneyId != 2) {
    res.status(403).json({
      msg: "invalid input",
    });
  } else {
    next();
  }
}

// app.use(userMiddleware); //GLOBAL MIDDLEWARE

app.get("/health-checkup", userMiddleware, kidneyMiddleware, (req, res) => {
  res.send("Your heart is healthy");
});

app.get("/kidney-check", userMiddleware, kidneyMiddleware, (req, res) => {
  res.send("Your heart is healthy");
});

app.get("/heart-check", userMiddleware, (req, res) => {
  res.send("Your heart is healthy");
});

//global catches
app.use(function(err, req, res, next){
  res.json({
    msg: "Sorry something is up with server."
  })
})

app.listen(PORT, () => {
  console.log("Server is running.");
});
