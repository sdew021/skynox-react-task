import React from "react";
import { GiRoundStar } from "react-icons/gi";
import { BiTimeFive } from "react-icons/bi";
import { Row, Col } from "react-bootstrap";

const DescriptionSection = () => {
  return (
    <div className="description">
      <h1 className="desc-title">Upholstered Sofa</h1>
      <h6 className="desc-sub">Kyara Upholstered Standard Bed</h6>
      <h6 className="desc-sub">by Zipcode Design</h6>
      <p className="desc-cont">
        Anchor your living room in sophisticated style and impeccable comfort
        with a single addition. Perfectly balanced wood accents with fabric
        upholstery.
      </p>
      <>
        <GiRoundStar style={{ color: "lightseagreen" }} />
        <GiRoundStar style={{ color: "lightseagreen" }} />
        <GiRoundStar style={{ color: "lightseagreen" }} />
        <GiRoundStar style={{ color: "lightseagreen" }} />
        <GiRoundStar style={{ color: "lightseagreen" }} />
      </>
      <p className="desc-rev">
        <span style={{ color: "lightseagreen" }}>(5.0) </span>
        review based on 250
      </p>
      <a
        href="/"
        style={{
          marginBottom: "0px",
          color: "black",
          textDecorationLine: "underline",
          textUnderlineOffset: "2px",
        }}
      >
        Submit Review
      </a>
      <h2 className="desc-price">$567</h2>
      <div style={{ display: "flex" }}>
        <span>
          <BiTimeFive />
        </span>
        <p className="desc-stat">Dispatched in 7 working days</p>
      </div>
      <div>
        <Row>
          <Col xs={6} md={5}>
            <button className="btn-cart"> ADD TO CART</button>
          </Col>
          <Col xs={6} md={5}>
            <button className="btn-wish"> ADD TO WISHLIST</button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default DescriptionSection;
