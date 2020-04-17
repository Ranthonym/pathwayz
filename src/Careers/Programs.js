import React from "react";
import PropTypes from "prop-types";
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
} from "shards-react";

export default class Programs extends React.Component {
  render() {
    const { program } = this.props;
    const { description } = this.props;
    const { requirements } = this.props;
    const { path } = this.props;
    const { school } = this.props;
    return (
      <Card small className="h-100">
        <CardHeader className="border-bottom">
          <h4>{program}</h4>
          <h5>{school}</h5>
        </CardHeader>
        <CardBody className="pt-0">
          <div>
            <h5>What You'll Learn</h5>
            {description}
          </div>
          <Row className="border-bottom py-2 bg-light">
            <Col>
              <div align="center">
                <h5>Career Paths Include</h5>
                {path}
              </div>
            </Col>
          </Row>
          <div>
            <h5 className="education">Admission Requirements</h5>
            {requirements}
          </div>
        </CardBody>
      </Card>
    );
  }
}

Programs.propTypes = {
  program: PropTypes.string,
  description: PropTypes.string,
  requirements: PropTypes.instanceOf(Element),
  path: PropTypes.string,
  school: PropTypes.string,
};

// const careers = this.props.careers.map(career => {
Programs.defaultProps = {
  program: "Software Engineering",
  description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
  requirements: <ul className="no-bullets"><li>Ontario Secondary School Diploma (OSSD)</li>
  <li>ENG4U</li>
  <li>SCH4U</li>
  <li>SPH4U</li>
  <li>MHF4U</li>
  <li>MCV4U</li>
  <li>And one additional 4U or M courses</li>
  <li><strong>No prerequisite below 70%</strong></li></ul>,
  path: "Software Engineer, Embedded Systems Engineer, Platform and Infrastructure Engineer, Software Architecture Engineer, Computer Systems Designer, Software Developer ",
  school: "York University",
};

// })
