import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div>
      <div className="header-wraper">
        <div className="main-info">
          <h1>Frontend web Development | React | Node JS | Mongo DB</h1>
          <Typed
            className="typed-text"
            strings={[
              "Web Development",
              "React JS",
              "Node JS",
              "Express Js",
              "React Bootstrap",
              "Mongo DB",
            ]}
            typeSpeed={40}
            backSpeed={60}
            loop
          />
          <a href="" className="btn-contact">
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
