import React from "react";
import { CardDef } from "../utils/Cards";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: scroll;
`;

export default ({ title, content, onBackClick, CareersList }) => {
  // const careers = CareersList.map((career) => {
  //   return <li>{career.title}</li>;
  // });
  return (
    <Wrapper className="container">
      <CardDef>
        <h1>{title}</h1>
        <div className="close" onClick={onBackClick}>
          <i className="fa fa-times" aria-hidden="true" />
        </div>
        <p className="text-justify">{content}</p>
        <h3>Your Top 5 Career Options</h3>
        {/* <ul className="text-justify">{CareersList}</ul> */}
        <CareersList />
      </CardDef>
    </Wrapper>
  );
};
