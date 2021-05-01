import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import alazin from "../Images/alazin.png";
import {
  faBars,
  faFileCode,
  faFighterJet,
} from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 500,
      height: 450,
    },
  }));

  const tileData = [
    {
      img: alazin,
      title: "Image",
      author: "author",
      cols: 1,
    },
  ];

  const classes = useStyles();
  return (
    <div className="projects">
      <div className="main-project-info">
        <div className="card" style={{ width: "50rem" }}>
          <img src={alazin} className="card-img-top" alt="a"></img>
          <div className="card-body">
            <h5 className="card-title">Alazin-mart</h5>
            <p className="card-text">
              Features:{" "}
              <ul>
                <li>
                  It’s an ecommerce website. For the frontend I used React,
                  React Router, Bootstrap, React-Bootstrap and MongoDB, Express
                  Js, Node Js has been used for the backend.
                </li>
                <li>
                  Key features: Add to Cart, User Authentication, Admin, CRUD,
                  Order etc.
                </li>
              </ul>
            </p>
            <a
              href="https://github.com/SagarH32/alazin-mart-backend"
              className="btn btn-success projects-btn"
            >
              <FontAwesomeIcon
                icon={faFileCode}
                style={{ color: "white", paddingRight: "3px" }}
              />
              Code Link
            </a>
            <a
              href="https://606af82fdadcd20008fb4974--nostalgic-leakey-346264.netlify.app/"
              className="btn btn-primary"
            >
              <FontAwesomeIcon
                icon={faFighterJet}
                style={{ color: "white", paddingRight: "3px" }}
              />
              Live Site
            </a>
          </div>
        </div>
        <br />
        <div className="card" style={{ width: "50rem" }}>
          <img src="#" className="card-img-top" alt="a"></img>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-success projects-btn">
              <FontAwesomeIcon
                icon={faFileCode}
                style={{ color: "white", paddingRight: "3px" }}
              />
              Code Link
            </a>
            <a href="#" className="btn btn-primary">
              <FontAwesomeIcon
                icon={faFighterJet}
                style={{ color: "white", paddingRight: "3px" }}
              />
              Live Site
            </a>
          </div>
        </div>
        <br />
        <div className="card" style={{ width: "50rem" }}>
          <img src="#" className="card-img-top" alt="a"></img>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-success projects-btn">
              <FontAwesomeIcon
                icon={faFileCode}
                style={{ color: "white", paddingRight: "3px" }}
              />
              Code Link
            </a>
            <a href="#" className="btn btn-primary">
              <FontAwesomeIcon
                icon={faFighterJet}
                style={{ color: "white", paddingRight: "3px" }}
              />
              Live Site
            </a>
          </div>
        </div>
        <br />
        <div className="card" style={{ width: "50rem" }}>
          <img src="#" className="card-img-top" alt="a"></img>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-success projects-btn">
              <FontAwesomeIcon
                icon={faFileCode}
                style={{ color: "white", paddingRight: "3px" }}
              />
              Code Link
            </a>
            <a href="#" className="btn btn-primary">
              <FontAwesomeIcon
                icon={faFighterJet}
                style={{ color: "white", paddingRight: "3px" }}
              />
              Live Site
            </a>
          </div>
        </div>
        <br />
        <div className="card" style={{ width: "50rem" }}>
          <img src="#" className="card-img-top" alt="a"></img>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-success projects-btn">
              <FontAwesomeIcon
                icon={faFileCode}
                style={{ color: "white", paddingRight: "3px" }}
              />
              Code Link
            </a>
            <a href="#" className="btn btn-primary">
              <FontAwesomeIcon
                icon={faFighterJet}
                style={{ color: "white", paddingRight: "3px" }}
              />
              Live Site
            </a>
          </div>
        </div>
      </div>
      <div className={classes.root}>
        <GridList cellHeight={160} className={classes.gridList} cols={3}>
          {tileData.map((tile) => (
            <GridListTile key={tile.img} cols={tile.cols || 1}>
              <img src={tile.img} alt={tile.title} />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </div>
  );
};

export default Projects;
