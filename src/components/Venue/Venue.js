import React from "react";
import useFetchData from "../../hooks/useFetchData";
import style from "./venue.module.css";
import DecorationShimmer from "../Decoration/DecorationShimmer";

const Venue = ({ endpoint }) => {
  const info = useFetchData(endpoint);

  return (
    <div className={style["container"]}>
      {info.length === 0
        ? Array(20)
            .fill()
            .map((_, index) => <DecorationShimmer key={index} />)
        : info[0]?.venues?.map((data, index) => (
            <div className={style["card"]} key={index}>
              <img
                alt="venue"
                src={data.image_url}
                className={style["venue-image"]}
              />

              <div className={style["venue-detail"]}>
                <span>{data.venue_name}</span>
                <div className={style["rating"]}>
                  <div className={style["rate"]}>{data.capacity}</div>
                </div>
              </div>
              <div className={style["cost"]}>{data.price_range}</div>
            </div>
          ))}
    </div>
  );
};

export default Venue;
