import React from "react";
import { Space } from "antd";
import { Link } from "react-router-dom";
// const fashionimages = [

//   {
//     src: "/Sources/images/fashionimg/2.JPG",
//   },
//   {
//     src: "./Sources/images/fashionimg/3.JPG",
//   },
//   {
//     src: "./Sources/images/fashionimg/4.JPG",
//   },
//   {
//     src: "./Sources/images/fashionimg/5.JPG",
//   },
//   {
//     src: "./Sources/images/fashionimg/6.JPG",
//   },
//   {
//     src: "./Sources/images/fashionimg/7.JPG",
//   },
//   {
//     src: "./Sources/images/fashionimg/8.JPG",
//   },
//   {
//     src: "./Sources/images/fashionimg/9.JPG",
//   },

//   {
//     src: "./Sources/images/fashionimg/11.JPG",
//   },
//   {
//     src: "./Sources/images/fashionimg/12.JPG",
//   },
//   {
//     src: "./Sources/images/fashionimg/13.JPG",
//   },
//   {
//     src: "./Sources/images/fashionimg/14.JPG",
//   },
//   {
//     src: "./Sources/images/fashionimg/15.JPG",
//   },
//   {
//     src: "./Sources/images/fashionimg/16.JPG",
//   },
//   {
//     src: "./Sources/images/fashionimg/17.JPG",
//   },
//   {
//     src: "./Sources/images/fashionimg/18.JPG",
//   },
//   {
//     src: "./Sources/images/fashionimg/19.JPG",
//   },
//   {
//     src: "./Sources/images/fashionimg/20.JPG",
//   },
//   {
//     src: "./Sources/images/fashionimg/21.JPG",
//   },
//   {
//     src: "./Sources/images/fashionimg/22.JPG",
//   },
//   {
//     src: "./Sources/images/fashionimg/23.JPG",
//   },
//   {
//     src: "./Sources/images/fashionimg/24.JPG",
//   },

//   {
//     src: "./Sources/images/fashionimg/1.JPG",
//   },
//   {
//     src: "./Sources/images/fashionimg/10.JPG",
//   },
//   {
//     src: "../Sources/images/fashionimg/25.JPG",
//   },

// ];

const Fashion = () => {
  return (
    <>
      <section className="fashion">
        <div className="container">
          <div className="section_padding"></div>
          {/* <div className="sectional_heading">
            <p className="is-size-3 heading_style has-text-centered mb-4">
              Fashion Weeks
            </p>
          </div> */}
          <div class="nine">
            <h1>Fashion Weeks<span>Lakme</span></h1>
          </div>
          <div className="about_para">
            <p className="pt-5 pb-5 mb-5">
              Digvijay Singh selected as a Gen Next Designer in 2007 at the
              Lakme fashion week and a finalist at the young entrepreneur of the
              year by the British Council and Elle magazine Digvijay Singh was
              featured as one of the 10 most promising designers by Vogue India.
              In 2012 he was nominated for the best costume designer for the
              movie (Saheb Biwi Aur Gangster ) at Producer's guilt Apsara
              awards.
            </p>
          </div>
          {/* <div className="images">
            <Row>
              {fashionimages.map((item, key) => {
                return (
                    <Col xxl={4} lg={4} md={6} sm={12} xs={12}>
                  <div className="fashionimg">
                    <img src={item.src} alt="404 - not Found" style={{padding:"10px"}} />
                  </div>
                  </Col>
                );
              })}
            </Row>
          </div> */}
        </div>
        <div className="container">
          <div className="sectional_heading">
            <p className="is-size-3  has-text-centered mb-4">
              Events
            </p>
          </div>
        </div>
        {/* <div className="container is-fluid timeline_wrapper"> */}
        <div className="timeline_wrapper">
          <div className="timeline-block timeline-block-left" >
            <div className="marker"></div>
            <div>
              <div className="space-align-container">
                <div className="space-align-block">
                  <Space
                    align="center"
                    direction="horizontal"
                    className="mile_box"
                  >
                    <div>
                      <p className="is-size-5">2006</p>
                      <p className="is-size-4  ">
                        <Link to="/lakmeone" className="green_color">Lakme Fashion Week</Link>
                      </p>
                      {/* <p className="is-size-6">(-)</p> */}
                      <div className="mt-3">
                        <img style={{ width: "150px" }}
                          src="Sources/images/event/1-1.JPG"
                          alt="404 - Not Given"
                        />
                      </div>
                      {/* <div>
                        <p className="is-size-5 blue_color has-text-weight-semibold">
                          9,00,000 sqft
                        </p>
                        <p className="is-size-6 has-text-black">
                          Largest Built-up Residential project
                        </p>
                      </div> */}
                    </div>
                  </Space>
                </div>
              </div>
            </div>
          </div>
          <div className="timeline-block timeline-block-right">
            <div className="marker"></div>
            <div>
              <div className="space-align-container">
                <div className="space-align-block">
                  <Space
                    align="center"
                    direction="horizontal"
                    className="mile_box"
                  >
                    <div>
                      <p className="is-size-5">2007</p>
                      <p className="is-size-4 ">
                      <Link to="/lakmetwo" className="green_color">Lakme Fashion Week</Link>
                      </p>
                      {/* <p className="is-size-6">(-)</p> */}
                      <div className="mt-3">
                        <img style={{ width: "150px" }}
                          src="Sources/images/event/1-2.JPG"
                          alt="404 - Not Given"
                        />
                      </div>
                      {/* <div>
                        <p className="is-size-5 blue_color has-text-weight-semibold">
                          9,00,000 sqft
                        </p>
                        <p className="is-size-6 has-text-black">
                          Largest Built-up Residential project
                        </p>
                      </div> */}
                    </div>
                  </Space>
                </div>
              </div>
            </div>
          </div>
          <div className="timeline-block timeline-block-left">
            <div className="marker"></div>
            <div>
              <div className="space-align-container">
                <div className="space-align-block">
                  <Space
                    align="center"
                    direction="horizontal"
                    className="mile_box"
                  >
                    <div>
                      <p className="is-size-5">2014</p>
                      <p className="is-size-4  ">
                      <Link to="/lakmethree" className="green_color">Lakme Fashion Week</Link>
                      </p>
                      {/* <p className="is-size-6">(-)</p> */}
                      <div className="mt-3">
                        <img style={{ width: "150px" }}
                          src="Sources/images/event/1-3.JPG"
                          alt="404 - Not Given"
                        />
                      </div>
                      {/* <div>
                        <p className="is-size-5 blue_color has-text-weight-semibold">
                          9,00,000 sqft
                        </p>
                        <p className="is-size-6 has-text-black">
                          Largest Built-up Residential project
                        </p>
                      </div> */}
                    </div>
                  </Space>
                </div>
              </div>
            </div>
          </div>
          <div className="timeline-block timeline-block-right">
            <div className="marker"></div>
            <div>
              <div className="space-align-container">
                <div className="space-align-block">
                  <Space
                    align="center"
                    direction="horizontal"
                    className="mile_box"
                  >
                    <div>
                      {/* <p className="is-size-5">--</p> */}
                      <p className="is-size-4 ">
                      <Link to="/lakmefour" className="green_color">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Goa Fashion&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
                      </p>
                      {/* <p className="is-size-6">(Goa)</p> */}
                      <div className="mt-3">
                        <img style={{ width: "150px" }}
                          src="Sources/images/event/1-5.JPG"
                          alt="404 - Not Given"
                        />
                      </div>
                      {/* <div>
                        <p className="is-size-5 blue_color has-text-weight-semibold">
                          9,00,000 sqft
                        </p>
                        <p className="is-size-6 has-text-black">
                          Largest Built-up Residential project
                        </p>
                      </div> */}
                    </div>
                  </Space>
                </div>
              </div>
            </div>
          </div>
          <div className="timeline-block timeline-block-left">
            <div className="marker"></div>
            <div>
              <div className="space-align-container">
                <div className="space-align-block">
                  <Space
                    align="center"
                    direction="horizontal"
                    className="mile_box"
                  >
                    <div>
                      {/* <p className="is-size-5">--</p> */}
                      <p className="is-size-4 ">
                      <Link to="/lakmefive" className="green_color">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kochi Fashion&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
                      </p>
                      {/* <p className="is-size-6">(kochi)</p> */}
                      <div className="mt-3">
                        <img style={{ width: "150px" }}
                          src="Sources/images/event/1-6.JPG"
                          alt="404 - Not Given"
                        />
                      </div>
                      {/* <div>
                        <p className="is-size-5 blue_color has-text-weight-semibold">
                          9,00,000 sqft
                        </p>
                        <p className="is-size-6 has-text-black">
                          Largest Built-up Residential project
                        </p>
                      </div> */}
                    </div>
                  </Space>
                </div>
              </div>
            </div>
          </div>
          <div className="timeline-block timeline-block-right">
            <div className="marker"></div>
            <div>
              <div className="space-align-container">
                <div className="space-align-block">
                  <Space
                    align="center"
                    direction="horizontal"
                    className="mile_box"
                  >
                    <div>
                      {/* <p className="is-size-5">--</p> */}
                      <p className="is-size-4 ">
                      <Link to="/lakmesix" className="green_color">&nbsp;&nbsp;&nbsp;Banglore Fashion&nbsp;&nbsp;&nbsp;</Link>
                      </p>
                      {/* <p className="is-size-6">(kochi)</p> */}
                      <div className="mt-3">
                        <img style={{ width: "150px" }}
                          src="Sources/images/event/1-6.JPG"
                          alt="404 - Not Given"
                        />
                      </div>
                      {/* <div>
                        <p className="is-size-5 blue_color has-text-weight-semibold">
                          9,00,000 sqft
                        </p>
                        <p className="is-size-6 has-text-black">
                          Largest Built-up Residential project
                        </p>
                      </div> */}
                    </div>
                  </Space>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default Fashion;
