import React from "react";
import "../styles/Dashboard.css";
import iconFacebook from "../images/icon-facebook.svg";
import iconInstagram from "../images/icon-instagram.svg";
import iconDown from "../images/icon-down.svg";
import iconUp from "../images/icon-up.svg";
import iconYoutube from "../images/icon-youtube.svg";
import iconTwitter from "../images/icon-twitter.svg";

function Dashboard() {
  return (
    <div className="container">
      <div className="header">
        <div className="header-left">
          <h1>Social Media Dashboard</h1>
          <p>Total Followers: 23,004</p>
        </div>
      </div>
      <div className="head-dashboard">
        <div className="head-dashboard-left-top">
          <div className="head-dashboard-left-top1">
            <div className="top">
              <img src={iconFacebook} alt="facebook" />
              <span>@nathanf</span>
            </div>
            <div className="center">
              <h1>1987</h1>
              <h2>Followers</h2>
            </div>
            <div className="bottom">
              <img src={iconUp} alt="up" />
              <span>12 Today</span>
            </div>
          </div>
          <div className="head-dashboard-left-top2">
            <div className="top">
              <img src={iconTwitter} alt="twitter" />
              <span>@nathanf</span>
            </div>
            <div className="center">
              <h1>1044</h1>
              <h2>Followers</h2>
            </div>
            <div className="bottom">
              <img src={iconUp} alt="up" />
              <span>99 Today</span>
            </div>
          </div>
        </div>
        <div className="head-dashboard-right-bottom">
          <div className="head-dashboard-right-bottom1">
            <div className="top">
              <img src={iconInstagram} alt="Instagram" />
              <span>@realnathanf</span>
            </div>
            <div className="center">
              <h1>11k</h1>
              <h2>Followers</h2>
            </div>
            <div className="bottom">
              <img src={iconUp} alt="up" />
              <span>1099 Today</span>
            </div>
          </div>
          <div className="head-dashboard-right-bottom2">
            <div className="top">
              <img src={iconYoutube} alt="Youtube" />
              <span>@nathanf</span>
            </div>
            <div className="center">
              <h1>1044</h1>
              <h2>Subscribers</h2>
            </div>
            <div className="bottom">
              <img src={iconDown} alt="Down" />
              <span>144 Today</span>
            </div>
          </div>
        </div>
      </div>
      <div className="overview">
        <h1 className="overview-header">Overview Today</h1>
        <div className="overview-cards-top">
          <div className="overview-facebook">
            <div className="overview-facebook-views">
              <div className="overview-facebook-left">
                <h5>Page Views</h5>
                <h4>87</h4>
              </div>
              <div className="overview-facebook-right">
                <img src={iconFacebook} alt="facebook" />
                <span>
                  <img src={iconUp} />
                  3%
                </span>
              </div>
            </div>
            <div className="overview-facebook-likes">
              <div className="overview-facebook-left">
                <h5>Likes</h5>
                <h4>52</h4>
              </div>
              <div className="overview-facebook-right">
                <img src={iconFacebook} alt="facebook" />
                <span>
                  <img src={iconDown} />
                  2%
                </span>
              </div>
            </div>
          </div>
          <div className="overview-instagram"></div>
        </div>
        <div className="overview-cards-bottom">
          <div className="overview-twitter"></div>
          <div className="overview-youtube"></div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
