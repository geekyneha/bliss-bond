import React from "react";

import style from "./home.module.css";
import Wedding from "../../components/Decoration/Decoration";
import { Invitation } from "../../components/Invitation/Invitation";

export const Home = () => {
  return (
    <div className={style.main}>
      <div className={style["hero"]}>
        <div className={style.content}>
          <h1 className={style["tagline"]}>
            Your Vision, Our Expert Craftsmanship
          </h1>
        </div>
        <div className={style.image}>
          <img
            src="https://img.freepik.com/premium-vector/wedding-planner-professional-organizer-planning-wedding-event_277904-14377.jpg"
            alt="wedding-organizing-image"
            className={style["hero-image"]}
          />
        </div>
      </div>

      <Invitation />
    </div>
  );
};
