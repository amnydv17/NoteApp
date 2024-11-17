import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <footer className="bg-green-600 text-white py-4 w-full overflow-hidden h-[80px] pl-24 border-t-4 border-black">
      <Container fluid>
        <Row className="pt-1.5">
          <Col md="4" className="footer-copywright mb-4 md:mb-0">
            <h3 className="text-lg font-bold">Designed and Developed by Aman Yadav</h3>
          </Col>

          <Col md="4" className="footer-copywright mb-4 md:mb-0 pl-10">
            <h3 className="text-lg font-semibold">Copyright © {year} AY</h3>
          </Col>

          <Col md="4" className="footer-body">
            <ul className="footer-icons flex justify-center gap-4">
              <li className="social-icons">
                <a
                  href="https://github.com/amnydv17"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl hover:text-gray-400 transition-all"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/the_amn_ydv"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl hover:text-gray-400 transition-all"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/amnyad05/"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl hover:text-gray-400 transition-all"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/the_amn_ydv"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl hover:text-gray-400 transition-all"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
