import React, { useEffect, useState } from "react";
import { FaPinterestP } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";
import { url } from "../../constants/navhome";
import { BackTop } from "antd";
import "./header.css";
import { Hidden } from "@mui/material";




const headeritemleft = [
  // {
  //   headname: "Collection",
  //   headlink: url.colletion,
  // },
  {
    headname: "About Us",
    headlink: url.aboutus,
  },
  {
    headname: "Home",
    headlink: url.home,
  },
  {
    headname: "Fashion Week",
    headlink: url.fashion,
  },
  {
    headname: "New Arrivals",
    headlink: url.arrivals,
  },
  // {
  //   headname: "Events",
  //   headlink: url.events,
  // },
];
const headeritemright = [
  // {
  //   headname: "Awards",
  //   headlink: url.awards,
  // },
  {
    headname: "Special Offers",
    headlink: url.offers,
  },
  {
    headname: "Meet The Designer",
    headlink: url.meet,
  },
  {
    headname: "Blog",
    headlink: url.blog,
  },

  // {
  //   headname: "Shop",
  //   headlink: url.shop,
  // },
];



const Header = () => {
 
  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  /* Method that will fix header after a specific scrollable */
  const isSticky = (e) => {
    const header = document.querySelector(".navbarshadow");
    const scrollTop = window.scrollY;
    if (scrollTop >= 300) header.classList.add("fixed-nav");
    else header.classList.remove("fixed-nav");
  };
  /* end*/
 
  const [isActive, setIsActive] = useState(false);

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const widthEvent = window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);
  return (
    <>
      <BackTop />

      


      <nav
        className="navbar navbarshadow"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container  navigation ">
          <div className="d-flex ">
            <div className="navbar-brand">
              <a className="navbar-item logo" href="\">
                <img src="Sources/images/logo2.png" alt="logo" />
              </a>
            </div>
            <a
              role="button"
              className={`my-auto navbar-burger ${isActive ? "is-active" : ""}`}
              onClick={() => {
                setIsActive(!isActive);
              }}
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
            <div className="SearchBar">
              <form class="d-flex" role="search">
                <span className="bi bi-search text-dark mt-1"></span>
                <input
                  class="form-control me-2 shadow-none"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
            </div>
          </div>

          {/* <div className="navbar-end">
            <div
              className="navbar-end navbar_line my-auto"
              style={{
                width: width >= 1024 && "100%",
                display: width >= 1024 && "flex",
                justifyContent: width >= 1024 && "center",
              }}
            ></div>
          </div> */}
          <div
            id="navbarBasicExample"
            className={`borderXwidth navbar-menu ${isActive ? "is-active" : ""
              }`}
          >
            <div
              className="navbar-end navbar_line "
              style={{
                width: width >= 1024 && "100%",
                display: width >= 1024 && "flex",
                justifyContent: width >= 1024 && "center",
                flexDirection: width >= 1024 && "column",
              }}
            >
              <div id="logo">

                <div className="container" style={{ textAlign: "center" }}>
                  <img
                    src="Sources/images/logo2.png"
                    alt="logo"
                    style={{ width: "6rem" }}
                  />
                </div>

                <a
                  role="button"
                  className={`my-auto navbar-burger ${isActive ? "is-active" : ""
                    }`}
                  onClick={() => {
                    setIsActive(!isActive);
                  }}
                  aria-label="menu"
                  aria-expanded="false"
                  data-target="navbarBasicExample"
                >
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </a>
              </div>
              <div className="Humburger_Nav">
                {headeritemleft.map((item, key) => {
                  return (
                    <div className="header_wrapper">
                      <Link 
                        className="navbar-item header_item hoverheader_item"
                        to={item.headlink}
                      >
                        {item.headname}
                      </Link>
                    </div>
                  );
                })}
                {headeritemright.map((item, key) => {
                  return (
                    <div className="header_wrapper">
                      <Link 
                        className="navbar-item header_item hoverheader_item"
                        to={item.headlink}
                      >
                        {item.headname}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
            {width > 1023 && (
              <div className="navbar-end">
                <div className="navbar-item">
                  <div
                    style={{
                      display: "flex",
                      textAlign: "center",
                      lineHeight: "0",
                    }}
                  >
                    <a href="" className="pr-0 pl-0 green_color">
                      <FaPinterestP className="is-size-4" />
                    </a>
                    <a href="" className="pl-4 green_color">
                      <BsFacebook className="is-size-4" />
                    </a>
                    <a
                      href="https://instagram.com/digvijaysingh_artwear?igshid=YmMyMTA2M2Y="
                      className="pl-4 green_color"
                    >
                      <BsInstagram className="is-size-4" />
                    </a>
                    <a href="" className="pl-4 green_color">
                      <BsWhatsapp className="is-size-4" />
                    </a>
                  </div>
                </div>
              </div>
            )}
            {width < 1024 && <div className="navbar-end"></div>}
            {/* {width > 1023 && (
              <div className="navbar-end">
                <div>
                  <div
                    style={{
                      display: "flex",
                      textAlign: "end",
                      paddingTop: "20px",
                      lineHeight: "0",
                    }}
                  >
                    <a href="" className="pr-0 pl-0 green_color">
                      <FaPinterestP className="is-size-4" />
                    </a>
                    <a href="" className="pl-4 green_color">
                      <BsFacebook className="is-size-4" />
                    </a>
                    <a
                      href="https://instagram.com/digvijaysingh_artwear?igshid=YmMyMTA2M2Y="
                      className="pl-4 green_color"
                    >
                      <BsInstagram className="is-size-4" />
                    </a>
                    <a href="" className="pl-4 green_color">
                      <BsWhatsapp className="is-size-4" />
                    </a>
                  </div>
                </div>
              </div>
            )} */}
          </div>
          {/* {width > 1023 && (
              <div className="navbar-end">
                <div>
                  <div
                    style={{
                      display: "flex",
                      textAlign: "end",
                      paddingTop: "20px",
                      lineHeight: "0",
                    }}
                  >
                    <a href="" className="pr-0 pl-0 green_color">
                      <FaPinterestP className="is-size-4" />
                    </a>
                    <a href="" className="pl-4 green_color">
                      <BsFacebook className="is-size-4" />
                    </a>
                    <a
                      href="https://instagram.com/digvijaysingh_artwear?igshid=YmMyMTA2M2Y="
                      className="pl-4 green_color"
                    >
                      <BsInstagram className="is-size-4" />
                    </a>
                    <a href="" className="pl-4 green_color">
                      <BsWhatsapp className="is-size-4" />
                    </a>
                  </div>
                </div>
              </div>
            )} */}
        </div>
        <div className="main_nav">

          {headeritemleft.map((item, key) => {
            return (
              <div className="header_wrapper">
                <Link
                  className="navbar-item header_item hoverheader_item"
                  to={item.headlink}
                >
                  {item.headname}
                </Link>
              </div>
            );
          })}
          {headeritemright.map((item, key) => {
            return (
              <div className="header_wrapper">
                <Link
                  className="navbar-item header_item hoverheader_item"
                  to={item.headlink}
                >
                  {item.headname}
                </Link>
              </div>
            );
          })}
        </div>
      </nav>
      {/* <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="container navigation">
          <div className="navbar-brand">
            <a className="navbar-item logo" href="\"></a>

            <a
              role="button"
              className={`my-auto navbar-burger ${isActive ? "is-active" : ""}`}
              onClick={() => {
                setIsActive(!isActive);
              }}
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div className="navbar-end">
            <div
              className="navbar-end navbar_line my-auto"
              style={{
                width: width >= 1024 && "100%",
                display: width >= 1024 && "flex",
                justifyContent: width >= 1024 && "center",
              }}
            ></div>
          </div>
          <div
            id="navbarBasicExample"
            className={`borderXwidth navbar-menu ${
              isActive ? "is-active" : ""
            }`}
          >
            <div
              className="navbar-end navbar_line my-auto"
              style={{
                width: width >= 1024 && "100%",
                display: width >= 1024 && "flex",
                justifyContent: width >= 1024 && "center",
              }}
            >
              {headeritemleft.map((item, key) => {
                return (
                  <div className="header_wrapper">
                    <Link
                      className="navbar-item header_item hoverheader_item"
                      to={item.headlink}
                    >
                      {item.headname}
                    </Link>
                  </div>
                );
              })}
              {headeritemright.map((item, key) => {
                return (
                  <div className="header_wrapper">
                    <Link
                      className="navbar-item header_item hoverheader_item"
                      to={item.headlink}
                    >
                      {item.headname}
                    </Link>
                  </div>
                );
              })}
            </div>
            {width > 1023 && (
              <div className="navbar-end">
                <div className="navbar-item">
                  <div
                    style={{
                      display: "flex",
                      textAlign: "center",
                      lineHeight: "0",
                    }}
                  >
                    <a href="" className="pr-0 pl-0 green_color">
                      <FaPinterestP className="is-size-4" />
                    </a>
                    <a href="" className="pl-4 green_color">
                      <BsFacebook className="is-size-4" />
                    </a>
                    <a
                      href="https://instagram.com/digvijaysingh_artwear?igshid=YmMyMTA2M2Y="
                      className="pl-4 green_color"
                    >
                      <BsInstagram className="is-size-4" />
                    </a>
                    <a href="" className="pl-4 green_color">
                      <BsWhatsapp className="is-size-4" />
                    </a>
                  </div>
                </div>
              </div>
            )}
            {width < 1024 && <div className="navbar-end"></div>}
          </div>
        </div>
      
      </nav>  */}
    </>
  );
};
export default Header;
