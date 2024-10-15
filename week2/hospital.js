const express = require("express");

const app= express();
const PORT = 3002;

let users = [{
  name: "John",
  kidneys: [{
    healthy: false,
  }, {
    healthy: true,
  }]
}]

app.get("/", (req, res) => {
  const johnKidneys = users[0].kidneys;
  const numberOfKidneys = johnKidneys.length;
  let healthyKidneys = 0;
  for(let i=0; i<numberOfKidneys; i++){
    if(johnKidneys[i].healthy){
      healthyKidneys++;
    }
  }
  let unhealthyKidneys = numberOfKidneys - healthyKidneys;

  res.json({
    numberOfKidneys,
    healthyKidneys,
    unhealthyKidneys,
  })
})

app.listen(PORT, ()=>{console.log("server is running")})