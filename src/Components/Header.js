import React, { Component } from "react";
import MouseParticles from 'react-mouse-particles'
import { Fade } from 'react-awesome-reveal';

import ParticlesBackground from "../Components/ParticlesBackground";

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    // const project = this.props.data.project;
    // const github = this.props.data.github;
    // const name = this.props.data.name;
    const description = this.props.data.description;

    return (
      <header id="home">
        <ParticlesBackground />
        <MouseParticles
          g={2.3}
          num={1}
          radius={8}
          life={0.8}
          v={1.2}
          color="random"
          alpha={0.16}
          level={6}/>

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#portfolio">
                Works
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline"><div className="underline-magic underline-magic--gradient">Hi, I'm Billy</div></h1>
            </Fade>
            <Fade bottom>
              <p className="subtitle-text">Full Stack Developer  <span>&bull;</span> Game Developer</p>
            </Fade>
            <br />
            <Fade bottom duration={1200}>
              <h3 className="underline-effect underline-effect--gradient" style={{ whiteSpace: 'pre-line' }}>{description}.</h3>
            </Fade>
            <hr />
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
