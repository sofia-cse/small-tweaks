import React, { Component } from "react";
import logo from '../img/logo@2x.png';
import menuIcon from '../img/menu-icon@2x.png'
import closeIcon from '../img/close-icon@2x.png';
import { Fade } from 'react-awesome-reveal';

class SmallTweaksNavBar extends Component {

  constructor() {
    super();
    this.state = {
      name: "React",
      showHideContactSmallTweaksNav: false,
    };
    this.hideComponent = this.hideComponent.bind(this);
  }


  hideComponent(name) {
    console.log(name);
    switch (name) {
      case "showHideSmallTweaksNav":
        this.setState({ showHideSmallTweaksNav: !this.state.showHideSmallTweaksNav });
        break;
      default:
        this.setState(null);
    }
  }


  render() {
    const { showHideSmallTweaksNav } = this.state;

    return ( 
      <div className="header">
          <div className="brand">
            <div className="text-logo"><a href="#hero"><img src={logo} alt="logo" width={194} /></a></div>
            <div className="tagline"><p>Get the most out of what you've got.</p></div>
          </div>
          <div className="main-nav">
            <div className="desktop main-menu">
              <a href="#intro" data-text="What We Do">What We Do</a>
              <a href="#howitworks" data-text="How It Works">How It Works</a>
              <a href="#testimonials" data-text="Testimonials">Testimonials</a>
              <a href="#faq" data-text="FAQs">FAQs</a>
              <a href="#contact" data-text="Contact">Contact</a>
            </div>
            <Fade when={this.props.dataFromParent} duration={2000} delay={150}><a href="https://app.monstercampaigns.com/c/yismlgmgd8uw9zenwo7c/" target="_blank" rel="noopener noreferrer" className="contact-button smallblue my-auto">Request Your UX Audit</a></Fade>
            <button className="menu-button laptop-menu p-0" onClick={() => this.hideComponent("showHideSmallTweaksNav")}>
              <img src={menuIcon} alt="menu icon" className="my-auto" width={18} style={{marginRight: 9}} />
              <span className="menu-label">Menu</span>
            </button>
          </div>
        {showHideSmallTweaksNav && <div className="nav-menu">
        <button className="menu-button" onClick={() => this.hideComponent("showHideSmallTweaksNav")}>
              <img src={closeIcon} alt="menu icon" width={18} />
            </button>
          <ul>
            <li><a href="#intro">What We Do</a></li>
            <li><a href="#howitworks">How It Works</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>}
      </div>
    );
  }
}

export default SmallTweaksNavBar;