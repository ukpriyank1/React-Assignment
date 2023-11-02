import React from "react";
import "./nav.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LanguageIcon from "@mui/icons-material/Language";

let SubNav = () => {
  return (
    <>
      <div className="rowSubNav">
        <div className="sub-nav">
          <ul>
            {" "}
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">My Amount</a>
            </li>
            <li>
              <a href="#">Whishlist</a>
            </li>
            <li>
              <a href="#">Order Tracking</a>
            </li>
          </ul>

          <p className="detail">
            Get great services up to 50% off <a href="#"> View Details</a>
          </p>

          <div className="d-info">
            <p>
              Need Help? Call Us* <span>1800 900</span>
            </p>

            <div className="lang">
              <LanguageIcon className="languageIcon" /> English{" "}
              <ExpandMoreIcon className="expandmoreicon" />
            </div>
            <div className="currency">
              USD <ExpandMoreIcon className="expandmoreicon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubNav;
