import React from "react";
import style from "./decoration-shimmer.module.css";
const DecorationShimmer = () => {
  return (
    <div className={style["container"]}>
      <div className={style["card"]}>
        <div className={style["decoration"]}></div>

        <div className={style["decoration-detail"]}>
          <span></span>
          <div className={style["rating"]}></div>
        </div>
        <span className={style["cost"]}></span>
      </div>
    </div>
  );
};

export default DecorationShimmer;
