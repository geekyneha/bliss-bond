import React from "react";
import style from "./home.module.css";
import Testimonials from "../../Section/Testimonial/Testimonials";
import WhyUs from "../../Section/WhyUs/WhyUs";

export const Home = () => {
  return (
    <div className={style.main}>
      <div className={style["hero"]}>
        <div className={style.content}>
          <h1 className={style["heading"]}>
            Your Vision, Our Expert Craftsmanship
          </h1>
          <h3 className={style["tagline"]}>
            Celebrate Love's Journey with Bliss Bond <br />, Where Bonds and
            Bliss Unite.
          </h3>
          <p className={style["about"]}>
            At Bliss Bond Weddings, we are passionate about turning your dreams
            into reality. Our journey began with a simple yet profound idea: to
            create unforgettable moments that celebrate the unique bond between
            couples
          </p>

          <button className={style["button"]}>I am getting married </button>
        </div>

        <div className={style.image}>
          <img
            src="https://img.freepik.com/premium-photo/young-married-couple-posing-having-sniff-bouquet_13339-292922.jpg?w=1060"
            alt="wedding-organizing"
            className={style["hero-image"]}
          />
        </div>
      </div>
      <Testimonials endpoint={"/feedback"} />
      <WhyUs />
    </div>
  );
};
