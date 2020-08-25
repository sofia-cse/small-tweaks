import React, { Component } from "react";
import refreshIcon from '../img/refresh-icon@2x.png';

class Contact1 extends Component {
  
  constructor() {
    super();
    this.handleChange={
      cost: this.handleChange.bind(this, 'cost'),
      type: this.handleChange.bind(this, 'type'),
      message: this.handleChange.bind(this, 'message'),
      name: this.handleChange.bind(this, 'name'),
      email: this.handleChange.bind(this, 'email'),
      phone: this.handleChange.bind(this, 'phone')
    }
    this.state = {
      showHideContactForm1: false,
      done: false,
      cost: false,
      type: false,
      message: '',
      name: '',
      email: '',
      phone: '',
    };
    this.hideComponent = this.hideComponent.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  hideComponent(name,) {
    console.log(name);
    switch (name) {
      case "showHideContactForm1":
        this.setState({ showHideContactForm1: !this.state.showHideContactForm1 });
        break;
      default:
        this.setState(null);
    }
  }

refreshComponent(name,) {
    console.log(name);
    switch (name) {
      case "refreshContactForm":
        this.setState({ done: !this.state.done });
        break;
      default:
        this.setState(null);
    }
  }

  handleChange(name, event) {
    this.setState({ [name]: event.target.value });
  }

  handleSubmit (event) {
    event.preventDefault()

    const templateId = 'template_IClyReLt';
    this.sendFeedback(templateId, {cost: this.state.cost, type: this.state.type, message_html: this.state.message, from_name: this.state.name, reply_to: this.state.email, phone: this.state.phone});
    
    }

  
    sendFeedback (templateId, variables) {
      window.emailjs.send("mailgun", 'template_IClyReLt', variables, "user_DAxRhCUOWyZbMpVlmpKOk").then(res => {
        this.setState({ done: true});
      })
      // Handle errors here however you like, or use a React error boundary
      .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    }

  render() {
    const { showHideContactForm1 } = this.state;
    const { done } = this.state;
    return ( 
    <div>
        <h3 className="mx-auto"><b>I have a question.</b></h3>
        { !done && <div>
        <form id="contactForm1" className="contact_form text-left" onSubmit={this.handleSubmit}>
          <label htmlFor="cost" className="checkbox">
          <input type="checkbox" id="cost" name="cost" onChange={this.handleChange.cost} value="What does it cost?" /> What does it cost?</label><br />
          <label htmlFor="type" className="checkbox">
          <input type="checkbox" id="type" name="type" onChange={this.handleChange.type} value="Will this work for my type of business?" /> Will this work for my type of business?</label> <br />
          <label htmlFor="message" className="checkbox">
          <input type="checkbox" id="other" value="other" /> Other:</label><br />
          <textarea name="message" id="message" onChange={this.handleChange.message} value={this.state.message} style={{width: "100%"}}></textarea><br />
          {showHideContactForm1 && 
          
        <div>
          <label htmlFor="name">Your Name</label><br />
          <input type="text" id="name" required name="name" onChange={this.handleChange.name} value={this.state.name} style={{width: "100%"}} /><br />
          <label htmlFor="email">Work Email</label><br />
          <input type="email" id="email" name="email" onChange={this.handleChange.email} value={this.state.email} required style={{width: "100%"}} /><br />
          <label htmlFor="phone">Phone</label><br />
          <input type="tel" id="phone" name="phone" onChange={this.handleChange.phone} value={this.state.phone} style={{width: "100%"}} /><br />
          <div className="text-center">
            <input type="submit" className="mx-auto contact-button smallred" value="Send" />
          </div>
        </div>  
        }
        </form>
        <div className="text-center mx-auto">
        {!showHideContactForm1 && <button className="mx-auto contact-button smallred" onClick={() => this.hideComponent("showHideContactForm1")}>
            Next
        </button>}
        <br />
        </div>
      </div>}
      { done && 
        <div>
          <p className="success">We got your message, and we’ll get back to you shortly.</p>
          <button className="refresh" onClick={() => this.refreshComponent("refreshContactForm")}><img src={refreshIcon} width={38} alt="refresh form" className="success" /></button>
        </div>
      }
    </div>
    );
  }
}

export default Contact1;