import React, { useState } from "react";
import "../slider.scss";

const ImgComp = ({ src }) => {
  let imgStyles = {
    width: 100 + "%",
    height: "auto"
  };
  return <img src={src} alt="slide-img" style={imgStyles}></img>;
};

export default ImgComp;
