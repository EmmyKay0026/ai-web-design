import React from "react";
import { ScrollingImg } from "../../molecule/ScrollingImg/ScrollingImg";

export const Clients = () => {
  return (
    <div className="clients">
      {" "}
      <div>
        <h3>Trusted by</h3>
      </div>
      <div className="scrolling-clint">
        {" "}
        <ScrollingImg />{" "}
      </div>
    </div>
  );
};
