import React from "react";
import { Row, Col } from "antd";
const fashionimages = [

    {
        src: "/Sources/images/event/lakmethree/1.JPG",
    },
    {
        src: "/Sources/images/event/lakmethree/2.JPG",
    },
    {
        src: "/Sources/images/event/lakmethree/3.JPG",
    },
    {
        src: "/Sources/images/event/lakmethree/4.JPG",
    },
    
    
];
const Lakmethree = () => {
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
export default Lakmethree;