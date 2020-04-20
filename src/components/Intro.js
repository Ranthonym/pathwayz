import React from "react";
import styled from "styled-components";
import { StartBtn } from "../components/utils/Buttons";
import { IntroCard } from "../components/utils/Cards";
import { fonts, colors } from "../components/utils/_var";
import { media } from "../components/utils/_media-queries";

const Wrapper = styled.div`
  // position: fixed;
  margin-left: 100px;
  min-height: 100%;
  width: 200px;
  background: white;
  h1 {
    position: relative;
    font-family: ${fonts.$titleFont};
    font-size: 1.1em;
    color: white;
    text-align: center;
    padding-top: 2em;
    ${media.tablet`font-size: 1.5em; letter-spacing: 1.5px;`};
    ${media.laptop`font-size: 2em; letter-spacing: 2px;`};
  }
  .list-group {
    padding: 0 2em;
    .list-group-item {
      background: transparent;
      padding: 1em 1.25em;
      font-family: ${fonts.$latoFont};
      border: 0;
      margin-bottom: 0;
      color: ${colors.$colorGold};
      ${media.tablet`font-size: 1.3em`};
      text-align: center;
    }
  }
`;

const Intro = ({ title, _onStartClick }) => {
  return (
    <Wrapper className="container">
      <IntroCard>
        {/* <div className="corner" />
        <div className="corner" />
        <div className="corner" />
        <div className="corner" /> */}
        <h1 id="quiz-title">{title}</h1>
        {/* TODO: WILL CHANGE THIS THING DOWN HERE */}
        <ul className="list-group">
          <li id="quiz-description" className="list-group-item">
            This assessment consists of 15 questions. Answer honestly as we want
            to ensure that we match you with the career that's best suited for
            you.
          </li>
        </ul>
        <StartBtn onClick={_onStartClick}>
          <span id="quiz-button">Start Now</span>
          <div className="icon">
            <i id="quiz-button" className="fa fa-arrow-right" />
          </div>
        </StartBtn>
      </IntroCard>
    </Wrapper>
  );
};

export default Intro;
