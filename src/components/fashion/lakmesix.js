import React from "react";
import { Row, Col } from "antd";
const fashionimages = [

    {
        src: "/Sources/images/event/lakmesix/1.jpg",
    },

    {
        src: "/Sources/images/event/lakmesix/2.jpg",
    },
    {
        src: "/Sources/images/event/lakmesix/3.jpg ",
    },
  
    {
        src: "/Sources/images/event/lakmesix/4.jpg",
    },

    {
        src: "/Sources/images/event/lakmesix/5.jpg",
    },
    {
        src: "/Sources/images/event/lakmesix/6.jpg ",
    },
    {
        src: "/Sources/images/event/lakmesix/7.jpg ",
    },
    {
        src: "/Sources/images/event/lakmesix/8.jpg ",
    },
    {
        src: "/Sources/images/event/lakmesix/9.jpg ",
    },
    {
        src: "/Sources/images/event/lakmesix/10.jpg ",
    },
    {
        src: "/Sources/images/event/lakmesix/11.jpg ",
    },
    {
        src: "/Sources/images/event/lakmesix/12.jpg ",
    },
   
  
];
const Lakmesix = () => {
    return (

        <>
            <section>
                <div class="nine">
                    <h1>FASHION WEEKS<span>Bengaluru Fashion</span></h1>
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