import React from "react";
import { Row, Col } from "antd";
const fashionimages = [

    {
        src: "/Sources/images/fashionimg/2.JPG",
    },
    {
        src: "./Sources/images/fashionimg/3.JPG",
    },
    {
        src: "./Sources/images/fashionimg/4.JPG",
    },
    {
        src: "./Sources/images/fashionimg/5.JPG",
    },
    {
        src: "./Sources/images/fashionimg/6.JPG",
    },
    {
        src: "./Sources/images/fashionimg/7.JPG",
    },
    {
        src: "./Sources/images/fashionimg/8.JPG",
    },
    {
        src: "./Sources/images/fashionimg/9.JPG",
    },

    {
        src: "./Sources/images/fashionimg/11.JPG",
    },
    {
        src: "./Sources/images/fashionimg/12.JPG",
    },
    {
        src: "./Sources/images/fashionimg/13.JPG",
    },
    {
        src: "./Sources/images/fashionimg/14.JPG",
    },
    {
        src: "./Sources/images/fashionimg/15.JPG",
    },
    {
        src: "./Sources/images/fashionimg/16.JPG",
    },
    {
        src: "./Sources/images/fashionimg/17.JPG",
    },
    {
        src: "./Sources/images/fashionimg/18.JPG",
    },
    {
        src: "./Sources/images/fashionimg/19.JPG",
    },
    {
        src: "./Sources/images/fashionimg/20.JPG",
    },
    {
        src: "./Sources/images/fashionimg/21.JPG",
    },
    {
        src: "./Sources/images/fashionimg/22.JPG",
    },
    {
        src: "./Sources/images/fashionimg/23.JPG",
    },
    {
        src: "./Sources/images/fashionimg/24.JPG",
    },

    {
        src: "./Sources/images/fashionimg/1.JPG",
    },
    {
        src: "./Sources/images/fashionimg/10.JPG",
    },
    {
        src: "../Sources/images/fashionimg/25.JPG",
    },

];
const Lakmeone = () => {
    return (

        <>
            <section>
                <div class="nine">
                    <h1>FASHION WEEKS<span>autumn Winter Collection</span></h1>
                </div>
                <div className="images px-5">
                    <Row>
                        {fashionimages.map((item, key) => {
                            return (
                                <Col xxl={4} lg={4} md={6} sm={12} xs={12}>
                                    <div className="fashionimg">
                                        <img src={item.src} alt="404 - not Found" style={{ padding: "10px" }} />
                                    </div>
                                </Col>
                            );
                        })}
                    </Row>
                </div>
            </section>
        </>


    )
};
export default Lakmeone;