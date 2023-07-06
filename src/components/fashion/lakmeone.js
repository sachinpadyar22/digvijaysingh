import React from "react";
import { Row, Col } from "antd";
const fashionimages = [

    {
        src: "/Sources/images/event/lakmeone/1.JPG",
    },
    {
        src: "./Sources/images/event/lakmeone/3.JPG",
    },
    {
        src: "./Sources/images/event/lakmeone/5.JPG",
    },
    {
        src: "./Sources/images/event/lakmeone/6.JPG",
    },
    {
        src: "./Sources/images/event/lakmeone/9.JPG",
    },
    {
        src: "./Sources/images/event/lakmeone/11.JPG",
    },
    {
        src: "./Sources/images/event/lakmeone/12.JPG",
    },
    {
        src: "./Sources/images/event/lakmeone/15.JPG",
    },

    {
        src: "./Sources/images/event/lakmeone/17.JPG",
    },
    {
        src: "./Sources/images/event/lakmeone/19.JPG",
    },
    {
        src: "./Sources/images/event/lakmeone/20.JPG",
    },
    {
        src: "./Sources/images/event/lakmeone/21.JPG",
    },
    {
        src: "./Sources/images/event/lakmeone/24.JPG",
    },
    {
        src: "./Sources/images/event/lakmeone/25.JPG",
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