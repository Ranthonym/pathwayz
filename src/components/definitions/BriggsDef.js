import React from "react";
import { CardDef } from "../utils/Cards";
import styled from "styled-components";
import { CardTitle, CardBody } from "shards-react";

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

  // export default ({ title, content, onBackClick, top5Careers }) => {
  //   const careerList = top5Careers.map((career) => {
  //     return <li>{career.title}</li>;
  //   });

  return (
    <Wrapper className="container">
      <CardDef>
        <CardTitle>
          {" "}
          <h1>{title}</h1>
        </CardTitle>

        {/* <div 
        className="close" onClick={onBackClick}>
          <i className="fa fa-times" aria-hidden="true" />
        </div> */}
        <CardBody>
          <div>
            <p className="text-justify">{content}</p>
            {/* <h5>Your Top 5 Career Options</h5> */}
            {/* <ul className="text-justify">{CareersList}</ul> */}

            <CareersList />
          </div>
        </CardBody>
      </CardDef>
    </Wrapper>
  );
};
