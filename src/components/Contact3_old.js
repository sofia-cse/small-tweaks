import React, { Component } from "react";
import ContactForm1 from "./ContactForm1";

class Contact3 extends Component {

  constructor() {
    super();
    this.state = {
      name: "React",
      showHideContactForm1: false
    };
    this.hideComponent = this.hideComponent.bind(this);
    this.state = { message: '', name: 'Name', email: 'email@example.com' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  hideComponent(name) {
    console.log(name);
    switch (name) {
      case "showHideContactForm1":
        this.setState({ showHideContactForm1: !this.state.showHideContactForm1 });
        break;
      default:
        this.setState(null);
    }
  }

  handleChange(event) {
    this.setState({message: event.target.value})
  }

  handleSubmit (event) {
    event.preventDefault()

    const templateId = 'template_IClyReLt';
    this.sendFeedback(templateId, {message_html: this.state.message, from_name: this.state.name, reply_to: this.state.email})
    }
  
    sendFeedback (templateId, variables) {
      window.emailjs.send("mailgun", 'template_IClyReLt', variables, "user_DAxRhCUOWyZbMpVlmpKOk").then(res => {
        console.log('Email successfully sent!')
      })
      // Handle errors here however you like, or use a React error boundary
      .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    }

  render() {
    const { showHideContactForm1 } = this.state;
    return ( 
      <div className="">
        <h3 className="mx-auto"><b>Deep down, I just want to be happy.</b></h3>
        <div className="text-left">
        <p>Good choice. Although we can’t promise you happiness, we can help your business out. And hey, that could make you truly happy after all :)</p>
        <div>
          {showHideContactForm1 && <p style={{paddingTop: 12}}>Let’s have a chat…</p>}
        </div>
        <form className="text-left contact_form" onSubmit={this.handleSubmit}>
        {showHideContactForm1 && <ContactForm1 />}
        </form>
        </div>
        <div className="text-center mx-auto">
        {!showHideContactForm1 && <button className="mx-auto contact-button" onClick={() => this.hideComponent("showHideContactForm1")}>
          Next
        </button>}
        </div>
      </div>
    );
  }
}

export default Contact3;