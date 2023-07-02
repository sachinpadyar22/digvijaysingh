import { ImageList, ImageListItem } from "@mui/material";
import { Image } from "antd";
import React, { useEffect, useState } from "react";
import { contactImages } from "../../constants/contactimages";

const Shop = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);

  let cols = 4;
  if (width < 600) {
    cols = 2;
  } else if (width < 1200) {
    cols = 3;
  }
  return (
    <>
      <section className="move_gallery">
        <div className="move_img">
          <div className="box_wrapper"></div>

          {/* <div className="box_text">
            <div className="section_heading has-text-centered">
              <p className="is-size-4">Contact Us</p>
            </div>
            <div className="box_gallery">
                <ImageList cols={cols} className="Py-4">
                  {contactImages.map((item, key) => {
                    let style = item.style || {};
                    return (
                      <>
                        <ImageListItem
                          rows={item.rows}
                          cols={item.cols}
                          key={key}
                        >
                          <Image
                            src={item.src}
                            alt={item.alt || "404 - Not Found"}
                            style={{ ...style }}
                          />
                        </ImageListItem>
                        <div className="p-5 has-background-black has-text-white-ter">
                          <div className="text_div">
                            <p className="is-size-4 has-text-centered pb-3">
                              {item.contacttext}
                            </p>
                            <p className="has-text-centered">
                              {item.contentpara}
                            </p>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </ImageList>
              </div>
          </div> */}
        </div>
      </section>
      <section style={{ background: "#4e4e4e;" }}>
        <div className="section_padding"></div>
        <div className="container">
          <div className="box">
            <ImageList cols={cols} className="Py-4">
              {contactImages.map((item, key) => {
                let style = item.style || {};
                return (
                  <>
                    <ImageListItem rows={item.rows} cols={item.cols} key={key}>
                      <div className="img_wrapper">
                        <img
                          src={item.src}
                          alt={item.alt || "404 - Not Found"}
                          style={{ ...style }}
                          className="shop_img"
                        />
                      </div>
                    </ImageListItem>
                    <div className="p-5 has-background-black has-text-white-ter">
                      <div className="text_div">
                        <p className="is-size-4 has-text-centered pb-3">
                          {item.contacttext}
                        </p>
                        <p className="has-text-centered">{item.contentpara}</p>
                      </div>
                    </div>
                  </>
                );
              })}
            </ImageList>
          </div>
        </div>
        <div className="section_padding"></div>
      </section>
    </>
  );
};

export default Shop;
