import { Col, Row } from "antd";
import React from "react";

const residentiallist = [
  {
    src: "Sources/images/prouctlist/residential/ongoing/1.png",
    title: "RELIANCE JAMNAGAR",
    content:
      "Security Staff Housing Complex project at Jamnagar-LC 01, LC 04 and LC 10",
    segment: "Residential",
    client: "Reliance Industries Ltd",
    projectSize: "3,40,900 Sq. ft. (G+2 Floors)",
    architect: "PVDRS, Ahmedabad",
    consultant: "PVDRS, Ahmedabad",
    scope:
      "Civil Structure work for RCC Core and Shell, Waterproofing, Masonry, all in-building MEP, interior finishing works",
  },
  {
    src: "Sources/images/prouctlist/residential/ongoing/2.png",
    title: "GHARANA",
    content: "5 and 6 BHK Sky Villas of 22 floored structure.",
    segment: "Residential",
    client: "Sheetal Infrastructure",
    projectSize: "5,00,000 Sqft. (03 Basement + G.F + 21 Floors)",
    architect: "ADS Architect",
    consultant: "Ducon Consultants",
    scope:
      "Civil Structure work for D Wall, RCC works, Block work, Internal plaster, External Plaster",
  },
  {
    src: "Sources/images/prouctlist/residential/ongoing/3.png",
    title: "OEUVRE - 2",
    content:
      "4 BHK spacious and luxurious apartments, the architectural design and modern amenities that Oeuvre-2 entails is remarkable.",
    segment: "Residential",
    client: "Madhav Oeuvre-2 LLP - Madhav Group",
    projectSize: "6,05,957 Sq. ft. (Four tower) (2B+GF+P-1+P-2+H.P,+22 Floors)",
    architect: "H M Architects",
    consultant: "Setu Infrastructure",
    scope: "Setu Infrastructure",
  },
];

const Residential = () => {
  return (
    <>
      <section className="residential">
        <div className="section_padding"></div>
        <div className="container">
          <Row>
            {residentiallist.map((item, key) => {
              return (
                <Col xxl={8} lg={8} md={12} sm={24} xs={24}>
                  <div className="property_list">
                    <div className="propertylist_image">
                      <img src={item.src} alt="404 - Not Given" />
                    </div>

                    <div className="propertylist_content p-4">
                      <div className="pt-2">
                        <p className="is-size-4 has-text-centered green_color has-text-weight-semibold">
                          {item.title}
                        </p>
                      </div>
                      <div className="pt-3">
                        <p className="is-size-6">{item.content}</p>
                      </div>
                      <div className="pt-3">
                        <p className="is-size-6">
                          <span className="has-text-weight-semibold">
                            Segment:&nbsp;
                          </span>
                          {item.segment}
                        </p>
                      </div>
                      <div className="pt-3">
                        <p className="is-size-6">
                          <span className="has-text-weight-semibold">
                            Client:&nbsp;
                          </span>
                          {item.client}
                        </p>
                      </div>
                      <div className="pt-3">
                        <p className="is-size-6">
                          <span className="has-text-weight-semibold">
                            Project Size:&nbsp;
                          </span>
                          {item.projectSize}
                        </p>
                      </div>
                      <div className="pt-3">
                        <p className="is-size-6">
                          <span className="has-text-weight-semibold">
                            Architect:&nbsp;
                          </span>
                          {item.architect}
                        </p>
                      </div>
                      <div className="pt-3">
                        <p className="is-size-6">
                          <span className="has-text-weight-semibold">
                            Str. Consultant:&nbsp;
                          </span>
                          {item.consultant}
                        </p>
                      </div>
                      <div className="pt-3">
                        <p className="is-size-6">
                          <span className="has-text-weight-semibold">
                            Scope:&nbsp;
                          </span>
                          {item.scope}
                        </p>
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
        <div className="section_padding"></div>
      </section>
    </>
  );
};

export default Residential;
