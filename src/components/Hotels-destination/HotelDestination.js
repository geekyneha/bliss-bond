import React from "react";
import useFetchData from "../../hooks/useFetchData";
import style from "./hotel-destination.module.css";
import { BsStarFill } from "react-icons/bs";
import DecorationShimmer from "../Decoration/DecorationShimmer";

const HotelDestination = ({ endpoint }) => {
  const info = useFetchData(endpoint);

  return (
    <div className={style["container"]}>
      {info.length === 0
        ? Array(20)
            .fill()
            .map((_, index) => <DecorationShimmer key={index} />)
        : info[0]?.hotels?.map((data, index) => (
            <div className={style["card"]} key={index}>
              <img alt="hotel" src={data.imageUrl} className={style["hotel"]} />

              <div className={style["decoration-detail"]}>
                <span>{data.name}</span>
                <div className={style["rating"]}>
                  <div className={style.star}>
                    <BsStarFill fill="#fff" />
                  </div>
                  <div className={style["rate"]}>{data.rating}</div>
                </div>
              </div>
              <div className={style["cost"]}>₹{data.cost_per_night}</div>
            </div>
          ))}
    </div>
  );
};

export default HotelDestination;
