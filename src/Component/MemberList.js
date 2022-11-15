import React from "react";
import "../CSS/List.css";

const MemberList = ({ memlist }) => {
  return (
    <>
      <div className="list-contents">
        {memlist &&
          memlist.map((mem) => (
            <ul key={mem.memIdx}>
              <li>
                <input type="checkbox" />
              </li>
              <li>{mem.memIdx}</li>
              <li>{mem.memName}</li>
              <li>{mem.memEmail}</li>
              <li>{mem.memRegDate}</li>
              <li>{mem.memDeletedYn}</li>
            </ul>
          ))}

        {memlist.length === 0 && (
          <div className="">일치하는 데이터가 없습니다.</div>
        )}
      </div>
    </>
  );
};

export default MemberList;
