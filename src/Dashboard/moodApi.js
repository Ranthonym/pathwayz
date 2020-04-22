const pd = require("paralleldots");
const express = require("express");
const app = express();

pd.apiKey = process.env.PARALLELDOTS_KEY;

const handlePromise = (promise, res) => {
  promise
    .then((response) => {
      res.send(response);
      console.log(response);
    })
    .catch((error) => {
      res.send(error);
      console.log(error);
    });
};

app.post("/emotion", function (req, res) {
  const text = req.body.text;
  console.log(text);

  Promise.all([pd.emotion(text)]).then((results) => {
    let response = {
      emotion: JSON.parse(results[0]),
    };
    res.send(response);
  });
  handlePromise(pd.emotion(req.body.text), res);
});
