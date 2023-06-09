import React from "react";
import Slider from 'infinite-react-carousel';
import "./slider1.css";
import image1 from "./icons/Vector (12).png";
import image2 from "./icons/Vector (5).png";
import image3 from "./icons/Vector (6).png";
import image4 from "./icons/Vector (7).png";
import image5 from "./icons/Vector (8).png";
import image6 from "./icons/icon.png";
import image7 from "./icons/Vector (11).png";
import image8 from "./icons/Vector (9).png";
import image9 from "./icons/Vector (10).png";

function Slider1() {
   
  return (
      <div className="in_slider">
      <Slider dots={false} slidesToShow={2} arrows={false} autoplay={true}>
       <div className="card">
        <div className="cardhedder">
          <div>
            <div className="header">
              <div className="bell">
                <img className="bell1" src={image1} />
                <img className="bell2" src={image2} />
              </div>
              <p>Save</p>
            </div>
            <div className="note">
              <p>We’ll be sending notifications to you here</p>
            </div>
            <div className="mail_box">
              <p>hello@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="header">
          <div className="wallet">
            <img className="wallet1" src={image3} />
            <img className="wallet2" src={image4} />
            <img className="wallet3" src={image5} />
          </div>
          <img className="right" src={image6} />
        </div>
        <div className="wallet_note">
          <p>Notify me when any wallets move more than</p>
        </div>
        <div className="moneybox">
          <p>$1,000.00</p>
          <img src={image7} />
        </div>
      </div>
      <div className="card">
        <div className="header">
          <div className="time">
            <img className="time1" src={image8} />
            <img className="time2" src={image9} />
          </div>
          <img className="right" src={image6} />
        </div>
        <div className="time_note">
          <p>Notify me when any wallet dormant for</p>
        </div>
        <div className="moneybox">
          <p>30 days</p>
          <img src={image7} />
        </div>
        <div className="end">
          <p>becomes active</p>
        </div>
      </div>
       </Slider>
      </div>
  );
}

export default Slider1;
