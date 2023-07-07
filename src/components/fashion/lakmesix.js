import React from "react";
import { Row, Col } from "antd";
const fashionimages = [

    {
        src: "/Sources/images/event/lakmesix/1.JPG",
    },

    {
        src: "/Sources/images/event/lakmesix/2.JPG",
    },
    {
        src: "/Sources/images/event/lakmesix/3.JPG ",
    },
  
    {
        src: "/Sources/images/event/lakmesix/4.JPG",
    },

    {
        src: "/Sources/images/event/lakmesix/5.JPG",
    },
    {
        src: "/Sources/images/event/lakmesix/6.JPG ",
    },
    {
        src: "/Sources/images/event/lakmesix/7.JPG ",
    },
    {
        src: "/Sources/images/event/lakmesix/8.JPG ",
    },
    {
        src: "/Sources/images/event/lakmesix/9.JPG ",
    },
    {
        src: "/Sources/images/event/lakmesix/10.JPG ",
    },
    {
        src: "/Sources/images/event/lakmesix/11.JPG ",
    },
    {
        src: "/Sources/images/event/lakmesix/12.JPG ",
    },
   
  
];
const Lakmesix = () => {
    return (

        <>
            <section>
                <div class="nine">
                    <h1>FASHION WEEKS<span>Collection</span></h1>
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
export default Lakmesix;