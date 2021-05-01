import React from "react";
import Typed from "react-typed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faDownload } from "@fortawesome/free-solid-svg-icons";

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
          <a href="" className="btn-contact">
            <FontAwesomeIcon
              icon={faDownload}
              style={{ color: "white", paddingRight: "5px" }}
            />{" "}
            Download My CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
