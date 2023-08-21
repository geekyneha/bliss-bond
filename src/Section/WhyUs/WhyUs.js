import React from "react";
import style from "./whyus.module.css";
import { MdDiversity1, MdWorkspacePremium } from "react-icons/md";

const WhyUs = () => {
  return (
    <section className={style["section-whyus"]}>
      <div className={style["why-us"]}>
        <img
          src="https://static.vecteezy.com/system/resources/previews/007/145/508/original/wedding-organizer-providing-decoration-service-or-making-plans-before-married-ceremony-in-flat-background-cartoon-style-illustration-vector.jpg"
          alt="wedding organizer"
          className={style["why-us-image"]}
        />
        <div>
          <h1 className={style["why-us-heading"]}>What sets us apart!</h1>
          <div>
            <div className={style["feature"]}>
              <div className={style["icon"]}>
                <MdDiversity1 size={25} />
              </div>
              <div>creative visionaries</div>
            </div>
            <p className={style["why"]}>
              We understand that your wedding day is not just an event; it's a
              chapter in your love story. That's why we're dedicated to crafting
              weddings that are as unique and special as the love you share.
              With years of experience in wedding planning and a team of
              creative visionaries, we're here to transform your vision into a
              breathtaking reality..
            </p>
          </div>
          <div>
            <div className={style["feature"]}>
              <div>
                <MdWorkspacePremium size={25} />
              </div>
              <div>Perfect Precision</div>
            </div>
            <p className={style["why"]}>
              Our meticulous attention to detail ensures that every element of
              your wedding is flawlessly executed, from the venue and decor to
              the cuisine and entertainment. We work closely with you, listening
              to your desires, and weaving them into the fabric of your special
              day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
