import React from "react";
import { Row, Col } from "antd";
const fashionimages = [

    {
        src: "/Sources/images/event/lakmethree/1.jpg",
    },
    {
        src: "/Sources/images/event/lakmethree/2.jpg",
    },
    {
        src: "/Sources/images/event/lakmethree/4.jpg",
    },
    {
        src: "/Sources/images/event/lakmethree/5.jpg",
    },
    
    {
        src: "/Sources/images/event/lakmethree/7.jpg",
    },
    
    {
        src: "/Sources/images/event/lakmethree/8.jpg",
    },
    
    {
        src: "/Sources/images/event/lakmethree/9.jpg",
    },
    
    {
        src: "/Sources/images/event/lakmethree/10.jpg",
    },
    
    {
        src: "/Sources/images/event/lakmethree/12.jpg",
    },
    
    {
        src: "/Sources/images/event/lakmethree/13.jpg",
    },
    
    {
        src: "/Sources/images/event/lakmethree/15.jpg",
    },
    
    {
        src: "/Sources/images/event/lakmethree/16.jpg",
    },
    
    {
        src: "/Sources/images/event/lakmethree/18.jpg",
    },
    
    {
        src: "/Sources/images/event/lakmethree/19.jpg",
    },
    
    {
        src: "/Sources/images/event/lakmethree/20.jpg",
    },
    
    {
        src: "/Sources/images/event/lakmethree/22.jpg",
    },
    {
        src: "/Sources/images/event/lakmethree/24.jpg",
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