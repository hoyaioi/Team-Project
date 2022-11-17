import React from "react";
import { Link } from "react-router-dom";
import "../CSS/List.css";
import MemInfo from "./MemInfo";

const MemberList = ({ memlist }) => {
  return (
    <>
      <div className="list-contents">
        {memlist.map((mem) => (
          <MemInfo key={mem.memIdx} mem={mem} />
        ))}
      </div>
    </>
  );
};

export default MemberList;
