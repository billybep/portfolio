import React, { Component } from "react";
import { Fade } from 'react-awesome-reveal';

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic = "images/" + this.props.data.image;
    const bio = this.props.data.bio;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const email = this.props.data.email;
    const resumeDownload = this.props.data.resumedownload;
    const linkedin = this.props.data.linkedin;

    return (
      <section id="about">
        <div className="about-container">
          <Fade cascade damping={0.1} duration={800}>
            <div className="profile-content">
              <div className="profile-pic-wrapper">
                <img
                  className="profile-pic"
                  src={profilepic}
                  alt="Profile"
                />
              </div>
              
              <div className="text-content">
                <h2>About Me</h2>
                <p className="bio-text">{bio}</p>
                
                <div className="contact-info">
                  <h3>Contact Details</h3>
                  <div className="details-grid">
                    <div className="detail-item">
                      <i className="fa fa-user"></i>
                      <span>{name}</span>
                    </div>
                    <div className="detail-item">
                      <i className="fa fa-map-marker"></i>
                      <span>{street}, {city}, {state} {zip}</span>
                    </div>
                    <div className="detail-item">
                      <i className="fa fa-phone"></i>
                      <a href={`tel:${phone}`}>{phone}</a>
                    </div>
                    <div className="detail-item">
                      <i className="fa fa-envelope"></i>
                      <a href={`mailto:${email}`}>{email}</a>
                    </div>
                    {linkedin && (
                      <div className="detail-item">
                        <i className="fa fa-linkedin"></i>
                        <a href={linkedin} target="_blank" rel="noopener noreferrer">
                          LinkedIn Profile
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="download-wrapper">
              <a 
                href={resumeDownload} 
                className="resume-btn"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <span className="btn-icon">
                  <i className="fa fa-download"></i>
                </span>
                <span className="btn-text">Download Resume</span>
                <span className="btn-hover-effect"></span>
              </a>
            </div>
          </Fade>
        </div>
      </section>
    );
  }
}

export default About;
