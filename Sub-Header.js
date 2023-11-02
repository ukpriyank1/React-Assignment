import React from "react";
import CategoryIcon from "@mui/icons-material/Category";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import "./Sub-Header.css";

function SubHeader() {
  return (
    <div className="MainSubHeader">
      <div className="Row-Sub-Header">
        <div className="leftItems">
          <button className="all_catgry">
            <CategoryIcon className="CategoryIcon" />
            Browse All Categories
            <ExpandMoreIcon className="ExpandMoreIcon" />
          </button>

          <p>
            <LocalOfferIcon className="LocalOfferIcon" /> Hot Deals
          </p>

          <ul>
            <li className="list">
              Home <ChevronRightIcon />
            </li>
            <li className="list">About</li>
            <li className="list">
              Shop <ExpandMoreIcon className="ExpandMoreIcon1" />
            </li>
            <li className="list">
              Vendors <ExpandMoreIcon className="ExpandMoreIcon1" />
            </li>
            <li className="list">
              Mega menu <ExpandMoreIcon className="ExpandMoreIcon1" />
            </li>
            <li className="list">
              Blog <ExpandMoreIcon className="ExpandMoreIcon1" />
            </li>
            <li className="list">
              Pages <ExpandMoreIcon className="ExpandMoreIcon1" />
            </li>
            <li className="list">Contact</li>
          </ul>
        </div>

        <div className="c_support">
          <SupportAgentIcon className="SupportAgentIcon" />
          <div className="contactUs">
            <h3>1900-888</h3>
            <p>24/7 Support Center</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubHeader;
