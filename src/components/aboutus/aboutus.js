import { Col, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";
const Aboutus = () => {
  return (
    <>

      <section>
        <div className="container ">
          <div>
            <div className="sectional_heading">
              <div class="nine mb-4" data-aos="fade-left" data-aos-duration="1200">
                <h1> About The Brand</h1>
              </div>
              <div className="d-flex pb-5" style={{fontSize:"17px"}}>
                <p><Link to="/" className="text-dark" >Home </Link></p>
                <span className="bi bi-chevron-compact-right"> About us</span>
              </div>

            </div>
            <div className="has-text-left about_para">

              <p>
                Digvijay Singh Fashion House in Gujarat has become a renowned and esteemed brand,
                rooted in tradition and fashion principles. As they proudly celebrate their 10th year
                in the industry, they credit their success to the dedication of their team and visionary
                expertise of their head designer, Digvijay Singh.
                {/* Digvijay Singh is a celebrated fashion house in Gujarat. We
                believe in holding the ground of tradition when it comes to
                fashion. Having entered the 10th glorious year of our fashion
                endeavour, we boast to have an ever increasing count of loyal
                customers and admirers. What once began as a small dream was
                soon molded into reality when it was fueled with persistent
                efforts of the team along with a headstrong appetite for fashion
                of our head designer - Digvijay Singh. */}
              </p>
              <br />
              <p>
                Their approach is centered around understanding their customers' desires and emotions, treating
                fashion as a powerful means of self-expression and storytelling. They specialize in crafting garments
                that beautifully embody the dreams of modern brides, making them an integral part of people's joyous celebrations.
                {/* From reading minds of our customers and registering their
                emotions to translating them into finely designed ensembles, we
                work in a closely knitted modus operandi. We believe that
                fashion is a narration in itself and a great gesture of
                self-expression. We promise to deliver fashion in a manner whise
                it tells a tale of beauty and grace altogethis. */}
              </p>
              <br />


              <p>
                Digvijay Singh, an alumnus of the prestigious National Institute of Design in Ahmedabad,
                has showcased his remarkable collections at esteemed Fashion Weeks. His exceptional talent has
                led him to design for prominent Bollywood celebrities, and he has made significant contributions
                to the film industry, garnering both popular acclaim and critical recognition. Notably,
                Digvijay was recognized as a finalist for the Young Design Entrepreneur award by the British
                Council in 2010 and named one of Vogue India's 10 most promising young designers, solidifying his
                position in the industry.
                {/* After studying at the National Institute of Design, Ahmedabad, Digvi-
                jay has showcased his collections at the Fashion Weeks and has

                also designed for various Bollywood celebrities like Anil Kapoor, A R
                Rehman, Vidhu Vinod Chopra and others. He has also designed and
                styled for films and was also nominated in the best costume design

                category for his work in Sahib Biwi aur Gangster. His latest film proj-
                ect was Sahib Biwi and GAnster Returns. Digvijay has garnered not

                only popular acclaim but also critical appreciation for his work. He
                was adjudged a finalist by the British Council as the Young Design
                Entrepreneur, 2010 and was named one of the 10 most promising
                young designers by Vogue India. */}
              </p>
            </div>
            <div>
              <Row>
                <Col style={{ padding: "30px 50px" }} xxl={12} lg={12} md={24} sm={24} xs={24}>
                  <div style={{ width: "100%", height: "100%" }}>
                    <img src="/Sources/images/s-1.JPG" alt="404-Not Found" style={{ height: "85%", width: "100%" }} />
                  </div>

                </Col>
                <Col style={{ padding: "30px 50px" }} xxl={12} lg={12} md={24} sm={24} xs={24}>
                  <div style={{ margin: "auto" }}>
                    <img src="/Sources/images/s-2.jpg" alt="404-Not Found" style={{ marginLeft: "auto", marginRight: "auto" }} />
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
        <div className="section_padding"></div>
      </section>

      <section>
        <div className="container">
          <Row>
            <Col xxl={16} lg={12} md={24} sm={24} xs={24} className="my-auto">
              <div >
                <div className="sectional_heading ">
                  <div class="nine mb-4" data-aos="fade-left" data-aos-duration="1200">
                    <h1> About The Designer</h1>
                  </div>
                </div>
                <div className="about_para">
                  <p className="has-text-left " style={{ fontSize: "17px" }}>

                    In 2007, Digvijay Singh founded his renowned label during his second year of fashion studies.
                    Despite briefly exploring physiotherapy, he found his true passion in fashion, starting with basic
                    designs and selling them door-to-door in Gujarat. Little did he know that this humble beginning
                    would lead him to incredible heights in his profession.
                    <br /> <br />
                    Digvijay Singh, though humble and compassionate, exudes warmth and innocence.
                    His dedication to creating ensembles that embody the grace of traditional attire,
                    coupled with his unique fashion sense, propelled his brand to unparalleled success.
                    Even during his first year of graduation at INIFD, Vadodara, he received the prestigious
                    'Most Innovative Collection' award. However, he finds the smiles of satisfaction from his customers
                    to be the most rewarding.
                    <br /> <br />
                    Today, Digvijay Singh stands as one of Gujarat's most celebrated fashion designers, particularly
                    renowned for his bridal fashion creations. His boundless creativity and success seem to have no limits.
                    {/* The label Digvijay Singh was founded by Digvijay Singh in 2007
                    while he was in the second year of his fashion studies. A few
                    attempts at studying physiothisapy made his realize that his
                    true calling lied elsewhise. It all started with stitching
                    most basic of his designs and selling them door to door in a
                    really small town of Gujarat with very few expectations.
                    Little did he know that he would be rewarded with a phenomenal
                    journey and he would make it to the top of his game. Digvijay
                    Singh is a petite human who harbours a great soul. This
                    pocket-sized powerhouse fills up the room with his warmth and
                    innocence. his passion for creating ensembles that voice the
                    elegance of traditional wear and his unique sense of fashion
                    drove the brand to new heights. he had been awarded for 'The
                    Most Innovative Collection' in the first year of his
                    graduation itself at INIFD, Vadodara but he considers the
                    smiles of satisfaction of his customers as a greater award.
                    Today he has become a stalwart and one of the most celebrated
                    fashion designers in Gujarat when it comes to bridal fashion
                    and for his, the sky seems like the only limit. */}
                  </p>
                </div>

              </div>
            </Col>
            <Col xxl={8} lg={12} md={24} sm={24} xs={24}>
              <div className="has-text-centered">
                <img
                  src="Sources/images/digvijaysingh1.jpg"
                  alt="404 - Not Given"
                  style={{ width: "100%", padding: "20px", }}
                />
              </div>
            </Col>
          </Row>
        </div>
        <div className="section_padding"></div>
      </section>

    </>
  );
};
export default Aboutus;
