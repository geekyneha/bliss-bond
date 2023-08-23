import React from "react";
import style from "./services.module.css";
import { services } from "../../constants/constants";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      <div className={style["service-container"]}>
        {services.map((service) => (
          <Link to={service.path} className={style["link"]} key={service.id}>
            <div className={style["service"]}>
              <service.icon size={25} className={style["icon"]} />
              <div>{service.label}</div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Services;
