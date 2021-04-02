import React from "react";
import { Col, Row } from "react-bootstrap";
import DescriptionSection from "./descriptionSection";
import ImageSection from "./imageSection";

const Content = () => {
  return (
    <div>
      <Row>
        <Col sm={12} md={6}>
          <ImageSection />
        </Col>
        <Col sm={12} md={6}>
          <DescriptionSection />
        </Col>
      </Row>
    </div>
  );
};

export default Content;
