import React from "react";
import { Row, Col } from "antd";
const fashionimages = [

    {
        src: "/Sources/images/event/lakmetwo/1.JPG",
    },
    {
        src: "/Sources/images/event/lakmetwo/4.JPG",
    },
    {
        src: "/Sources/images/event/lakmetwo/9.JPG",
    },
    {
        src: "/Sources/images/event/lakmetwo/12.JPG",
    },
    {
        src: "/Sources/images/event/lakmetwo/16.JPG",
    },
    {
        src: "/Sources/images/event/lakmetwo/19.JPG",
    },
    {
        src: "/Sources/images/event/lakmetwo/22.JPG",
    },
    {
        src: "/Sources/images/event/lakmetwo/26.JPG",
    },
    {
        src: "/Sources/images/event/lakmetwo/30.JPG",
    },
    {
        src: "/Sources/images/event/lakmetwo/32.JPG",
    },
    {
        src: "/Sources/images/event/lakmetwo/33.JPG",
    },
    {
        src: "/Sources/images/event/lakmetwo/34.JPG",
    },
    {
        src: "/Sources/images/event/lakmetwo/38.JPG",
    },
    {
        src: "/Sources/images/event/lakmetwo/41.JPG",
    },
    {
        src: "/Sources/images/event/lakmetwo/46.JPG",
    },
    {
        src: "/Sources/images/event/lakmetwo/48.JPG",
    },
    {
        src: "/Sources/images/event/lakmetwo/52.JPG",
    },
    {
        src: "/Sources/images/event/lakmetwo/53.JPG",
    },
    {
        src: "/Sources/images/event/lakmetwo/57.JPG",
    },
    {
        src: "/Sources/images/event/lakmetwo/58.JPG",
    },
    {
        src: "/Sources/images/event/lakmetwo/59.JPG",
    },
    {
        src: "/Sources/images/event/lakmetwo/60.JPG",
    },
    
    
];
const Lakmetwo = () => {
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
export default Lakmetwo;