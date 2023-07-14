import React, { useEffect } from "react";
import { Button, Col, Image, Row, Space } from "antd";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./home.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import { url } from "../../constants/navhome";
// import Header from "../header/header";
import img1 from "../home/images/hero1.jpg";
// import img2 from "../home/images/2.jpg";
import img3 from "../home/images/3.png";

// const carousel = [
//   {
//     src: "Sources/images/carousal/2.jpg",
//   },
//   {
//     src: "Sources/images/carousal/2.jpg",
//   },
//   {
//     src: "Sources/images/carousal/3.png",
//   },
// ];
export const actor = [
  {
    src: "Sources/images/actor/1.png",
    name: "Anil Kapoor",
  },
  {
    src: "Sources/images/actor/2.png",
    name: "Riteish Deshmukh",
  },
  {
    src: "Sources/images/actor/3.png",
    name: "Jimmy Shergill",
  },
  {
    src: "Sources/images/actor/4.png",
    name: "Irrfan Khan",
  },
  {
    src: "Sources/images/actor/5.png",
    name: "A. R. Rahman",
  },
  {
    src: "Sources/images/actor/6.png",
    name: "Vidhu Vinod Chopra",
  },
  {
    src: "Sources/images/actor/7.png",
    name: "Anil Kapoor",
  },
  {
    src: "Sources/images/actor/8.png",
    name: "Arjun Rampal",
  },
];

const Home = () => {

  return (
    <>
      <section className="banner_carousel">
        {/* <Header/> */}
        {/* <Carousel
          className="carousal_height"
          autoPlay={true}
          infiniteLoop={true}
          emulateTouch={true}
          showArrows={false}
          showThumbs={false}
          showStatus={false}
        >
          {carousel.map((item, key) => {
            return (
              <div>
                <img src={item.src} alt="404 - Not Given" />
              </div>
            );
          })}
        </Carousel> */}

        <>
          {/* Hello world */}
          <div
            id="carouselExampleInterval"
            className="carousel slide "
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval={2000}>
                <img src={img1} className="d-block w-100" alt="..." />
              </div>
              {/* <div className="carousel-item" data-bs-interval={2000}>
                <img src={img2} className="d-block w-100" alt="..." />
              </div> */}
              {/* <div className="carousel-item" data-bs-interval={2000}>
                <img src={img3} className="d-block w-100" alt="..." />
              </div> */}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>

        </>
      </section>

      {/* <section>
        <div className="section_padding"></div>
        <div className="container">
          <div>
            <Row>
              <Col xxl={9} lg={10} md={24} sm={24} xs={24}>
                <div className="has-text-centered">
                  <img src="Sources/images/about/1.png" alt="404 - Not Given" />
                  <img
                    src="Sources/images/about/4.png"
                    alt="404 - Not Given"
                    style={{ width: "100%" }}
                  />
                </div>
              </Col>
              <Col xxl={15} lg={14} md={24} sm={24} xs={24} className="my-auto">
                <div className="aboutus_textone">
                  <p className="is-size-3 heading_style">About Us</p>
                  <p className="has-text-left">
                    Digvijay Singh selected as a Gen Next Designer in 2007 at
                    the Lakme fashion week and a finalist at the young
                    entrepreneur of the year by the British Council and Elle
                    magazine Digvijay Singh was featured as one of the 10 most
                    promising designers by Vogue India. In 2012 he was nominated
                    for the best costume designer for the movie (Saheb Biwi Aur
                    Gangster ) at Producer's guilt Apsara awards. Digvijay Singh
                    selected as a Gen Next Designer in 2007 at the Lakme fashion
                    week and a finalist at the young entrepreneur of the year by
                    the British Council and Elle magazine Digvijay Singh was
                    featured as one of the 10 most promising designers by Vogue
                    India.
                  </p>
                  <div>
                    <div>
                      <img
                        src="Sources/images/about/5.png"
                        alt="404 - Not Given"
                        style={{ width: "100%" }}
                        className="pr-2 pt-5"
                      />
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="section_padding"></div>
      </section> */}

      <section>
        <div className="container">
          <div className="section_padding"></div>
          {/* <div className="sectional_heading">
            <p className="is-size-3 heading_style has-text-centered mb-4">
              Fashion Weeks
            </p>
          </div> */}
          <div class="nine">
            <h1>Fashion Weeks<span>Lakme</span></h1>
          </div>
          <div className="about_para">
            <p className="pt-5 pb-5 mb-5">
              Digvijay Singh selected as a Gen Next Designer in 2007 at the
              Lakme fashion week and a finalist at the young entrepreneur of the
              year by the British Council and Elle magazine Digvijay Singh was
              featured as one of the 10 most promising designers by Vogue India.
              In 2012 he was nominated for the best costume designer for the
              movie (Saheb Biwi Aur Gangster ) at Producer's guilt Apsara
              awards.
            </p>
          </div>
          {/* <div className="images">
            <Row>
              {fashionimages.map((item, key) => {
                return (
                    <Col xxl={4} lg={4} md={6} sm={12} xs={12}>
                  <div className="fashionimg">
                    <img src={item.src} alt="404 - not Found" style={{padding:"10px"}} />
                  </div>
                  </Col>
                );
              })}
            </Row>
          </div> */}
        </div>
        <div className="container">
          <div className="sectional_heading">
            <p className="is-size-3  has-text-centered mb-4">
              Events
            </p>
          </div>
        </div>
        {/* <div className="container is-fluid timeline_wrapper"> */}
        <div className="timeline_wrapper">
          <div className="timeline-block timeline-block-left" >
            <div className="marker"></div>
            <div>
              <div className="space-align-container">
                <div className="space-align-block">
                  <Space
                    align="center"
                    direction="horizontal"
                    className="mile_box"
                  >
                    <div>
                      <p className="is-size-5">2006</p>
                      <p className="is-size-4  ">
                        <Link to="/lakmeone" className="green_color">Lakme Fashion Week</Link>
                      </p>
                      {/* <p className="is-size-6">(-)</p> */}
                      <div className="mt-3">
                        <img style={{ width: "150px" }}
                          src="Sources/images/event/1-1.JPG"
                          alt="404 - Not Given"
                        />
                      </div>
                      {/* <div>
                        <p className="is-size-5 blue_color has-text-weight-semibold">
                          9,00,000 sqft
                        </p>
                        <p className="is-size-6 has-text-black">
                          Largest Built-up Residential project
                        </p>
                      </div> */}
                    </div>
                  </Space>
                </div>
              </div>
            </div>
          </div>
          <div className="timeline-block timeline-block-right">
            <div className="marker"></div>
            <div>
              <div className="space-align-container">
                <div className="space-align-block">
                  <Space
                    align="center"
                    direction="horizontal"
                    className="mile_box"
                  >
                    <div>
                      <p className="is-size-5">2007</p>
                      <p className="is-size-4 ">
                        <Link to="/lakmetwo" className="green_color">Lakme Fashion Week</Link>
                      </p>
                      {/* <p className="is-size-6">(-)</p> */}
                      <div className="mt-3">
                        <img style={{ width: "150px" }}
                          src="Sources/images/event/1-2.JPG"
                          alt="404 - Not Given"
                        />
                      </div>
                      {/* <div>
                        <p className="is-size-5 blue_color has-text-weight-semibold">
                          9,00,000 sqft
                        </p>
                        <p className="is-size-6 has-text-black">
                          Largest Built-up Residential project
                        </p>
                      </div> */}
                    </div>
                  </Space>
                </div>
              </div>
            </div>
          </div>
          <div className="timeline-block timeline-block-left">
            <div className="marker"></div>
            <div>
              <div className="space-align-container">
                <div className="space-align-block">
                  <Space
                    align="center"
                    direction="horizontal"
                    className="mile_box"
                  >
                    <div>
                      <p className="is-size-5">2014</p>
                      <p className="is-size-4  ">
                        <Link to="/lakmethree" className="green_color">Lakme Fashion Week</Link>
                      </p>
                      {/* <p className="is-size-6">(-)</p> */}
                      <div className="mt-3">
                        <img style={{ width: "150px" }}
                          src="Sources/images/event/1-3.JPG"
                          alt="404 - Not Given"
                        />
                      </div>
                      {/* <div>
                        <p className="is-size-5 blue_color has-text-weight-semibold">
                          9,00,000 sqft
                        </p>
                        <p className="is-size-6 has-text-black">
                          Largest Built-up Residential project
                        </p>
                      </div> */}
                    </div>
                  </Space>
                </div>
              </div>
            </div>
          </div>
          <div className="timeline-block timeline-block-right">
            <div className="marker"></div>
            <div>
              <div className="space-align-container">
                <div className="space-align-block">
                  <Space
                    align="center"
                    direction="horizontal"
                    className="mile_box"
                  >
                    <div>
                      {/* <p className="is-size-5">--</p> */}
                      <p className="is-size-4 ">
                        <Link to="/lakmefour" className="green_color">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Goa Fashion&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
                      </p>
                      {/* <p className="is-size-6">(Goa)</p> */}
                      <div className="mt-3">
                        <img style={{ width: "150px" }}
                          src="Sources/images/event/1-4.JPG"
                          alt="404 - Not Given"
                        />
                      </div>
                      {/* <div>
                        <p className="is-size-5 blue_color has-text-weight-semibold">
                          9,00,000 sqft
                        </p>
                        <p className="is-size-6 has-text-black">
                          Largest Built-up Residential project
                        </p>
                      </div> */}
                    </div>
                  </Space>
                </div>
              </div>
            </div>
          </div>
          <div className="timeline-block timeline-block-left">
            <div className="marker"></div>
            <div>
              <div className="space-align-container">
                <div className="space-align-block">
                  <Space
                    align="center"
                    direction="horizontal"
                    className="mile_box"
                  >
                    <div>
                      {/* <p className="is-size-5">--</p> */}
                      <p className="is-size-4 ">
                        <Link to="/lakmefive" className="green_color">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kochi Fashion&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
                      </p>
                      {/* <p className="is-size-6">(kochi)</p> */}
                      <div className="mt-3">
                        <img style={{ width: "150px" }}
                          src="Sources/images/event/1-6.JPG"
                          alt="404 - Not Given"
                        />
                      </div>
                      {/* <div>
                        <p className="is-size-5 blue_color has-text-weight-semibold">
                          9,00,000 sqft
                        </p>
                        <p className="is-size-6 has-text-black">
                          Largest Built-up Residential project
                        </p>
                      </div> */}
                    </div>
                  </Space>
                </div>
              </div>
            </div>
          </div>
          <div className="timeline-block timeline-block-right">
            <div className="marker"></div>
            <div>
              <div className="space-align-container">
                <div className="space-align-block">
                  <Space
                    align="center"
                    direction="horizontal"
                    className="mile_box"
                  >
                    <div>
                      {/* <p className="is-size-5">--</p> */}
                      <p className="is-size-4 ">
                        <Link to="/lakmesix" className="green_color">&nbsp;&nbsp;&nbsp;Bengaluru Fashion&nbsp;&nbsp;&nbsp;</Link>
                      </p>
                      {/* <p className="is-size-6">(kochi)</p> */}
                      <div className="mt-3">
                        <img style={{ width: "150px" }}
                          src="Sources/images/event/1-7.jpg"
                          alt="404 - Not Given"
                        />
                      </div>
                      {/* <div>
                        <p className="is-size-5 blue_color has-text-weight-semibold">
                          9,00,000 sqft
                        </p>
                        <p className="is-size-6 has-text-black">
                          Largest Built-up Residential project
                        </p>
                      </div> */}
                    </div>
                  </Space>
                </div>
              </div>
            </div>
          </div>

        </div>
        {/* <div className="container">

          <div class="nine">
            <h1>Awards<span>Media</span></h1>
          </div>
          <div className="sectional_heading">
            <p className="is-size-3 heading_style has-text-centered mb-4">
              Movies
            </p>
          </div>
          <div className="collection_wrapper" data-aos="zoom-in" data-aos-duration="1200">
            <Row>
              <Col xxl={8} lg={8} md={12} sm={12} xs={24} className="p-5">
                <div
                  className="collection_img2"
                  style={{ width: "100%", height: "100%" }}
                >
                  <img
                    src="Sources/images/media1.jpg"
                    alt="404 - Not Given"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </Col>
              <Col xxl={8} lg={8} md={12} sm={12} xs={24} className="p-5">
                <div
                  className="collection_img1"
                  style={{ width: "100%", height: "100%" }}
                >
                  <img
                    src="Sources/images/media2.jpg"
                    alt="404 - Not Given"
                    style={{ width: "100%", height: "100%", margin: "auto" }}
                  />
                </div>
              </Col>
              <Col xxl={8} lg={8} md={12} sm={12} xs={24} className="p-5">
                <div
                  className="collection_img1"
                  style={{ width: "100%", height: "100%" }}
                >
                  <img
                    src="Sources/images/media3.jpg"
                    alt="404 - Not Given"
                    style={{ width: "100%", height: "100%", margin: "auto" }}
                  />
                </div>
              </Col>
            </Row>
            <div class="nine">
              <h1><span>Movies</span></h1>
            </div>
            <Row>
              <Col xxl={12} lg={12} md={12} sm={242} xs={24}>
                <div
                  className="collection_img2"
                  style={{ width: "100%", height: "100%" }}
                >
                  <img
                    src="Sources/images/movie2.png"
                    alt="404 - Not Given"
                    style={{ width: "100%" }}
                  />
                </div>
              </Col>
              <Col xxl={12} lg={12} md={12} sm={24} xs={24}>
                <div
                  className="collection_img1"
                  style={{ width: "100%", height: "100%" }}
                >
                  <img
                    src="Sources/images/movie1.png"

                    alt="404 - Not Given"
                    style={{ marginLeft: "auto", marginRight: "auto", paddingTop: "70px", display: "block" }}
                  />
                </div>
              </Col>

            </Row>
            <div className="collection">
              <div className="collection_content">
                <h6 className="is-size-5">Charismatic</h6>
                <h3
                  className="is-size-1 green_color"
                  style={{ lineHeight: "1" }}
                >
                  Movie
                </h3>
                <p className="pt-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
              <div className="collection_img">
                <img
                  src="Sources/images/movie1.png"
                  alt="404 - Not Given"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            <div className="collection2">
              <div className="collection_img2">
                <img
                  src="Sources/images/movie2.png"
                  alt="404 -Not Given"
                  style={{ width: "100%" }}
                />
              </div>
              <div className="collection_content2">
                <h6 className="is-size-5">Charismatic</h6>
                <h3
                  className="is-size-1 green_color"
                  style={{ lineHeight: "1" }}
                >
                  Movie
                </h3>
                <p className="pt-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>
        </div> */}
        <div className="section_padding"></div>
      </section>

      {/* <section className="volunteer_card">
        <div className="section_padding"></div>
        <div className="container">
          <div className="sectional_heading">
            <p className="is-size-3 heading_style has-text-centered mb-4">
              Actor
            </p>
          </div>
          <div className="mt-5">
            <Row>
              {actor.map((item, key) => {
                return (
                  <Col
                    xxl={6}
                    md={12}
                    lg={6}
                    sm={24}
                    xs={24}
                    className="volunteer px-3"
                  >
                    <div className="">
                      <div className="image_wrapper">
                        <img
                          src={item.src}
                          alt="404 - Not Given"
                          className="volunteer_img"
                        />
                      </div>
                      <div className="volunteer-info bgbrown_color">
                        <div className="volunteer-more has-text-white">
                          <h3 className="mb-0 mt-0 has-text-white">
                            {item.name}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </div>
        </div>
        <div className="section_padding"></div>
      </section> */}

      {/* <section className="our_collection">
        <div className="container-fluid">
          <p className="is-size-3 has-text-centered mb-4 green_color">
            Our Collection
          </p>
          <Row>
            <Col xxl={12} lg={12} md={12} sm={24} xs={24} data-aos="fade-right" data-aos-duration="1200">
              <div className="p-5">
                <div className="women_wrapper">
                  <img
                    src="Sources/images/women.png"
                    alt="404 - Not Given"
                    style={{ width: "100%" }}
                    className="women_img"
                  />
                  <div>
                    <p className="shop_women">WOMEN</p>
                    <div className="view_button">
                      <Button
                        type="primary"
                        className="view_collection has-text-weight-semibold"
                        size="large"
                      >
                        <Link to={url.collectionwomen}> View Collection</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col xxl={12} lg={12} md={12} sm={24} xs={24} data-aos="fade-left" data-aos-duration="1200">
              <div className="p-5">
                <div className="women_wrapper">
                  <img
                    src="Sources/images/men.png"
                    alt="404 - Not Given"
                    style={{ width: "100%" }}
                    className="women_img"
                  />
                  <div>
                    <p className="shop_women">MEN</p>
                    <div className="view_button">
                      <Button
                        type="primary"
                        size="large"
                        className="view_collection"
                      >
                        <Link to={url.collectionmen}>View Collection</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="section_padding"></div>
      </section> */}

      {/* <section className="bg-white">
        <Row className="popular_collection">
          <Col className="first m-auto" xxl={12} lg={12} md={24} sm={24} xs={24}>
            <h1>Digvijay Popular Collection</h1>
            <p>The Popular Brand Wear is Here</p>
            <button>View Collection</button>

          </Col>
          <Col className="text-center" xxl={12} lg={12} md={24} sm={24} xs={24}>
            <div style={{ padding: "0px 30px" }}>
              <img src="Sources/images/1.JPG" alt="404 - Not Given" />
            </div>

          </Col>
        </Row>
      </section> */}


      <section>
        <div className="section_padding"></div>
        <div className="container">
          <div class="nine mb-4" data-aos="fade-left" data-aos-duration="1200">
            <h1> A Walk Down the Ramp</h1>
          </div>
          {/* <p className="is-size-3 has-text-centered mb-4 green_color">
              A Walk Down the Ramp
            </p> */}

          {/* <video controls> */}
          {/* <video loop muted autoPlay preload="auto">
              <source src="Sources/images/video.mp4" type="video/mp4" />
            </video> */}
          <Row data-aos="fade-up" data-aos-duration="1200">
            <Col xxl={8} lg={8} md={12} sm={24} xs={24} style={{ padding: "10px" }}>
              {/* <video controls >
                <source src="Sources/images/video.mp4" type="video/mp4" />
              </video> */}
              <video controls="true" width='100%' height='100%' src='Sources/images/video2.mp4#t=0.001' type='video/mp4'></video>
            </Col>
            <Col xxl={8} lg={8} md={12} sm={24} xs={24} style={{ padding: "10px" }}>
              <video controls>
                <source src="Sources/images/video2.mp4#t=0.001" type="video/mp4" />
              </video>
            </Col>
            <Col xxl={8} lg={8} md={12} sm={24} xs={24} style={{ padding: "10px" }}>
              <video controls>
                <source src="Sources/images/video3.mp4#t=0.001" type="video/mp4" />
              </video>
            </Col>
          </Row>
        </div>

        <div className="section_padding"></div>
      </section>

      <section className="bg-white appoint" >
        <div class="row w-100">
          <div class="col  text-white text-center first">
            <img src="Sources/images/logo2.png" alt="" style={{ width: "200px", padding: "30px 0" }} />
          </div>
          <div class="col text-start second">
            <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Book an Appointment</h1>
            <hr />
            <br />
            <div class="input-group mb-3" id="Contact_P" >
              <input type="text" class="form-control" placeholder="Recipient's Email" aria-label="Recipient's username" aria-describedby="button-addon2" />
              <button class="btn btn-outline-secondary ps-5 pe-5" type="button" id="button-addon2">Join</button>
            </div>
            <div className="section_padding"></div>
          </div>

        </div>
        {/* <Row>
          <Col xxl={8} lg={8} md={12} sm={24} xs={24} className="text-center m-auto">

          </Col>
          <Col xxl={8} lg={8} md={12} sm={24} xs={24} className="text-start m-auto">
            <h1>Book an Appointment</h1>
            <br />
            <div class="input-group mb-3" id="Contact_P">
              <input type="text" class="form-control" placeholder="Recipient's Email" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
            </div>

          </Col>
        </Row> */}

      </section>

      {/* <section>
        <div className="container">
          <div>
            <Row>
              <Col xxl={15} lg={14} md={24} sm={24} xs={24}>
                <div className="aboutus_text">
                  <p className="is-size-3 heading_style">Couture</p>
                  <p className="has-text-left">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,Lorem Ipsum is
                    simply dummy text of the printing.
                  </p>
                  <div>
                    <Row>
                      <Col
                        xxl={8}
                        lg={8}
                        md={8}
                        sm={24}
                        xs={24}
                        className="mt-5 photo_right"
                        style={{ textAlign: "center" }}
                      >
                        <Image
                          src="Sources/images/about/aboutus/1.png"
                          alt="404 - Not Given"
                          style={{ width: "100%" }}
                        />
                      </Col>
                      <Col
                        xxl={8}
                        lg={8}
                        md={8}
                        sm={24}
                        xs={24}
                        className="mt-5 photo_right"
                        style={{ textAlign: "center" }}
                      >
                        <Image
                          src="Sources/images/about/aboutus/3.png"
                          alt="404 - Not Given"
                          style={{ width: "100%" }}
                        />
                      </Col>
                      <Col
                        xxl={8}
                        lg={8}
                        md={8}
                        sm={24}
                        xs={24}
                        className="mt-5 photo_right"
                        style={{ textAlign: "center" }}
                      >
                        <Image
                          src="Sources/images/about/aboutus/2.png"
                          alt="404 - Not Given"
                          style={{ width: "100%" }}
                        />
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
              <Col
                xxl={9}
                lg={10}
                md={24}
                sm={24}
                xs={24}
                className="about_bigimg"
              >
                <div className="has-text-centered">
                  <Image
                    src="Sources/images/about/aboutus/4.png"
                    alt="404 - Not Given"
                    style={{ width: "100%" }}
                  />
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="section_padding"></div>
      </section> */}

      {/* <section>
        <div className="container">
          <div className="sectional_heading">
            <p className="is-size-3 pb-5 has-text-centered mb-1 green_color">
              Our Collections
            </p>
            <p className="is-size-6 mb-5 has-text-centered">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div>
            <Row>
              <Col xxl={6} lg={6} md={12} sm={12} xs={12}>
                <div className="men_wear_wrapper">
                  <Space direction="vertical">
                    <img
                      src="Sources/images/about/aboutus2/1.png"
                      alt="404 - Not Given"
                    />
                  </Space>
                </div>
              </Col>
              <Col xxl={6} lg={6} md={12} sm={12} xs={12}>
                <div className="men_wear_wrapper">
                  <Space direction="vertical">
                    <img
                      src="Sources/images/about/aboutus2/2.png"
                      alt="404 - Not Given"
                    />
                  </Space>
                </div>
              </Col>
              <Col xxl={6} lg={6} md={12} sm={12} xs={12}>
                <div className="men_wear_wrapper">
                  <Space direction="vertical">
                    <img
                      src="Sources/images/about/aboutus2/3.png"
                      alt="404 - Not Given"
                    />
                  </Space>
                </div>
              </Col>
              <Col xxl={6} lg={6} md={12} sm={12} xs={12}>
                <div className="men_wear_wrapper">
                  <Space direction="vertical">
                    <img
                      src="Sources/images/about/aboutus2/4.png"
                      alt="404 - Not Given"
                    />
                  </Space>
                </div>
              </Col>
              <Col xxl={4} lg={4} md={24} sm={24} xs={24}>
                <div className="men_wear_wrapper">
                  <Space direction="vertical">
                    <img
                      src="Sources/images/about/aboutus2/4.png"
                      alt="404 - Not Given"
                    />
                    <div>
                      <p>asda asdas</p>
                    </div>
                  </Space>
                </div>
              </Col>
              <Col xxl={4} lg={4} md={24} sm={24} xs={24}>
                <div className="men_wear_wrapper">
                  <Space direction="vertical">
                    <img
                      src="Sources/images/about/aboutus2/3.png"
                      alt="404 - Not Given"
                    />
                    <div>
                      <p>asda asdas</p>
                    </div>
                  </Space>
                </div>
              </Col>
            </Row>
            <div className="has-text-centered pb-5">
              <Button size="large" className="bgbrown_color knowmore_button">
                <Link to={url.Gallery}>BROWSE OUR COLLECTION</Link>
              </Button>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Home;
