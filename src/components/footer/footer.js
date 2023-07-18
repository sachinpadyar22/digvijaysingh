import React, { useEffect, useState } from "react";
import { Col, Row } from "antd";
import { MdArrowForwardIos, MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
import { url } from "../../constants/navhome";
import { FaPinterestP } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { Layout } from "antd";
import { ImageList, ImageListItem } from "@mui/material";

const { Footer: AntFooter } = Layout;

export const browseGallery = [
  {
    src: "Sources/images/browsegallery/1.png",
    hreflink: "https://www.instagram.com/p/CiPxJRIsC9l/",
  },
  {
    src: "Sources/images/browsegallery/2.png",
    hreflink: "https://www.instagram.com/p/CiPxPvdMu2-/",
  },
  {
    src: "Sources/images/browsegallery/3.png",
    hreflink: "https://www.instagram.com/p/CihxH9aM2kK/",
  },
  {
    src: "Sources/images/browsegallery/4.png",
    hreflink: "https://www.instagram.com/p/ChXDpnBM8tU/",
  },
  {
    src: "Sources/images/browsegallery/5.png",
    hreflink: "https://www.instagram.com/p/CiPtUoDMMiW/",
  },
  {
    src: "Sources/images/browsegallery/6.png",
    hreflink: "https://www.instagram.com/p/CiPxOIhMyxb/",
  },
];

const Footer = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);

  let cols = 6;
  if (width < 600) {
    cols = 2;
  } else if (width < 1200) {
    cols = 3;
  }
  return (
    <>
      {/* <section className="instagram_img" style={{ margin: "0" }}>
        <div className="section_padding"></div>
        {width > 1023 && (
          <div className="container is-fluid">
            <div className="sectional_heading">
              <p className="is-size-3 heading_style has-text-centered mb-4">
                Instagram
              </p>
            </div>
            <ImageList cols={cols} className="Py-4">
              {browseGallery.map((item, key) => {
                return (
                  <ImageListItem>
                    <a href={item.hreflink} target="_blank">
                      <img
                        src={item.src}
                        className="browse_galleryimg"
                        alt="404 - Not Given"
                      />
                    </a>
                  </ImageListItem>
                );
              })}
            </ImageList>
          </div>
        )}
        {width < 1024 && (
          <div className="container">
            <div className="sectional_heading">
              <p className="is-size-3 heading_style has-text-centered mb-4">
                Instagram
              </p>
            </div>
            <ImageList cols={cols} className="Py-4">
              {browseGallery.map((item, key) => {
                return (
                  <ImageListItem>
                    <a href={item.hreflink} target="_blank">
                      <img
                        src={item.src}
                        className="browse_galleryimg"
                        alt="404 - Not Given"
                      />
                    </a>
                  </ImageListItem>
                );
              })}
            </ImageList>
          </div>
        )}
      </section> */}
      <AntFooter
        className="main_footer mobile_margin"
        // style={{ padding: "4rem 0" }}
      >
        <div className="container">
          <Row>
            <Col xxl={8} lg={8} md={12} sm={24} xs={24}>
              <div className="first_col">
                <img
                  src="Sources/images/footer_logo.png"
                  alt="404 -Not Given"
                  className="pb-2"
                />
                {/* <h3 className="green_color pb-4 mt-3">ABOUT US</h3> */}
                <p className="foot_text has-text-left">
                  Welcome to the official website of celebrated designer
                  Digvijay Singh.
                </p>
              </div>
            </Col>
            <Col xxl={4} lg={4} md={0} sm={24} xs={24}></Col>
            <Col
              xxl={12}
              lg={12}
              md={12}
              sm={24}
              xs={24}
              className="address my-auto"
            >
              <div className="forth_col">
                {/* <h3 className="has-text-grey-lighter pb-4 mt-3">Address:</h3> */}
                <p className="footer_link">
                  109, Shivalik Shilp II,
                  <br /> Opposite ITC Narmada,
                  <br /> Keshavbaug,
                  <br /> Ahmedabad, India.
                </p>
                <div>
                 
                  <a href="https://www.facebook.com/digvijay.singh.digi?mibextid=ZbWKwL" className="pl-4 has-text-grey-lighter" target="_digvijay">
                    <BsFacebook className="is-size-4" />
                  </a>
                  <a
                    href="https://www.instagram.com/digvijaysingh_artwear/?igshid=YzcxN2Q2NzY0OA%3D%3D" target="_digvijay"
                    className="pl-4 has-text-grey-lighter"
                  >
                    <BsInstagram className="is-size-4" />
                  </a>
                  <a href="https://wa.me/9925277862" className="pl-4 has-text-grey-lighter" target="_digvijay">
                    <BsWhatsapp className="is-size-4" />
                  </a>
                </div>
              </div>
            </Col>
            {/* <Col xxl={8} lg={8} md={8} sm={24} xs={24}>
              <div className="second_col">
                <h3 className="has-text-grey-lighter pb-4 mt-3">
                  USEFUL&nbsp;LINKS
                </h3>
                <div>
                  <ul>
                    <li className="footer_link">
                      <Link to={url.aboutus} className="has-text-grey-lighter">
                        <MdArrowForwardIos className="arrow_icon has-text-grey-lighter" />
                        <span className="pl-2">About Us</span>
                      </Link>
                    </li>
                    <li className="footer_link">
                      <Link to={url.events} className="has-text-grey-lighter">
                        <MdArrowForwardIos className="arrow_icon has-text-grey-lighter" />
                        <span className="pl-2">Events</span>
                      </Link>
                    </li>
                    <li className="footer_link">
                      <Link to={url.awards} className="has-text-grey-lighter">
                        <MdArrowForwardIos className="arrow_icon has-text-grey-lighter" />
                        <span className="pl-2">Awards</span>
                      </Link>
                    </li>
                    <li className="footer_link">
                      <Link to={url.shop} className="has-text-grey-lighter">
                        <MdArrowForwardIos className="arrow_icon has-text-grey-lighter" />
                        <span className="pl-2">Shop</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col> */}
            {/* <Col xxl={6} lg={8} md={12} sm={24} xs={24}>
              <div className="third_col">
                <h3 className="has-text-grey-lighter pb-4 mt-3">Collection</h3>
                <ul>
                  <li className="footer_link">
                    <Link to={url.aboutus} className="has-text-grey-lighter">
                      <MdArrowForwardIos className="arrow_icon has-text-grey-lighter" />
                      <span className="pl-2">Women Collection</span>
                    </Link>
                  </li>
                  <li className="footer_link">
                    <Link to={url.Services} className="has-text-grey-lighter">
                      <MdArrowForwardIos className="arrow_icon has-text-grey-lighter" />
                      <span className="pl-2">Men Collection</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </Col> */}
          </Row>
        </div>
      </AntFooter>
      <hr />
      <section
        className="lower_foot"
        style={{ background: "#1a1a1a", margin: "0" }}
      >
        <div className="lower_footer bggreen_color">
          <div className="container">
            <p className="has-text-white lower_text has-text-centered">
              @2022&nbsp;
              <a
                href="https://outleadsolutions.com/"
                className="has-text-white"
                target="blank"
              >
                Outlead solution.&nbsp;
              </a>
              All rights reserved
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default Footer;
