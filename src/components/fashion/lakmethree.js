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
        src: "/Sources/images/event/lakmethree/4.JPG",
    },
    {
        src: "/Sources/images/event/lakmethree/5.JPG",
    },
    
    {
        src: "/Sources/images/event/lakmethree/7.jpg",
    },
    
    {
        src: "/Sources/images/event/lakmethree/8.JPG",
    },
    
    {
        src: "/Sources/images/event/lakmethree/9.JPG",
    },
    
    {
        src: "/Sources/images/event/lakmethree/10.JPG",
    },
    
    {
        src: "/Sources/images/event/lakmethree/12.JPG",
    },
    
    {
        src: "/Sources/images/event/lakmethree/13.JPG",
    },
    
    {
        src: "/Sources/images/event/lakmethree/15.JPG",
    },
    
    {
        src: "/Sources/images/event/lakmethree/16.JPG",
    },
    
    {
        src: "/Sources/images/event/lakmethree/18.JPG",
    },
    
    {
        src: "/Sources/images/event/lakmethree/19.JPG",
    },
    
    {
        src: "/Sources/images/event/lakmethree/20.JPG",
    },
    
    {
        src: "/Sources/images/event/lakmethree/22.JPG",
    },
    {
        src: "/Sources/images/event/lakmethree/24.JPG",
    },
    {
        src: "/Sources/images/event/lakmethree/25.jpg",
    },
    {
        src: "/Sources/images/event/lakmethree/26.jpg",
    },
    {
        src: "/Sources/images/event/lakmethree/27.jpg",
    },
    {
        src: "/Sources/images/event/lakmethree/28.jpg",
    },
    {
        src: "/Sources/images/event/lakmethree/29.jpg",
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