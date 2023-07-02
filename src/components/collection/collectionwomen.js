import { Menu, Col, Row } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Collectionwomen = () => {
  const [clothType, setClothType] = useState("traditional");

  //srcH is to change the image on hover
  const womenCollection = {
    traditional: [
      {
        src: "Sources/images/women_collection/1.png",
        srcH: "Sources/images/women_collection/1.png",
        productType: "traditional",
        productName: "lehenga",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Vero, possimus nostrum!",
        productPricePrev: "$92.00",
        productPrice: "$392.00",
      },
      {
        src: "Sources/images/women_collection/2.png",
        srcH: "Sources/images/women_collection/2.png",
        productType: "traditional",
        productName: "lehenga",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
        productPricePrev: "$92.00",
        productPrice: "392.00",
      },
      {
        src: "Sources/images/women_collection/3.png",
        srcH: "Sources/images/women_collection/3.png",
        productType: "traditional",
        productName: "lehenga",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
        productPricePrev: "$92.00",
        productPrice: "392.00",
      },
      {
        src: "Sources/images/women_collection/4.png",
        srcH: "Sources/images/women_collection/4.png",
        productType: "traditional",
        productName: "lehenga",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
        productPricePrev: "$92.00",
        productPrice: "392.00",
      },
    ],
    semiTraditional: [
      {
        src: "Sources/images/women_collection/5.png",
        srcH: "Sources/images/women_collection/5.png",
        productType: "semi-traditional",
        productName: "Kurti",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
        productPricePrev: "$92.00",
        productPrice: "392.00",
      },
      {
        src: "Sources/images/women_collection/6.png",
        srcH: "Sources/images/women_collection/6.png",
        productType: "semi-traditional",
        productName: "Kurti",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
        productPricePrev: "$92.00",
        productPrice: "392.00",
      },
      {
        src: "Sources/images/women_collection/7.png",
        srcH: "Sources/images/women_collection/7.png",

        productType: "semi-traditional",
        productName: "Kurti",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
        productPricePrev: "$92.00",
        productPrice: "392.00",
      },
      {
        src: "Sources/images/women_collection/8.png",
        srcH: "Sources/images/women_collection/8.png",
        productType: "semi-traditional",
        productName: "frock",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
        productPricePrev: "$92.00",
        productPrice: "392.00",
      },
      {
        src: "Sources/images/women_collection/9.png",
        srcH: "Sources/images/women_collection/9.png",
        productType: "contemprory",
        productName: "Contemporary",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
        productPricePrev: "$92.00",
        productPrice: "392.00",
      },
      {
        src: "Sources/images/women_collection/10.png",
        srcH: "Sources/images/women_collection/10.png",
        productType: "contemprory",
        productName: "Dress",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
        productPricePrev: "$92.00",
        productPrice: "392.00",
      },
      {
        src: "Sources/images/women_collection/11.png",
        srcH: "Sources/images/women_collection/11.png",
        productType: "contemprory",
        productName: "frock",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
        productPricePrev: "$92.00",
        productPrice: "392.00",
      },
    ],
    contemporary: [
      {
        src: "Sources/images/women_collection/12.JPG",
        srcH: "Sources/images/women_collection/12.1.JPG",
        productType: "contemporary",
        productName: "Shirt",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
        productPricePrev: "$92.00",
        productPrice: "392.00",
      },
      {
        src: "Sources/images/women_collection/13.JPG",
        srcH: "Sources/images/women_collection/13.1.JPG",
        productType: "contemporary",
        productName: "Jacket",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
        productPricePrev: "$92.00",
        productPrice: "392.00",
      },
      {
        src: "Sources/images/women_collection/14.JPG",
        srcH: "Sources/images/women_collection/14.1.JPG",
        productType: "contemporary",
        productName: "Jacket",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
        productPricePrev: "$92.00",
        productPrice: "392.00",
      },
      {
        src: "Sources/images/women_collection/15.JPG",
        srcH: "Sources/images/women_collection/15.1.JPG",
        productType: "contemporary",
        productName: "Jacket",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
        productPricePrev: "$92.00",
        productPrice: "392.00",
      },
      {
        src: "Sources/images/women_collection/16.JPG",
        srcH: "Sources/images/women_collection/16.1.JPG",
        productType: "contemporary",
        productName: "Shirt",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
        productPricePrev: "$92.00",
        productPrice: "392.00",
      },
      {
        src: "Sources/images/women_collection/17.JPG",
        srcH: "Sources/images/women_collection/17.1.JPG",
        productType: "contemporary ",
        productName: "One piece",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
        productPricePrev: "$92.00",
        productPrice: "392.00",
      },
      {
        src: "Sources/images/women_collection/18.JPG",
        srcH: "Sources/images/women_collection/18.1.JPG",
        productType: "contemporary ",
        productName: "One piece",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
        productPricePrev: "$92.00",
        productPrice: "392.00",
      },
    ],
  };

  return (
    <>
      <p className="is-size-3 heading_style has-text-centered mb-4">
        Women's Collection
      </p>
      <section>
        <div className="container">
          <Menu
            style={{
              width: 700,
            }}
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["traditional"]}
            mode="horizontal"
          >
            <Menu.Item
              className="menu-item"
              key="traditional"
              onClick={() => setClothType("traditional")}
            >
              <span>Traditional</span>
            </Menu.Item>
            <Menu.Item
              className="menu-item"
              key="semiTraditional"
              onClick={() => setClothType("semiTraditional")}
            >
              Semi Traditional
            </Menu.Item>
            <Menu.Item
              className="menu-item"
              key="contemporary"
              onClick={() => setClothType("contemporary")}
            >
              Contemporary
            </Menu.Item>
          </Menu>
          <Row>
            {womenCollection[clothType].map((item, key) => {
              return (
                <Col xxl={8} lg={8} md={12} sm={24} xs={24}>
                  <div className="product-card">
                    <div className="badge">New</div>
                    <div className="product-tumb">
                      <img
                        src={item.src}
                        onMouseOver={(e) => (e.currentTarget.src = item.srcH)}
                        onMouseLeave={(e) => (e.currentTarget.src = item.src)}
                        alt=""
                      />
                    </div>
                    <div className="product-details">
                      <span className="product-catagory">
                        {item.productType}
                      </span>
                      <h4>
                        <Link href="">{item.productName}</Link>
                      </h4>
                      <p>{item.desc}</p>
                      <div className="product-bottom-details">
                        <div className="product-price">
                          <small>{item.productPricePrev}</small>
                          {item.productPrice}
                        </div>
                        <div className="product-links">
                          <Link href="">
                            <i className="fa fa-heart"></i>
                          </Link>
                          <Link href="">
                            <i className="fa fa-shopping-cart"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </section>
    </>
  );
};

export default Collectionwomen;
