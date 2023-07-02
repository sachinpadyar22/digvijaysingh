import { Button, Col, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { url } from "../../constants/navhome";

const Colletion = () => {
  return (
    <>
      <section className="our_collection">
        <div className="container-fluid">
          <Row>
            <Col xxl={12} lg={12} md={24} sm={24} xs={24}>
              <div className="p-5">
                <div className="women_wrapper">
                  <img
                    src="Sources/images/women.png"
                    alt="404 - Not Given"
                    style={{ width: "100%" }}
                    className="women_img"
                  />
                  <div>
                    <p className="shop_women">WOMEN</p>
                    <div className="view_button">
                      <Button
                        type="primary"
                        className="view_collection has-text-weight-semibold"
                        size="large"
                      >
                        <Link to={url.collectionwomen}> View Collection</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col xxl={12} lg={12} md={24} sm={24} xs={24}>
              <div className="p-5">
                <div className="women_wrapper">
                  <img
                    src="Sources/images/men.png"
                    alt="404 - Not Given"
                    style={{ width: "100%" }}
                    className="women_img"
                  />
                  <div>
                    <p className="shop_women">MEN</p>
                    <div className="view_button">
                      <Button
                        type="primary"
                        size="large"
                        className="view_collection"
                      >
                        <Link to={url.collectionmen}>View Collection</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default Colletion;
