import React from "react";
import stadium from "../assets/images/stadium.jpg";

const Feature = () => {
  return (
    <div>
      <img
        src={stadium}
        style={{
          width: "100%",
          height: "100vh",
          objectFit: "cover",
        }}
      />
    </div>
  );
};

export default Feature;
