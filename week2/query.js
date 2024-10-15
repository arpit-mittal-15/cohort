const express = require("express");

const PORT = 3001;
const app = express();

function sum(n) {
  let ans = 0;
  for(let i=1; i<=n; i++){
    ans += i;
  }
  return ans;
}

app.get("/", (req, res) => {
  const n = req.query.n;
  console.log(n);
  const ans = sum(n);
  res.send(ans.toString());
})

app.listen(PORT, ()=>{console.log("server is running")});