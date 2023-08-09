import React from "react";
import style from "./navbar.module.css";
import Search from "../serch/Search";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Nav = () => {
  return (
    <>
      <nav>
        <div className={style.container}>
          <div>
            <img
              src="https://cdn.dribbble.com/users/1985786/screenshots/5363979/gif.gif"
              alt="bliss-bond"
              width={50}
              height={50}
              className={style.logo}
            />
            <figcaption>Bliss Bond</figcaption>
          </div>

          <div>
            <Search />
          </div>

          <div className={style["account"]}>
            <BsFillPersonLinesFill size={25} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
