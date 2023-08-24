import React from "react";
import style from "./transportation.module.css";
import useFetchData from "../../hooks/useFetchData";
import DecorationShimmer from "../Decoration/DecorationShimmer";

const Transportation = ({ endpoint }) => {
  const info = useFetchData(endpoint);
  console.log(info);

  return (
    <div className={style["container"]}>
      {info.length === 0
        ? Array(20)
            .fill()
            .map((_, index) => <DecorationShimmer key={index} />)
        : info.map((data) => (
            <div className={style["card"]} key={data.id}>
              <img
                alt="decoration"
                src={data.image_url}
                className={style["transportaion-image"]}
              />

              <div className={style["transportaion-detail"]}>
                <div className={style["detail"]}>
                  <div className={style.star}>{data.company_name}</div>
                  <div className={style["pricing"]}>From {data.pricing}</div>
                </div>
                <div></div>
                <div>{data.vehicle_type}</div>

                {/* <button className={style["button"]}>Request Pricing</button> */}
              </div>
            </div>
          ))}
    </div>
  );
};

export default Transportation;
