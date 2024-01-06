import React from "react";
import stadium from "../assets/images/stadium.jpg";
import virat from "../assets/images/virat.png";
import "./Home.css";
// import style from "../style/home.module.scss";
// import style from "../Screens/Home.css"
// import style from "../style/home.module.scss";

const Home = () => {
  return (
    <div>
      <div style={{ backgroundColor: "black",position:"relative", }}>
        <img
          src={stadium}
          style={{
            
            width: "100%",
            height: "80vh",
            objectFit: "cover",
          }}
      
        />
        <div></div>
        <div  style={{
              position:"absolute",
              borderTopLeftRadius:"50px",
              borderTopRightRadius:"50px",
            padding:"20px  50px",
              left:"33%",
             bottom:"0%",
             background:"#fff",
             display:"flex",
alignItems:"center",
gap:"30px"             
            }}>
              <div className="letsstarts">GET STARTED <br></br> CRICHOUR OFFICIALS</div>
            <div 
             style={{
              fontSize: "16px",
              fontWeight:"bold",
              padding:" 10px 20px",
              borderRadius:"20px",
              
             background:"#4da24d"
            }}
            >
              Login here
          </div>
          </div>
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
      <div  className="winprize">Play CrickHour Win And Win Cash Prizes Upto 1000000 INR</div>
      <div></div>
    </div>
  );
};

export default Home;
