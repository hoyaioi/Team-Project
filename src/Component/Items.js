import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import dummy from "../dummy.json";

const Items = () => {
  return (
    <div className="main_items_sales">
      {dummy.topitem.map((item, id) => (
        <Link to="/item">
          <div key={id} className="main_items">
            <div className="main_items_img_wrap">
              <img src={item.img} />
            </div>
            <div className="main_items_name">{item.title}</div>
            <div className="main_items_price">{item.price}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Items;
