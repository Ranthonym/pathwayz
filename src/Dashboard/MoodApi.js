const pd = require(“paralleldots”);
pd.apiKey = process.env.PARALLELDOTS_KEY;

pd.emotion(“I am trying to imagine you with a personality.“, “en”)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
const textArray = JSON.stringify([
  “I am trying to imagine you with a personality.“,
  “This is shit.“,
]);
pd.emotionBatch(textArray, “en”)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });