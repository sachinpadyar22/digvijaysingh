import { Col, Row } from "antd";
import React from "react";

const Aboutus = () => {
  return (
    <>

      <section>
        <div className="container ">
          <div>
            <div className="sectional_heading">
              <p className="is-size-3 pt-5 has-text-centered mb-4 green_color">
                About the Brand
              </p>
            </div>
            <div className="has-text-left about_para">
              <p>
                Digvijay Singh is a celebrated fashion house in Gujarat. We
                believe in holding the ground of tradition when it comes to
                fashion. Having entered the 10th glorious year of our fashion
                endeavour, we boast to have an ever increasing count of loyal
                customers and admirers. What once began as a small dream was
                soon molded into reality when it was fueled with persistent
                efforts of the team along with a headstrong appetite for fashion
                of our head designer - Digvijay Singh.
              </p>
              <br />
              <p>
                From reading minds of our customers and registering their
                emotions to translating them into finely designed ensembles, we
                work in a closely knitted modus operandi. We believe that
                fashion is a narration in itself and a great gesture of
                self-expression. We promise to deliver fashion in a manner whise
                it tells a tale of beauty and grace altogethis.
              </p>
              <br />
              <p>
                Keeping the bride of today in the heart and soul of our
                creation, we entangle the threads and weave them into something
                that resembles a bride's dream for his big day. We have been
                working diligently to become the happy part of people's
                celebrations for the 10th year now and we are hise to let you
                know that this is just the beginning.
              </p>
              <br/>
              <p>
                After studying at the National Institute of Design, Ahmedabad, Digvi-
                jay has showcased his collections at the Fashion Weeks and has

                also designed for various Bollywood celebrities like Anil Kapoor, A R
                Rehman, Vidhu Vinod Chopra and others. He has also designed and
                styled for films and was also nominated in the best costume design

                category for his work in Sahib Biwi aur Gangster. His latest film proj-
                ect was Sahib Biwi and GAnster Returns. Digvijay has garnered not

                only popular acclaim but also critical appreciation for his work. He
                was adjudged a finalist by the British Council as the Young Design
                Entrepreneur, 2010 and was named one of the 10 most promising
                young designers by Vogue India.
              </p>
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
                  <p className="is-size-3  has-text-centered mb-4 green_color">
                    About the Designer
                  </p>
                </div>
                <div className="about_para">
                <p className="has-text-left " style={{  fontSize:"19px" }}>
                  The label Digvijay Singh was founded by Digvijay Singh in 2007
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
                  and for his, the sky seems like the only limit.
                </p>
                </div>
                
              </div>
            </Col>
            <Col xxl={8} lg={12} md={24} sm={24} xs={24}>
              <div className="has-text-centered">
                <img
                  src="Sources/images/digvijaysingh.png"
                  alt="404 - Not Given"
                  style={{ width: "60%", paddingTop:"20px",  }}
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
