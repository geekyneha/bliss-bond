import React from "react";
import style from "./services.module.css";
import { services } from "../../constants/constants";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      <div className={style["service-container"]}>
        {services.map((service) => (
          <Link to={service.path} className={style["link"]}>
            <div key={service.id} className={style["service"]}>
              <service.icon size={25} fill="gray" />
              <div>{service.label}</div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Services;
