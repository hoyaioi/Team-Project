import React from "react";

const MemList = ({ mem, onList }) => {
  const { name, value } = mem;

  return <li onClick={() => onList(value)}>{name}</li>;
};

export default MemList;
