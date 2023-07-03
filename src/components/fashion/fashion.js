import React from "react";
import {Col,Row} from "antd";
const fashionimages = [

  {
    src: "/Sources/images/fashionimg/2.JPG",
  },
  {
    src: "./Sources/images/fashionimg/3.jpg",
  },
  {
    src: "./Sources/images/fashionimg/4.jpg",
  },
  {
    src: "./Sources/images/fashionimg/5.jpg",
  },
  {
    src: "./Sources/images/fashionimg/6.jpg",
  },
  {
    src: "./Sources/images/fashionimg/7.jpg",
  },
  {
    src: "./Sources/images/fashionimg/8.jpg",
  },
  {
    src: "./Sources/images/fashionimg/9.jpg",
  },

  {
    src: "./Sources/images/fashionimg/11.jpg",
  },
  {
    src: "./Sources/images/fashionimg/12.jpg",
  },
  {
    src: "./Sources/images/fashionimg/13.jpg",
  },
  {
    src: "./Sources/images/fashionimg/14.jpg",
  },
  {
    src: "./Sources/images/fashionimg/15.jpg",
  },
  {
    src: "./Sources/images/fashionimg/16.jpg",
  },
  {
    src: "./Sources/images/fashionimg/17.jpg",
  },
  {
    src: "./Sources/images/fashionimg/18.jpg",
  },
  {
    src: "./Sources/images/fashionimg/19.jpg",
  },
  {
    src: "./Sources/images/fashionimg/20.jpg",
  },
  {
    src: "./Sources/images/fashionimg/21.jpg",
  },
  {
    src: "./Sources/images/fashionimg/22.jpg",
  },
  {
    src: "./Sources/images/fashionimg/23.jpg",
  },
  {
    src: "./Sources/images/fashionimg/24.jpg",
  },
 
  {
    src: "./Sources/images/fashionimg/1.jpg",
  },
  {
    src: "./Sources/images/fashionimg/10.jpg",
  },
  {
    src: "../Sources/images/fashionimg/25.jpg",
  },
  
];

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
            <h1>FASHION WEEKS<span>Lakme</span></h1>
          </div>
          <div>
            <p className="has-text-centered pt-5 pb-5 mb-5">
              Digvijay Singh selected as a Gen Next Designer in 2007 at the
              Lakme fashion week and a finalist at the young entrepreneur of the
              year by the British Council and Elle magazine Digvijay Singh was
              featured as one of the 10 most promising designers by Vogue India.
              In 2012 he was nominated for the best costume designer for the
              movie (Saheb Biwi Aur Gangster ) at Producer's guilt Apsara
              awards.
            </p>
          </div>
          <div className="images">
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Fashion;
