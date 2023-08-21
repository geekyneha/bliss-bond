import React from "react";
import style from "./testimonials.module.css";
import useFetchData from "../../hooks/useFetchData";

const Testimonials = ({ endpoint }) => {
  const info = useFetchData(endpoint);
  return (
    <section className={style["section"]}>
      <h1>Hear from Our custmers</h1>
      <div className={style["testimonial"]}>
        {info.map((feedback) => (
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
    </section>
  );
};

export default Testimonials;
