import React from "react";
import { Col, Row } from "react-bootstrap";
import FooterItem from "./footerItem";
import { RiWallet3Line } from "react-icons/ri";
import { GrDeliver } from "react-icons/gr";
import { BiPackage } from "react-icons/bi";

const Footer = () => {
  return (
    <footer>
      <Row>
        <Col sm={12} md={4}>
          <FooterItem
            icon={<RiWallet3Line />}
            title="Secure Payment"
            description="Don't worry your money is
            in secure places"
          />
        </Col>
        <Col xs={12} md={4}>
          <FooterItem
            icon={<GrDeliver />}
            title="Fast & free delivery "
            description="Home delivery $15, For free delivery order over $250"
          />
        </Col>
        <Col xs={12} md={4}>
          <FooterItem
            icon={<BiPackage />}
            title="Return policy "
            description="No hassle return policy"
          />
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
