const pd = require("paralleldots");

pd.apiKey = "UTmusb8UAcope1kSPfMamsxiPU2R14Lg5VwPJdHFKpU";

pd.emotion("I am trying to imagine you with a personality.", "en")
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });

const textArray = JSON.stringify([
  "I am trying to imagine you with a personality.",
  "This is shit.",
]);
pd.emotionBatch(textArray, "en")
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
