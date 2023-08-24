import React from "react";
import style from "./professinal.module.css";
import useFetchData from "../../hooks/useFetchData";
import { BsStarFill } from "react-icons/bs";
import ProfessionalShimmer from "./ProfessionalShimmer";

const Professional = ({ endpoint }) => {
  const info = useFetchData(endpoint);
  return (
    <div className={style["container"]}>
      {info.length === 0
        ? Array(16)
            .fill()
            .map((_, index) => <ProfessionalShimmer key={index} />)
        : info.map((data, index) => (
            <div className={style["card"]} key={index}>
              <img
                src={data.imageUrl}
                alt="event-profeesinals"
                className={style["professinal-image"]}
              />
              <div className={style["name"]}>{data.name}</div>
              <div className={style["detail"]}>
                <span>{data.experience}</span>
                <div className={style["rating"]}>
                  <div className={style["star"]}>
                    <BsStarFill fill="white" />
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

export default Professional;
