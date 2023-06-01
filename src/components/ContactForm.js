import React, { Component } from "react";
import refreshIcon from '../img/refresh-icon@2x.png';
import greyLine from '../img/grey-line.svg';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class ContactForm extends Component {
  
  constructor() {
    super();
    this.handleChange={
      message: this.handleChange.bind(this, 'message'),
      name: this.handleChange.bind(this, 'name'),
      email: this.handleChange.bind(this, 'email'),
      phone: this.handleChange.bind(this, 'phone')
    }
    this.state = {
      done: false,
      message: '',
      name: '',
      email: '',
      phone: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }



refreshComponent(name,) {
    console.log(name);
    switch (name) {
      case "refreshContactForm":
        this.setState({ done: !this.state.done });
        this.setState({
          message: '',
          name: '',
          email: '',
          phone: '',
        });
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
    this.sendFeedback(templateId, {message_html: this.state.message, from_name: this.state.name, reply_to: this.state.email, phone: this.state.phone});
    this.setState({ done: true})
    }

  
    sendFeedback (templateId, variables) {
      window.emailjs.send("mailgun", 'template_IClyReLt', variables, "user_DAxRhCUOWyZbMpVlmpKOk").then(res => {
        alert('Email successfully sent!');
      })
      // Handle errors here however you like, or use a React error boundary
      .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    }

  render() {
    const { done } = this.state;
    return ( 
    <div className="contact-form">
        <h3 className="mx-auto"><b>Let's Chat</b></h3>
        <img src={greyLine} alt="separator" width={96} style={{marginBottom: 20}} />
        { !done && <div>
        <form id="contactForm1" className="contact_form text-left" onSubmit={this.handleSubmit}>
          <Row>
            <Col md>
              <label htmlFor="message" className="checkbox">Question/Comment</label><br />
              <textarea name="message" id="message" onChange={this.handleChange.message} value={this.state.message}></textarea><br />
            </Col>
            <Col md>
              <label htmlFor="name" required>Your Name</label><br />
              <input type="text" id="name" name="name" onChange={this.handleChange.name} value={this.state.name} style={{width: "100%"}} /><br />
              <label htmlFor="email">Work Email</label><br />
              <input type="email" id="email" name="email" onChange={this.handleChange.email} value={this.state.email} required style={{width: "100%"}} /><br />
              <label htmlFor="phone">Phone</label><br />
              <input type="tel" id="phone" name="phone" onChange={this.handleChange.phone} value={this.state.phone} style={{width: "100%"}} /><br />
            </Col>
          </Row>
          <Row style={{marginTop: 31}}>
            <input type="submit" className="mx-auto contact-button smallblue" value="Send" />
          </Row>
        </form>
      </div>}
      { done && 
        <div>
          <p>We got your message, and we’ll get back to you shortly.</p>
          <button className="refresh" onClick={() => this.refreshComponent("refreshContactForm")}><img src={refreshIcon} width={38} alt="refresh form" /></button>
        </div>
      }
    </div>
    );
  }
}

export default ContactForm;