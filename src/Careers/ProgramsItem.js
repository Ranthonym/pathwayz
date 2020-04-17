import React from "react";

import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardFooter
} from "shards-react";

export default function ProgramsItem(props) {
    return (
      <Card small className="h-100">
        <CardHeader className="border-bottom">
          <h4>{props.program}</h4>
          <h5>{props.school}</h5>
        </CardHeader>
        <CardBody className="pt-0">
          <div>
            <h5>What You'll Learn</h5>
            {props.description}
          </div>
          <Row className="border-bottom py-2 bg-light">
            <Col>
              <div align="center">
                <h5>Career Paths Include</h5>
                {props.path}
              </div>
            </Col>
          </Row>
          <div>
            <h5 className="education">Admission Requirements</h5>
            {props.requirements}
          </div>
        </CardBody>
        <CardFooter></CardFooter>
      </Card>
    );
  }




