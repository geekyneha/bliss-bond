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
          <p>Support</p>
          <p>Help center</p>
          <p>Cancellation option</p>
          <p>Contact us</p>
        </div>
        <div>
          <p>Support</p>
          <p>Help center</p>
          <p>Cancellation option</p>
          <p>Contact us</p>
        </div>
        <div>
          <p>Support</p>
          <p>Help center</p>
          <p>Cancellation option</p>
          <p>Contact us</p>
        </div>
      </div>
      <div className={style["fotter-bottom"]}>
        <div className={style["company"]}>
          <div> ©2023 blissbond ,inc</div>
          <Link>. Terms</Link>
          <Link>. Privacy</Link>
          <Link>. company detail </Link>
        </div>

        <div className={style["more-detail"]}>
          <div>ENG(IN)</div>
          <div> ₹ INR</div>
          <div className={style["cta"]}>
            <Link>
              <AiFillFacebook size={25} fill="gray" />
            </Link>
            <Link>
              <AiFillTwitterSquare size={25} fill="gray" />
            </Link>
            <Link>
              <AiFillInstagram size={25} fill="gray" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
