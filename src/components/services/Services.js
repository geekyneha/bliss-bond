import React from "react";
import style from "./services.module.css";
import { services } from "../../constants/constants";

const Services = () => {
  return (
    <>
      <div className={style["service-container"]}>
        {services.map((service, id) => (
          <div key={service.id}>
            <service.icon size={25} fill="gray" />
            <p>{service.label}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Services;
