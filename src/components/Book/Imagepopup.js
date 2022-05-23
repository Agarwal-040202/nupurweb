import React from "react";
import { data } from "./bookData";
import { AnimateSharedLayout, motion, AnimatePresence } from "framer-motion";

const Imagepopup = ({ poper, layoutId }) => {
  const singleImage = data.find((item) => item.id === layoutId);

  return (
    <>
      <div className="pop_up_container">
        <div className="close_button">
          <p>x</p>
        </div>
        <div className="pop_up_image">
          <img src={`${singleImage.image}`} layoutId={layoutId} />
        </div>
        <div className="pop_tabs">
          <div className="tab"></div>
        </div>
      </div>
    </>
  );
};

export default Imagepopup;
