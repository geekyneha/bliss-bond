import React from "react";
import style from "./professional-shimmer.module.css";

const ProfessionalShimmer = () => {
  return (
    <div className={style["card"]}>
      <div className={style["professinal-image"]}></div>
      <div className={style["name"]}></div>
      <div className={style["detail"]}>
        <span></span>
        <div className={style["rating"]}>
          <div className={style["star"]}></div>
          <div className={style["rate"]}></div>
        </div>
      </div>

      <div className={style["cost"]}></div>
    </div>
  );
};

export default ProfessionalShimmer;
