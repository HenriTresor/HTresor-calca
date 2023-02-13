const express = require("express");
require("dotenv").config();
const app = express();
// const url = require('url')

const PORT = process.env.PORT;

// calculator
// the request objecct must have one property called list
// with a value of a list containing the numbers

app.get("/addition", (req, res) => {
  let nums = req.query.nums.split(" ");
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === "") {
      nums[i] = "0";
    }
  }

  nums.forEach((num) => {
    sum += parseInt(num);
  });

  res.json({ sum: sum });
});

app.get("/multiplication", (req, res) => {
  let nums = req.query.nums.split(" ");

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === "") {
      nums[i] = "0";
    }
  }

  let product = 1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == "0") {
      continue;
    }

    product *= parseInt(nums[i]);
  }

  console.log(product);

  res.json({ product: product });
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
