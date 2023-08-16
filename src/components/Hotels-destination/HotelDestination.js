import React from "react";
import useFetchData from "../../hooks/useFetchData";
import style from "./hotel-destination.module.css";
import { BsStarFill } from "react-icons/bs";

const HotelDestination = ({ endpoint }) => {
  const info = useFetchData(endpoint);
  // console.log(info[0].hotels[0].imageUrl);

  // const hotelInfo = info[0].hotels;
  // console.log(hotelInfo)

  return (
    <div className={style["container"]}>
      {info[0]?.hotels?.map((data, index) => (
        <div className={style["card"]} key={index}>
          <img
            alt="hotel-image"
            src={data.imageUrl}
            className={style["decoration-image"]}
          />

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
