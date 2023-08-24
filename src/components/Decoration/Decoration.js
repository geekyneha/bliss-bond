import React from "react";
import style from "./decoration.module.css";
import useFetchData from "../../hooks/useFetchData";
import { BsStarFill } from "react-icons/bs";
import DecorationShimmer from "./DecorationShimmer";

const Decoration = ({ endpoint }) => {
  const info = useFetchData(endpoint);
  console.log(info);

  return (
    <div className={style["container"]}>
      {info.length === 0
        ? Array(20)
            .fill()
            .map((_, index) => <DecorationShimmer key={index} />)
        : info.map((data, index) => (
            <div className={style["card"]} key={index}>
              <img
                alt="decoration"
                src={data.imageUrl}
                className={style["decoration-image"]}
              />

              <div className={style["decoration-detail"]}>
                <span>{data.theme}</span>
                <div className={style["rating"]}>
                  <div className={style.star}>
                    <BsStarFill fill="#fff" />
                  </div>
                  <div className={style["rate"]}>{data.rating}</div>
                </div>
              </div>
              <div className={style["cost"]}>₹{data.cost}</div>
            </div>
          ))}
    </div>
  );
};

export default Decoration;
