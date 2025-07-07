const express = require('express');
const { createTodo } = require('./type');
const app = express();

app.use(express.json());

app.use('/', (req, res) => {
  res.json({ msg: "reaching successfully "});
})

app.post('/todos', (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);

  if(!parsedPayload.success){
    res.status(411).json({
      msg: 'You sent the wrong inputs'
    });
    return;
  }

  //put it in the db
});

app.get('/todos', (req, res) => {

});

app.put('/completed', (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = createTodo.safeParse(updatePayload);

  if(!parsedPayload.success){
    res.status(411).json({
      msg: 'You sent the wrong inputs'
    });
    return;
  }

  //put it in the db
});

app.listen(9000, () => {
  console.log("server running on port 9000");
})