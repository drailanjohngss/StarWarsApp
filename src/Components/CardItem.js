import React from "react";
import { Card, Row, Col } from "antd";

export default function CardItem({ title, crawl, director, released }) {
  return (
    <Card hoverable style={{ width: "100%", margin: 20 }}>
      <Row>
        <Col md={12}>
          <h4>{title}</h4>
          <p className="subtitle">
            Directed by: <i>{director}</i>
          </p>
        </Col>
        <Col md={12}>
          <p className="subtitle--date">
            Released Date: <i>{released}</i>
          </p>
        </Col>
      </Row>
      <Row>
        <p>{crawl}</p>
      </Row>
    </Card>
  );
}
