import React from "react";
import style from "./card-shimmer.module.css";
const CardShimmer = () => {
  return (
    <div className={style["card"]}>
      <div className={style["feedBack"]}>
        <p className={style["feedback-message"]}></p>
      </div>
      <div className={style["user"]}>
        <div className={style["user-image"]}></div>
        <div className={style["user-name"]}></div>
      </div>
    </div>
  );
};

export default CardShimmer;
