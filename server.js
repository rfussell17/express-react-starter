const express = require("express");

const app = express();

app.get("/api/customers", (req, res) => {
  const customers = [
    { id: 1, firstName: "John", lastName: "Doe" },
    { id: 2, firstName: "Bo", lastName: "John" },
    { id: 3, firstName: "Dan", lastName: "Son" },
  ];

  res.json(customers);
});

const port = 5000;

app.listen(port, () => console.log(`listening on port ${port}`));
