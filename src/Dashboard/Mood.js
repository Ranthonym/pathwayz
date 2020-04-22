import React from "react";
import {
  CardTitle,
  CardBody,
  Card,
  CardHeader,
  Button,
  FormTextarea,
} from "shards-react";

const pd = require("paralleldots");
pd.apiKey = "UTmusb8UAcope1kSPfMamsxiPU2R14Lg5VwPJdHFKpU";

export default class Mood extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      startAnalyzing: false,
      fear: "",
      sad: "",
      happy: "",
      angry: "",
      excited: "",
      bored: "",
    };
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

          this.setState({
            startAnalyzing: true,
            fear: (entries[0][1] * 100).toFixed(2),
            sad: (entries[1][1] * 100).toFixed(2),
            bored: (entries[2][1] * 100).toFixed(2),
            happy: (entries[3][1] * 100).toFixed(2),
            excited: (entries[4][1] * 100).toFixed(2),
            angry: (entries[5][1] * 100).toFixed(2),
          });
          // convert scores to percentages

          console.log("Fear: ", this.state.fear);
          console.log("Sad: ", this.state.sad);
          console.log("Bored: ", this.state.bored);
          console.log("Happy: ", this.state.happy);
          console.log("Excited: ", this.state.excited);
          console.log("Angry: ", this.state.angry);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  render() {
    let results = (
      <div id="row">
        <div id="column">
          {" "}
          <div id="emoji">😱</div> <div>Fear</div>
          <div> -- </div>{" "}
        </div>

        <div id="column">
          {" "}
          <div id="emoji">😔</div> <div>Sad</div>
          <div> -- </div>{" "}
        </div>
        <div id="column">
          {" "}
          <div id="emoji">😴</div> <div> Bored</div>
          <div> -- </div>{" "}
        </div>
        <div id="column">
          {" "}
          <div id="emoji"> 😀</div> <div>Happy</div>
          <div> -- </div>{" "}
        </div>
        <div id="column">
          {" "}
          <div id="emoji"> 🤩</div> <div>Excited</div>
          <div> -- </div>{" "}
        </div>
        <div id="column">
          {" "}
          <div id="emoji">😡</div> <div>Angry</div>
          <div> -- </div>{" "}
        </div>
      </div>
    );
    if (this.state.startAnalyzing) {
      results = (
        <div>
          <div id="row">
            <div id="column">
              {" "}
              <div id="emoji">😱</div> <div>Fear</div>
              <div>{this.state.fear}%</div>{" "}
            </div>

            <div id="column">
              {" "}
              <div id="emoji">😔</div> <div>Sad</div>
              <div>{this.state.sad}%</div>{" "}
            </div>
            <div id="column">
              {" "}
              <div id="emoji">😴</div> <div> Bored</div>
              <div>{this.state.bored}%</div>{" "}
            </div>
            <div id="column">
              {" "}
              <div id="emoji"> 😀</div> <div>Happy</div>
              <div>{this.state.happy}%</div>{" "}
            </div>
            <div id="column">
              {" "}
              <div id="emoji"> 🤩</div> <div>Excited</div>
              <div>{this.state.excited}%</div>{" "}
            </div>
            <div id="column">
              {" "}
              <div id="emoji">😡</div> <div>Angry</div>
              <div>{this.state.angry}%</div>{" "}
            </div>
          </div>
        </div>
      );
    }
    return (
      <div>
        <Card id="mood-card">
          <CardHeader>
            <CardTitle>Mood Analyzer</CardTitle>
          </CardHeader>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="diary">
              {" "}
              <p className="mb-2">
                <CardBody>
                  {" "}
                  We know that planning your future can be scary. This is why we
                  have tailored some resources depending on your mood. Just type
                  in how you feel about your career search so far and we'll help
                  you out!{" "}
                </CardBody>
              </p>
            </label>{" "}
            <input id="diary" name="diary" type="text" />
            <button id="diary-button"> Feel Better Now </button>
          </form>
          <div>{results}</div>
        </Card>
      </div>
    );
  }
}
