const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// http://localhost:5000/items/0/6
app.get("/items/:pageIdx/:pageSize", async (req, res) => {
  const max = 100;
  const pageIdx = Math.min(Number(req.params.pageIdx), max);
  const pageSize = Number(req.params.pageSize);

  const items = [];
  for (var i = pageIdx; i <= pageIdx + pageSize; i++)
    items.push({ id: i, name: `item ${i}` });

  res.json({ count: max, items });
});

// http://localhost:5000
app.get("/", async (req, res) => {
  res.json("Hello World!");
});

app.listen(port, (err) => {
  if (err) console.log(err);
  console.log(`server running on http://localhost:${port}`);
});
