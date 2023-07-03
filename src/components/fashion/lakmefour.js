import React from "react";
import { Row, Col } from "antd";
const fashionimages = [

    {
        src: "/Sources/images/event/lakmefour/1.JPG",
    },
   
    {
        src: "/Sources/images/event/lakmefour/3.JPG",
    },
    {
        src: "/Sources/images/event/lakmefour/4.JPG",
    },
    {
        src: "/Sources/images/event/lakmefour/6.JPG",
    },
    {
        src: "/Sources/images/event/lakmefour/5.JPG",
    },
   
    {
        src: "/Sources/images/event/lakmefour/2.JPG",
    },
    
];
const Lakmefour = () => {
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
export default Lakmefour;