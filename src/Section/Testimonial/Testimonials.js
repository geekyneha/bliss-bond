import React, { useRef } from "react";
import style from "./testimonials.module.css";
import useFetchData from "../../hooks/useFetchData";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import CardShimmer from "./CardShimmer";

const Testimonials = ({ endpoint }) => {
  const info = useFetchData(endpoint);
  const testimonialRef = useRef(null);

  const scrollLeft = () => {
    testimonialRef.current.scrollBy({
      left: 500,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    testimonialRef.current.scrollBy({
      left: -500,
      behavior: "smooth",
    });
  };

  return (
    <section className={style["section"]}>
      <BiSolidLeftArrow
        size={25}
        className={style["scroll-left"]}
        onClick={scrollRight}
      />
      <div className={style["testimonial"]} ref={testimonialRef}>
        {info.length === 0
          ? Array(5)
              .fill()
              .map((_, index) => <CardShimmer key={index} />)
          : info.map((feedback) => (
              <div className={style["card"]} key={feedback.id}>
                <div className={style["feedBack"]}>
                  <p className={style["feedback-message"]}>
                    <q>{feedback.message}</q>
                  </p>
                </div>
                <div className={style["user"]}>
                  <img
                    src={feedback.user_profile}
                    alt="user"
                    className={style["user-image"]}
                    width={50}
                    height={50}
                  />
                  <div>{feedback.user_name}</div>
                </div>
              </div>
            ))}
      </div>
      <BiSolidRightArrow
        size={25}
        className={style["scroll-right"]}
        onClick={scrollLeft}
      />
    </section>
  );
};

export default Testimonials;
