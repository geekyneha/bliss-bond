import React, { useState } from "react";
import useFetchData from "../../hooks/useFetchData";
import style from "./invitation.module.css";
import Pagination from "../Pagination/Pagination";
import InvitationShimmer from "./InvitationShimmer";

export const Invitation = ({ endpoint }) => {
  const info = useFetchData(endpoint);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(16);

  console.log(info.length);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;

  const currentPosts = info.slice(firstPostIndex, lastPostIndex);
  return (
    <>
      <div className={style.container}>
        {info.length === 0
          ? Array(16)
              .fill()
              .map((_, index) => <InvitationShimmer key={index} />)
          : currentPosts.map((data, index) => (
              <div key={index}>
                <img
                  src={data.imageUrl}
                  alt="invtation"
                  width={150}
                  className={style.image}
                />
              </div>
            ))}
      </div>

      <Pagination
        totalPosts={info.length}
        postPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
};
