import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Route, BrowserRouter, Routes, useLocation } from "react-router-dom";
import Home from "./components/home/home";
import { url } from "./constants/navhome";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import "antd/dist/antd.css";
import "bulma/css/bulma.css";
import "./main.css";
import Residential from "./components/residential/residential";
import Awards from "./components/awards/awards";
import Colletion from "./components/collection/collection";
import Events from "./components/events/events";
import Fashion from "./components/fashion/fashion";
import Shop from "./components/shop/shop";
import Collectionwomen from "./components/collection/collectionwomen";
import Aboutus from "./components/aboutus/aboutus";
import Contact from "./components/meetdesigner/contact";
import Collectionmen from "./components/collection/collectionmen";
import Lakmeone from "./components/fashion/lakmeone";
import Lakmetwo from "./components/fashion/lakmetwo";
import Lakmethree from "./components/fashion/lakmethree";
import Lakmefour from "./components/fashion/lakmefour";
import Lakmefive from "./components/fashion/lakmefive";


const Main = () => {
  const path = useLocation().pathname;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, [path]);
  return (
    <>
      <Header />
      <Routes>
        <Route path={url.home} element={<Home />} />
        <Route path={url.aboutus} element={<Aboutus />} />
        <Route path={url.Contact} element={<Contact />} />
        <Route path={url.residential} element={<Residential />} />
        <Route path={url.awards} element={<Awards />} />
        <Route path={url.colletion} element={<Colletion />} />
        <Route path={url.shop} element={<Shop />} />
        <Route path={url.fashion} element={<Fashion />} />
        <Route path={url.lakmeone} element={<Lakmeone />} />
        <Route path={url.lakmetwo} element={<Lakmetwo />} />
        <Route path={url.lakmethree} element={<Lakmethree />} />
        <Route path={url.lakmefour} element={<Lakmefour />} />
        <Route path={url.lakmefive} element={<Lakmefive />} />
        <Route path={url.events} element={<Events />} />
        <Route path={url.collectionwomen} element={<Collectionwomen />} />
        <Route path={url.collectionmen} element={<Collectionmen />} />
      </Routes>
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
