import React from "react";

const pd = require("paralleldots");
pd.apiKey = "UTmusb8UAcope1kSPfMamsxiPU2R14Lg5VwPJdHFKpU";
export default class Mood extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    for (var value of data.values()) {
      console.log(value);
      pd.emotion(value)
        .then((response) => {
          const emotions = JSON.parse(response);
          console.log(emotions);
          const entries = Object.entries(emotions.emotion);
          console.log(entries[0][1]);

          // convert scores to percentages
          let fear = entries[0][1] * 100;
          let sad = entries[1][1] * 100;
          let bored = entries[2][1] * 100;
          let happy = entries[3][1] * 100;
          let excited = entries[4][1] * 100;
          let angry = entries[5][1] * 100;

          console.log("Fear: ", fear);
          console.log("Sad: ", sad);
          console.log("Bored: ", bored);
          console.log("Happy: ", happy);
          console.log("Excited: ", excited);
          console.log("Angry: ", angry);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="diary">
            {" "}
            <p className="mb-2">🤔 Waiting for you to say something...</p>
          </label>
          <input id="diary" name="diary" type="text" />
          <button> Vent! </button>
        </form>
      </div>
    );
  }
}
