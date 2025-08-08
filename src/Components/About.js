import React, { Component } from "react";
import { Fade } from 'react-awesome-reveal';

class About extends Component {
  constructor(props) {
    super(props);
    // Initialize state to store current bio and button status
    this.state = {
      currentBio: props.data?.bioFormal || '', // Default shows formal bio
      isBioCreative: false // Tracks if creative bio is being shown
    };
    this.timer = null; // Will store our timeout reference
  }

  componentDidMount() {
    // JIKA PROPS DATA TERDAPAT BIOFORMAL, SET SEBAGAI DEFAULT
    if (this.props.data?.bioFormal) {
      this.setState({ currentBio: this.props.data.bioFormal });
    }
  }

  componentWillUnmount() {
    // Clean up timer when component is removed to prevent memory leaks
    if (this.timer) clearTimeout(this.timer);
  }

  toggleBio = () => {
    const { bioCreative, bioFormal } = this.props.data;
    
    // Set state to show creative bio and disable button
    this.setState({
      currentBio: bioCreative,
      isBioCreative: true
    });

    // Set timeout to revert back after 10 seconds
    this.timer = setTimeout(() => {
      this.setState({
        currentBio: bioFormal,
        isBioCreative: false
      });
    }, 5000); // 10000ms = 10 seconds
  };

  render() {
    if (!this.props.data) return null;
    // Destructure state and props for cleaner code
    const { currentBio, isBioCreative } = this.state;

    const name = this.props.data.name;
    const profilepic = "images/" + this.props.data.image;

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
                {/* About Me Header with Toggle Button */}
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '20px', 
                    marginBottom: '15px' 
                  }}>
                    <h2>About Me</h2>
                    {/* Bio Toggle Button */}
                      <button 
                        onClick={this.toggleBio}
                        disabled={isBioCreative}
                        className="bio-toggle-btn"
                      >
                        <i className="fa fa-gamepad"></i>
                      </button>
                  </div>
                  
                {/* Animated Bio Text */}
                <p className={`bio-text ${isBioCreative ? 'creative-mode' : ''}`}>
                  {currentBio || this.props.data.bioFormal}
                </p>
                
                <div className="contact-info">
                  <h3>Contact Details-</h3>
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
