import logo from "./logo.svg";
import "./App.css";
import image from "./images/Vector.png";
import image1 from "./images/Cohorts 1.png";
import image2 from "./images/Vector (1).png";
import image3 from "./images/Vector (3).png";
import Slider1 from "./components/Slider1";
import Slider2 from "./components/Slider2";
import { useState } from "react";

function App() {
  const [values, setValues] = useState("");
  const [mail, setMail] = useState();

  const handelClick = (e) => {
    console.log("value---->", e.target.value);
    setValues(e.target.value);
  };

  const handelClick1 = () => {
    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(values)) {
      setMail("");
      var URL = "https://app.loch.one/welcome";
      // window.location(url);
      window.location.href = URL;
    } else {
      setMail("Please enter a valid email");
      console.log("invalid email, maybe show an error to the user.", values);
    }
  };
  return (
    <div className="App">
      <div className="main">
        <div className="split">
          <div className="label">
            <img src={image} />
            <h4>Get notified when a highly correlated whale makes a move</h4>
            <p>
              Find out when a certain whale moves more than any preset amount
              on-chain or when a dormant whale you care about becomes active.
            </p>
          </div>
          <div className="slider">
            <Slider1 />
          </div>
        </div>
        <div className="cohort">
          <div className="cohorts">
            <img src={image1} />
          </div>
          <div className="cohorts1">
            <img src={image3} />
            <h4>Watch what the whales are doing</h4>
            <p>
              All whales are not equal. Know exactly what the whales impacting
              YOUR portfolio are doing.
            </p>
          </div>
        </div>

        <div className="testimonials">Testimonials</div>
        <div className="line"></div>
        <div className="split">
          <div className="vector">
            <img src={image2} />
          </div>
          <div className="slider1">
            <Slider2 />
          </div>
        </div>
      </div>

      <div className="sign_up">
        <div className="sign">
          <h3>Sign up for exclusive access</h3>
          <input
            type="email"
            placeholder="Your email address"
            onChange={(e) => handelClick(e)}
          />
          <h4>{mail}</h4>
          <button onClick={handelClick1}>Get started</button>
          <p>You’ll receive an email with an invite link to join.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
