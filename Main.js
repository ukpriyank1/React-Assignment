import React from "react";
import "./Main.css";
import SendIcon from "@mui/icons-material/Send";

const Main = () => {
  return (
    <div className="center_items">
      <div className="Main_background">
        <h2>Don't miss amazing grocery deals</h2>
        <p>Sign up for the daily newsletter</p>
        <SendIcon className="SendIcon" />
        <input type="text" placeholder="Your email address" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default Main;
