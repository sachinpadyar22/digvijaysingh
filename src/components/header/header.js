import React, { useEffect, useState, Component } from "react";
// import { FaPinterestP } from "react-icons/fa";
// import { BsFacebook } from "react-icons/bs";
// import { BsWhatsapp } from "react-icons/bs";
// import { BsInstagram } from "react-icons/bs";
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


  // const [isActive, setIsActive] = useState(false);

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const widthEvent = window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);
  return (
    <>
      <BackTop />






      <nav className="navbar navbarshadow navbar-expand-md d-flex flex-column">

        <div className="container  text-center">
          <div className="row w-100 ">
            <div className="col " id="col2">
              <div className="search-and-icons m-auto">
                <form className="d-flex mb-2 me-2" role="search">
                  <input placeholder="Search" style={{ border: "none" }}
                    className="form-control me-2"
                    type="search"
                    aria-label="Search"
                  />
                </form>

              </div>
            </div>
            <div className="col m-auto">
              <div className="mobile d-flex">

                <div className="d-flex m-auto">
                  <Link to="/" className="navbar-brand"><img className="img"
                    src="Sources/images/logo2.png"
                    alt="Logo"
                  /></Link>

                  <button
                    className="navbar-toggler collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"

                  >
                   
                    <span className="navbar-toggler-icon" />
                  </button>
                </div>

              </div>
            </div>
            <div className="col" id="col2">
              <div className="green_color m-auto">
                <div className="user-icons d-flex text-center justify-content-center">
                  <div className="profile me-3" >
                    <a href=""><i className="bi bi-instagram"></i></a>
                  </div>
                  {/* <div className="wishlist me-3">
                    <a href=""><i className="bi bi-meta" /></a>
                  </div> */}
                  <div className="cart">
                    <a href=""><i className="bi bi-youtube" /></a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>


        <div className="container-fluid" >
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto">

              <li>
                <Link className="nav-link d-sm-none" to="/aboutus"><span data-bs-target="#navbarSupportedContent" data-bs-toggle="collapse">About Us</span></Link>
                <Link to="/aboutus" className="nav-link d-none d-sm-block">About Us</Link>
              </li>
              <li >
                <Link to="/" className="nav-link d-sm-none"><span data-bs-target="#navbarSupportedContent" data-bs-toggle="collapse">Home</span></Link>
                <Link to="/" className="nav-link d-none d-sm-block">Home</Link>
                {/* <Link className="nav-link" to="/">Home</Link> */}
              </li>
              <li>
                <Link className="nav-link d-sm-none" to="/fashion" ><span data-bs-target="#navbarSupportedContent" data-bs-toggle="collapse">Fashion Week</span></Link>
                <Link to="/fashion" className="nav-link d-none d-sm-block">Fashion Week</Link>
              </li>
              {/* /----------mobile dropdown------------- */}
              <li>
                <div className="dropdown-center" style={{ paddingLeft: "11px" }} id="mobile_drop">
                  <button className="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <Link className="nav-link " to="/" >New Arrivals <span className="bi bi-caret-down-fill fs-6" id="diff"></span></Link>
                  </button>
                  <ul className="dropdown-menu" style={{ backgroundColor: "rgb(243, 243, 235)" }}>
                    <div className="d-flex ms-4 p-3">
                      <Link to="/" className="text-black">Mens Wear

                        <ul className="mini_ul me-4">
                          <li>Bandhgala Jackets</li>
                          <li>Waist Coats</li>
                          <li>Kurtas</li>
                          <li>Shirts</li>
                          <li>Sheervani</li>
                        </ul>
                      </Link>
                      <Link to="/" className="text-black" >Womens Wear
                        <ul className="mini_ul">
                          <li>Pret Wear</li>
                          <li>Signature Wear</li>

                        </ul></Link>
                    </div>
                  </ul>
                </div>

              </li>

              {/*-------------- pc dropdown -------------*/}
              <li >

                <div className="dropdown" id="pc_drop">
                  <button className="dropbtn"><Link className="nav-link" to="/" >New Arrivals <span className="bi bi-caret-down-fill fs-6 diff" id="diff"></span></Link></button>
                  <div className="dropdown-content" style={{ backgroundColor: "rgb(243, 243, 235)" }}>
                    <div className="d-flex">
                      <Link to="/" >Mens Wear

                        <ul className="mini_ul">
                          <li>Bandhgala Jackets</li>
                          <li>Waist Coats</li>
                          <li>Kurtas</li>
                          <li>Shirts</li>
                          <li>Sheervani</li>
                        </ul>
                      </Link>
                      <Link to="/" >Womens Wear
                        <ul className="mini_ul">
                          <li>Pret Wear</li>
                          <li>Signature Wear</li>

                        </ul></Link>
                    </div>


                  </div>
                </div>


                <ul className="dropdown-menu">
                  <li>
                    <Link className="nav-link" to="/" >Mens Wear</Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/" >Womens Wear</Link>
                  </li>


                </ul>
              </li>


              <li>
                <Link className="nav-link d-sm-none" to="/" ><span data-bs-target="#navbarSupportedContent" data-bs-toggle="collapse">Special Offers</span></Link>
                <Link to="/" className="nav-link d-none d-sm-block">Special Offers</Link>
                {/* <Link className="nav-link" to="/" >Special Offers</Link> */}
              </li>
              <li >
                <Link className="nav-link d-sm-none" to="/contact" ><span data-bs-target="#navbarSupportedContent" data-bs-toggle="collapse">Meet&nbsp;The&nbsp;Designer</span></Link>
                <Link to="/contact" className="nav-link d-none d-sm-block">Meet&nbsp;The&nbsp;Designer</Link>
                {/* <Link className="nav-link" to="/contact" >Meet&nbsp;The&nbsp;Designer</Link> */}
              </li>
              {/* <li >
                <Link className="nav-link d-sm-none" to="/blog" ><span data-bs-target="#navbarSupportedContent" data-bs-toggle="collapse">Blog</span></Link>
                <Link to="/blog" className="nav-link d-none d-sm-block">Blog</Link>

                <Link className="nav-link" to="/" >Blog</Link>
              </li> */}

            </ul>

            {/* <div className="contact-info d-md-flex">
        <p>+0987654321 | +1234567890 </p>
        <p>
          <a href="mailto:">contact@domainname.com</a>
        </p>
      </div> */}

          </div>
        </div>
      </nav>







    </>
  );
};
export default Header;
