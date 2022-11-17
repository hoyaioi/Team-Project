import React from "react";
import MemList from "./MemList";

const MemMenu = ({ list, onList }) => {
  return (
    <div className="service_board_hot">
      <ul>
        {list.map((mem, idx) => (
          <MemList key={idx} mem={mem} onList={onList} />
        ))}
      </ul>
    </div>
  );
};

export default MemMenu;
