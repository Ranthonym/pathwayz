import React from "react";
import PropTypes from "prop-types";
import { Row, Col, Card, CardHeader, CardBody, Button, CardFooter } from "shards-react";

export default class Careers extends React.Component {

  render() {
    const { title } = this.props;
    const { description } = this.props;
    const { education } = this.props;
    const { salary } = this.props;
    const { outlook } = this.props;
    return (
      <Card small className="h-100">
        <CardHeader className="border-bottom">
          <h4>{title}</h4>
          <h5>{outlook}</h5>
        </CardHeader>
        <CardBody className="pt-0">
          <div>
            <h5>Description</h5>
            {description}
          </div>
          <Row className="border-bottom py-2 bg-light">
            <Col>
            <div align="center">
              <h5>Average Salary</h5>
              {salary}
            </div>
            </Col>
          </Row>
          <div><h5 className="education">Education</h5>{education}</div>
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
}

Careers.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  education: PropTypes.string, 
  salary: PropTypes.string,
  outlook: PropTypes.string
};


// const careers = this.props.careers.map(career => {
Careers.defaultProps = {
  title: "Software Engineer",
  description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
  education: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.",
  salary: "$100,000-$110,000",
  outlook: "Job prospects: ★ ★ ★ Good"
      }

    // })