import { Col, Row } from "antd";
import React from "react";

export const actor = [
  {
    src: "Sources/images/actor/1.png",
    name: "Anil Kapoor",
  },
  {
    src: "Sources/images/actor/2.png",
    name: "Riteish Deshmukh",
  },
  {
    src: "Sources/images/actor/3.png",
    name: "Jimmy Shergill",
  },
  {
    src: "Sources/images/actor/4.png",
    name: "Irrfan Khan",
  },
  {
    src: "Sources/images/actor/5.png",
    name: "A. R. Rahman",
  },
  {
    src: "Sources/images/actor/6.png",
    name: "Vidhu Vinod Chopra",
  },
  {
    src: "Sources/images/actor/7.png",
    name: "Anil Kapoor",
  },
  {
    src: "Sources/images/actor/8.png",
    name: "Arjun Rampal",
  },
];

const Awards = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="sectional_heading">
            <p className="is-size-3 heading_style has-text-centered mb-4">
              Movies
            </p>
          </div>
          <div className="collection_wrapper">
            <Row>
              <Col xxl={12} lg={12} md={24} sm={24} xs={24}>
                <div
                  className="collection_img2"
                  style={{ width: "100%", height: "100%" }}
                >
                  <img
                    src="Sources/images/movie2.png"
                    alt="404 - Not Given"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </Col>
              <Col xxl={12} lg={12} md={24} sm={24} xs={24}>
                <div
                  className="collection_img1"
                  style={{ width: "100%", height: "100%" }}
                >
                  <img
                    src="Sources/images/movie1.png"
                    alt="404 - Not Given"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </Col>
            </Row>
            {/* <div className="collection">
              <div className="collection_content">
                <h6 className="is-size-5">Charismatic</h6>
                <h3
                  className="is-size-1 green_color"
                  style={{ lineHeight: "1" }}
                >
                  Movie
                </h3>
                <p className="pt-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
              <div className="collection_img">
                <img
                  src="Sources/images/movie1.png"
                  alt="404 - Not Given"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            <div className="collection2">
              <div className="collection_img2">
                <img
                  src="Sources/images/movie2.png"
                  alt="404 -Not Given"
                  style={{ width: "100%" }}
                />
              </div>
              <div className="collection_content2">
                <h6 className="is-size-5">Charismatic</h6>
                <h3
                  className="is-size-1 green_color"
                  style={{ lineHeight: "1" }}
                >
                  Movie
                </h3>
                <p className="pt-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div> */}
          </div>
        </div>
        <div className="section_padding"></div>
      </section>

      <section className="volunteer_card">
        <div className="section_padding"></div>
        <div className="container">
          <div className="sectional_heading">
            <p className="is-size-3 heading_style has-text-centered mb-4">
              Actor
            </p>
          </div>
          <div className="mt-5">
            <Row>
              {actor.map((item, key) => {
                return (
                  <Col
                    xxl={6}
                    md={12}
                    lg={6}
                    sm={24}
                    xs={24}
                    className="volunteer px-3"
                  >
                    <div className="">
                      <div className="image_wrapper">
                        <img
                          src={item.src}
                          alt="404 - Not Given"
                          className="volunteer_img"
                        />
                      </div>
                      <div className="volunteer-info bgbrown_color">
                        <div className="volunteer-more has-text-white">
                          <h3 className="mb-0 mt-0 has-text-white">
                            {item.name}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </div>
        </div>
        <div className="section_padding"></div>
      </section>
    </>
  );
};

export default Awards;
