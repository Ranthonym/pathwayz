import React from "react";
import { Row, Col, Card, CardHeader, CardBody, Button, CardFooter } from "shards-react";

export default function CareersItem(props) {

    return (
      <Card key={props.id} small className="h-100">
        <CardHeader className="border-bottom">
          <h4>{props.title}</h4>
          <h5>{props.outlook}</h5>
        </CardHeader>
        <CardBody className="pt-0">
          <div>
            <h5>Description</h5>
            {props.description}
          </div>
          <Row className="border-bottom py-2 bg-light">
            <Col>
            <div align="center">
              <h5>Average Salary</h5>
              {props.salary}
            </div>
            </Col>
          </Row>
          <div><h5 className="education">Education</h5>{props.education}</div>
          <Button
                theme="info"
                className="d-flex ml-auto mr-auto ml-sm-auto mr-sm-0 mt-3 mt-sm-0"
              >
                View programs related to this career &rarr;
              </Button>
        </CardBody>
        <CardFooter><div align="center">Legend: The job opportunities can be: ☆ ☆ ☆ Undetermined ★ ☆ ☆ Limited ★ ★ ☆ Fair ★ ★ ★ Good</div></CardFooter>
      </Card>
    );
  }


