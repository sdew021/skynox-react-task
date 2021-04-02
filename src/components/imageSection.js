import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import IconButton from "@material-ui/core/IconButton";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const images = [
  "https://image.freepik.com/free-psd/empty-wall-with-elegant-sofa_176382-1276.jpg",
  "https://image.freepik.com/free-psd/interior-living-room-wall-mockup_354781-4.jpg",
  "https://image.freepik.com/free-vector/cozy-modern-living-room-with-flat-design_23-2147918313.jpg",
  "https://image.freepik.com/free-vector/modern-home-interior-decoration-with-flat-design_23-2147902223.jpg",
  "https://image.freepik.com/free-vector/modern-home-interior-decoration-with-flat-design_23-2147906292.jpg",
];

const ImageSection = () => {
  const [mainImg, setMainImg] = useState(0);
  return (
    <div className="image-section">
      <div className="prev">
        <IconButton onClick={() => setMainImg((mainImg + 4) % 5)}>
          <IoIosArrowBack style={{ fontSize: "1rem" }} />
        </IconButton>
      </div>
      <div className="next">
        <IconButton onClick={() => setMainImg((mainImg + 4) % 5)}>
          <IoIosArrowForward style={{ fontSize: "1rem" }} />
        </IconButton>
      </div>
      <div style={{ width: "100%", height: "0", paddingBottom: "100%" }}>
        <img className="main-image" src={images[mainImg]} alt="x" />
      </div>
      <Container>
        <Row>
          <Col>
            <img
              className="btm-img"
              src={images[0]}
              alt=""
              onClick={() => setMainImg(0)}
            />
          </Col>
          <Col className="col-half-offset">
            <img
              className="btm-img"
              src={images[1]}
              alt=""
              onClick={() => setMainImg(1)}
            />
          </Col>
          <Col className="col-half-offset">
            <img
              className="btm-img"
              src={images[2]}
              alt=""
              onClick={() => setMainImg(2)}
            />
          </Col>
          <Col className="col-half-offset">
            <img
              className="btm-img"
              src={images[3]}
              alt=""
              onClick={() => setMainImg(3)}
            />
          </Col>
          <Col className="col-half-offset">
            <img
              className="btm-img"
              src={images[4]}
              alt=""
              onClick={() => setMainImg(4)}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ImageSection;
