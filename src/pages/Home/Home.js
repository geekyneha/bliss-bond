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
            src="https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/298357744/original/e84c601e5ee30f9eb5e972911ea8dacec220911d.jpg"
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
