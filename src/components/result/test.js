import React, { Component } from "react";
import PropTypes from "prop-types";
import { Wrapper } from "../utils/ResultWrapper";
import BriggsDef from "../definitions/BriggsDef";

// const top5Careers = ["career1", "career2", "career3", "career4", "career5"];

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      careers: [],
      showISTJ: false,
    };
  }

  componentDidMount() {
    this.getCareers().then((careers) => {
      this.setState({ careers });
    });
  }

  getCareers() {
    return fetch("http://localhost:3001/personalities/16").then((response) => {
      return response.json();
    });
  }

  renderISTJ() {
    return (
      <BriggsDef
        title={"Introvert | Sensing | Thinking | Judging"}
        content={`You are a type ISTJ, aka The Inspector.
                You tend to be practical and logical above all else.
                You should consider a job in accounting or engineering.`}
        top5Careers={this.state.careers}
        onBackClick={this.onISTJ_click}
      />
    );
  }

  render() {
    let showISTJ = this.state.showISTJ;

    if (showISTJ) {
      return this.renderISTJ();
    }
    const careers = this.state.careers;
    const careerList = careers.map((career) => {
      return <li>{career.title}</li>;
    });

    return (
      <Wrapper>
        <h1 className="display-3 title">Briggs Result</h1>
        <hr className="my-4" />
        <h2 className="display-6 resultTxt">{this.props.resultBriggs}</h2>
        <hr className="my-5" />
        <p className="lead">What does this result mean?</p>
        <p className="lead">{careerList}</p>
        <p>
          {() => {
            switch (this.props.resultBriggs) {
              case "ISTJ":
                let showISTJ = this.state.showISTJ;
                this.setState({ showISTJ: !showISTJ });
                break;
            }
          }}
        </p>
      </Wrapper>
    );
  }
}

Test.PropTypes = {
  resultBriggs: PropTypes.string.isRequired,
};

export default Test;
