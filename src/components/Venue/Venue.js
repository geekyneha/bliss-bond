import React from "react";
import useFetchData from "../../hooks/useFetchData";
import style from "./venue.module.css";

const Venue = ({ endpoint }) => {
  const info = useFetchData(endpoint);
  // console.log(info[0].hotels[0].imageUrl);

  // const hotelInfo = info[0].hotels;
  // console.log(hotelInfo)

  return (
    <div className={style["container"]}>
      {info[0]?.venues?.map((data, index) => (
        <div className={style["card"]} key={index}>
          <img
            alt="venue-image"
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
