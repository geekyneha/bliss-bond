import React from "react";
import style from "./footer.module.css";
import { Link } from "react-router-dom";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterSquare,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className={style["footer"]}>
      <div className={style["more-service"]}>
        <div>
          <h4>{"Support".toUpperCase()}</h4>
          <p>Register my business</p>
          <p>Help center</p>
          <p>Cancellation option</p>
          <p>Contact us</p>
        </div>
        <div>
          <h4>{"information".toUpperCase()}</h4>
          <p>About us</p>
          <p>Terms and Privacy </p>
          <p>Careers</p>
          <p>Our Team</p>
        </div>
        <div>
          <h4>{"Resources".toUpperCase()}</h4>
          <p>Blogs</p>
          <p>FAQ's</p>
          <p>Testimonials</p>
          <p>Write a feedback</p>
        </div>
      </div>
      <div className={style["fotter-bottom"]}>
        <div className={style["company"]}>
          <div> ©2023 blissbond ,inc</div>
          <Link className={style["link"]}>. Terms</Link>
          <Link className={style["link"]}>. Privacy</Link>
          <Link className={style["link"]}>. company detail </Link>
        </div>

        <div className={style["more-detail"]}>
          <div>ENG(IN)</div>
          <div> ₹ INR</div>
          <div className={style["cta"]}>
            <Link className={style["link"]}>
              <AiFillFacebook size={25} fill="white" />
            </Link>
            <Link className={style["link"]}>
              <AiFillTwitterSquare size={25} fill="white" />
            </Link>
            <Link className={style["link"]}>
              <AiFillInstagram size={25} fill="white" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
