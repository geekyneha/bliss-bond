import React from "react";
import style from "./search.module.css";

const Search = () => {
  return (
    <div className={style.search}>
      <input
        type="text"
        name=""
        id=""
        placeholder="Search destinations"
        className={style["rounded"]}
      />
      <button className={style["rounded"]}>Check in date</button>
      <button className={style["rounded"]}>Check out date</button>
      <button className={style["guest"]}>
        Add guests <button className={style["search-button"]}>Serch</button>
      </button>
    </div>
  );
};

export default Search;
