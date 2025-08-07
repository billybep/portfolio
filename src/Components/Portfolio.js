import React, { Component } from "react";
import Zmage from "react-zmage";
// import Fade from "react-reveal";
import { Fade } from 'react-awesome-reveal';

// import Spline from '@splinetool/react-spline';

class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects, index) {
    let projectImage = "images/portfolio/" + projects.image;

    return (
      <div key={index} className="columns portfolio-item">
        <div className="item-wrap">
          <a href={projects.url} target="_blank" rel="noopener noreferrer">
            <Zmage 
              alt={projects.title} 
              src={projectImage} 
              className="portfolio-image"
            />
            <div className="overlay">
              <div className="portfolio-item-meta">
                <h5>{projects.title}</h5>
                <p>{projects.category}</p>
              </div>
            </div>
          </a>
          <div className="project-title">{projects.title}</div>
        </div>
      </div>
    );
  });


    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h2 className="portfolio-title">Live Projects I’ve Contributed To as a Developer.</h2>
              <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
