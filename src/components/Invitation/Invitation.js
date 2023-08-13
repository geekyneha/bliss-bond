import React from "react";
import useFetchData from "../../hooks/useFetchData";
import style from "./invitation.module.css";

export const Invitation = ({ endpoint }) => {
  const info = useFetchData(endpoint);
  console.log(info);
  return (
    <div className={style.container}>
      {info.map((data, index) => (
        <div key={index}>
          <img
            src={data.imageUrl}
            alt="invtation"
            width={150}
            className={style.image}
          />
        </div>
      ))}
    </div>
  );
};
