import React from "react";
import stadium from "../assets/images/stadium.jpg";
import virat from "../assets/images/virat.png";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div style={{ opacity: "0.6", backgroundColor: "black" }}>
        <img
          src={stadium}
          style={{
            width: "100%",
            height: "100vh",
            objectFit: "cover",
          }}
        />
      </div>
      {/* <div
        style={{
          position: "absolute",
          top: "10%",
          color: "white",
          fontSize: "50px",
          fontWeight: "bold",
          textAlign: "center",
          width: "100%",
          height: "90%",
          opacity: "0.6",
          backgroundColor: "black",
        }}
      ></div> */}
      <div>Play CrickHour Win And Win Cash Prizes Upto 1000000 INR</div>
    </div>
  );
};

export default Home;
