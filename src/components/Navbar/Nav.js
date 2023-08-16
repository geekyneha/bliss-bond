import React from "react";
import style from "./navbar.module.css";
import Search from "../serch/Search";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiTwotoneSnippets } from "react-icons/ai";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav>
        <div className={style.container}>
          <Link to={"/"} className={style["link"]}>
            <div>
              <img
                src="https://cdn.dribbble.com/users/1985786/screenshots/5363979/gif.gif"
                alt="bliss-bond"
                width={50}
                height={50}
                className={style.logo}
              />
              <figcaption className={style["brand-name"]}>
                Bliss Bond
              </figcaption>
            </div>
          </Link>

          <div>
            <Search />
          </div>
          <div className={style["right-options"]}>
            <div className={style["booking"]}>
              <AiTwotoneSnippets size={25} fill="#FE6180" />
            </div>

            <div className={style["account"]}>
              <BsFillPersonLinesFill size={25} />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
