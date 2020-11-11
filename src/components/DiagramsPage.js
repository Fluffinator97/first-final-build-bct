import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "bootstrap/dist/css/bootstrap.min.css";

import DoubleCircleDiagram from "./Diagrams/DoubleCircleDiagram";

function DiagramsPage() {
  return (
    <Container  className="justify-content-md-center">
      <Row>
    <Col></Col>
        <Col>
        <h1>KPI Name</h1>
        </Col>
        <Col></Col>
      </Row>
      <Row lg={{ cols: 3 }} md={{ span: 10 }}>
      <Col>
      <div className={"red"}>
            <p>
              My money's in that office, right? If she start giving me some
              bullshit about it ain't there, and we got to go someplace else and
              get it, I'm gonna shoot you in the head then and there. Then I'm
              gonna shoot that bitch in the kneecaps, find out where my goddamn
              money is. She gonna tell me too. Hey, look at me when I'm talking
              to you, motherfucker. You listen: we go in there, and that man
              Winston or anybody else is in there, you the first motherfucker to
              get shot. You understand?{" "}
            </p>

            <p>
              You think water moves fast? You should see ice. It moves like it
              has a mind. Like it knows it killed the world once and got a taste
              for murder. After the avalanche, it took us a week to climb out.
              Now, I don't know exactly when we turned on each other, but I know
              that seven of us survived the slide... and only five made it out.
              Now we took an oath, that I'm breaking now. We said we'd say it
              was the snow that killed the other two, but it wasn't. Nature is
              lethal but it doesn't hold a candle to man.{" "}
            </p>
          </div>
      </Col>
        <Col lg={{ }}>
          <DoubleCircleDiagram />
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col>
          <div className={"red"}>
            <p>
              My money's in that office, right? If she start giving me some
              bullshit about it ain't there, and we got to go someplace else and
              get it, I'm gonna shoot you in the head then and there. Then I'm
              gonna shoot that bitch in the kneecaps, find out where my goddamn
              money is. She gonna tell me too. Hey, look at me when I'm talking
              to you, motherfucker. You listen: we go in there, and that nigga
              Winston or anybody else is in there, you the first motherfucker to
              get shot. You understand?{" "}
            </p>

            <p>
              You think water moves fast? You should see ice. It moves like it
              has a mind. Like it knows it killed the world once and got a taste
              for murder. After the avalanche, it took us a week to climb out.
              Now, I don't know exactly when we turned on each other, but I know
              that seven of us survived the slide... and only five made it out.
              Now we took an oath, that I'm breaking now. We said we'd say it
              was the snow that killed the other two, but it wasn't. Nature is
              lethal but it doesn't hold a candle to man.{" "}
            </p>
          </div>
        </Col>
        <Col>
          <div className={"green"}>
            <p>
              My money's in that office, right? If she start giving me some
              bullshit about it ain't there, and we got to go someplace else and
              get it, I'm gonna shoot you in the head then and there. Then I'm
              gonna shoot that bitch in the kneecaps, find out where my goddamn
              money is. She gonna tell me too. Hey, look at me when I'm talking
              to you, motherfucker. You listen: we go in there, and that nigga
              Winston or anybody else is in there, you the first motherfucker to
              get shot. You understand?{" "}
            </p>
            <p>
              You think water moves fast? You should see ice. It moves like it
              has a mind. Like it knows it killed the world once and got a taste
              for murder. After the avalanche, it took us a week to climb out.
              Now, I don't know exactly when we turned on each other, but I know
              that seven of us survived the slide... and only five made it out.
              Now we took an oath, that I'm breaking now. We said we'd say it
              was the snow that killed the other two, but it wasn't. Nature is
              lethal but it doesn't hold a candle to man.{" "}
            </p>
          </div>
        </Col>
        <Col>
          <div className={"orange"}>
            <p>
              My money's in that office, right? If she start giving me some
              bullshit about it ain't there, and we got to go someplace else and
              get it, I'm gonna shoot you in the head then and there. Then I'm
              gonna shoot that bitch in the kneecaps, find out where my goddamn
              money is. She gonna tell me too. Hey, look at me when I'm talking
              to you, motherfucker. You listen: we go in there, and that nigga
              Winston or anybody else is in there, you the first motherfucker to
              get shot. You understand?{" "}
            </p>
            <p>
              You think water moves fast? You should see ice. It moves like it
              has a mind. Like it knows it killed the world once and got a taste
              for murder. After the avalanche, it took us a week to climb out.
              Now, I don't know exactly when we turned on each other, but I know
              that seven of us survived the slide... and only five made it out.
              Now we took an oath, that I'm breaking now. We said we'd say it
              was the snow that killed the other two, but it wasn't. Nature is
              lethal but it doesn't hold a candle to man.{" "}
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default DiagramsPage;
