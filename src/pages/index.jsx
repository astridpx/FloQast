import React from "react";
import "../CSS/index.css";
import Logo from "../assets/Logo.png";

const index = () => {
  return (
    <>
      <div className="container">
        <section>
          <div className="upper-box">
            <h1 className="logo-span black-text">
              <span>
                <img src={Logo} alt="Logo" />
              </span>
              The
            </h1>
            <h1 className="green-text">Fastest, Most Accurate</h1>
            <h1 className="black-text">Way to Close Your Books</h1>
          </div>

          {/* Bottom Box */}
          <div className="bottom-box">
            <div className="clip-path">
              <h1>SCHEDULE A DEMO</h1>
              <h3>Learn More About FloQast</h3>
            </div>
            <div className="right-box">
              <h1 className="tagline  black-text">
                Learn How FloQast Can
                <span className="green-text"> Improve Your Month-End</span>
              </h1>

              <div className="inputs">
                <input type="text" placeholder="First Name*" />
                <input type="email" placeholder="Email*" />
                <button> SCHEDULE NOW</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default index;
