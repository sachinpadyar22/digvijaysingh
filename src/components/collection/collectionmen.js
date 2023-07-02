import { Col, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const Collectionmen = () => {
  const menCollection = [
    {
      src: "Sources/images/mencollection/1.png",
      productType: "clothes",
      productName: "Pillow",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Vero, possimus nostrum!",
      productPricePrev: "$92.00",
      productPrice: "$392.00",
    },
    {
      src: "Sources/images/mencollection/2.png",
      productType: "clothes",
      productName: "Pillow",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
      productPricePrev: "$92.00",
      productPrice: "392.00",
    },
    {
      src: "Sources/images/mencollection/3.png",
      productType: "clothes",
      productName: "Pillow",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
      productPricePrev: "$92.00",
      productPrice: "392.00",
    },
    {
      src: "Sources/images/mencollection/4.png",
      productType: "clothes",
      productName: "Pillow",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
      productPricePrev: "$92.00",
      productPrice: "392.00",
    },
    {
      src: "Sources/images/mencollection/5.png",
      productType: "clothes",
      productName: "Pillow",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
      productPricePrev: "$92.00",
      productPrice: "392.00",
    },
    {
      src: "Sources/images/mencollection/6.png",
      productType: "clothes",
      productName: "Pillow",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
      productPricePrev: "$92.00",
      productPrice: "392.00",
    },
    {
      src: "Sources/images/mencollection/7.png",
      productType: "clothes",
      productName: "Pillow",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
      productPricePrev: "$92.00",
      productPrice: "392.00",
    },
  ];

  return (
    <>
      <section>
        <div className="container">
          <p className="is-size-3 heading_style has-text-centered mb-4">
            Men's Collection
          </p>
          <Row>
            {menCollection.map((item, key) => {
              return (
                <Col xxl={8} lg={8} md={12} sm={24} xs={24}>
                  <div className="product-card">
                    <div class="badge">New</div>
                    <div className="product-tumb">
                      <img src={item.src} alt="" />
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

export default Collectionmen;
