import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "shards-react";

export default function Videos() {
  return (
    <div>
      <div id="blog-container">
        <Row className="row">
          <Col>
            <Card id="blog-card" className="blog-item">
              <iframe
                className="video"
                src="https://www.youtube.com/embed/E_nMwG6215s"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <div align="center">
                <CardHeader>
                  <a href="https://www.youtube.com/embed/E_nMwG6215s">
                    5 Myths About Scholarships [VIDEO]
                  </a>
                </CardHeader>
              </div>
              <CardBody>
                <p>
                  There's a lot of misinformation out there about scholarship
                  deadlines and eligibility, so we've made a short video to bust
                  the 5 biggest scholarship myths.
                </p>
              </CardBody>
              <CardFooter className="blog-footer">
                <div>By: Scholarships Canada</div>
                <div>February 05, 2020</div>
              </CardFooter>
            </Card>
          </Col>
        </Row>

        <Row className="row">
          <Col>
            <Card id="blog-card" className="blog-item">
              <iframe
                className="video"
                src="https://www.youtube.com/embed/owEkvesaOHo"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <div align="center">
                <CardHeader>
                  <a href="https://www.youtube.com/embed/owEkvesaOHo">
                    How to Pay for University [VIDEO]
                  </a>
                </CardHeader>
              </div>
              <CardBody>
                <p>
                  There are lots of options available to help you pay for
                  university, and we have plenty of tips and support to help you
                  manage your expenses and reduce costs where you can.
                </p>
              </CardBody>
              <CardFooter className="blog-footer">
                <div>By: Vancouver Island University</div>
                <div>January 23, 2020</div>
              </CardFooter>
            </Card>
          </Col>
        </Row>

        <Row className="row">
          <Col>
            <Card id="blog-card" className="blog-item">
              <iframe
                className="video"
                src="https://www.youtube.com/embed/kMeDuvprqsU"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <div align="center">
                <CardHeader>
                  <a href="https://www.youtube.com/embed/kMeDuvprqsU">
                    Our Top 5 Tips for Choosing the Right University [VIDEO]
                  </a>
                </CardHeader>
              </div>
              <CardBody>
                <p>
                  Western University grads share what they wish they knew going
                  into first year.
                </p>
              </CardBody>
              <CardFooter className="blog-footer">
                <div>By: Western University</div>
                <div>September 27, 2019</div>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
      <div id="blog-container">
        <Row className="row">
          <Col>
            <Card id="blog-card" className="blog-item">
              <iframe
                className="video"
                src="https://www.youtube.com/embed/1Zw8Bfe9lV8"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <div align="center">
                <CardHeader>
                  <a href="https://www.youtube.com/embed/1Zw8Bfe9lV8">
                    Life After High School: Tips for Choosing the Right School
                    [VIDEO]
                  </a>
                </CardHeader>
              </div>
              <CardBody>
                <p>
                  ScholarshipsCanada asked five recent grads to share their
                  story. Here are their tips for choosing the right school!
                </p>
              </CardBody>
              <CardFooter className="blog-footer">
                <div>By: Scholarship Canada</div>
                <div>December 12, 2017</div>
              </CardFooter>
            </Card>
          </Col>
        </Row>

        <Row className="row">
          <Col>
            <Card id="blog-card" className="blog-item">
              <iframe
                className="video"
                src="https://www.youtube.com/embed/bGmWFWWEaj8"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <div align="center">
                <CardHeader>
                  <a href="https://www.youtube.com/embed/bGmWFWWEaj8">
                    Deciding What to Study [VIDEO]
                  </a>
                </CardHeader>
              </div>
              <CardBody>
                <p>
                  We share our best advice for choosing your programs in this
                  short video.
                </p>
              </CardBody>
              <CardFooter className="blog-footer">
                <div>By: Vancouver Island University</div>
                <div>January 14, 2020</div>
              </CardFooter>
            </Card>
          </Col>
        </Row>
        <Row className="row">
          <Col>
            <Card id="blog-card" className="blog-item">
              <iframe
                className="video"
                src="https://www.youtube.com/embed/E_nMwG6215s"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <div align="center">
                <CardHeader>
                  <a href="https://www.youtube.com/embed/E_nMwG6215s">
                    5 Myths About Scholarships [VIDEO]
                  </a>
                </CardHeader>
              </div>
              <CardBody>
                <p>
                  There's a lot of misinformation out there about scholarship
                  deadlines and eligibility, so we've made a short video to bust
                  the 5 biggest scholarship myths.
                </p>
              </CardBody>
              <CardFooter className="blog-footer">
                <div>By: Scholarships Canada</div>
                <div>February 05, 2020</div>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
