import React from "react";

const FaqTopList = ({ faqlist }) => {
  const { title } = faqlist;
  return <li>{title}</li>;
};

export default FaqTopList;
