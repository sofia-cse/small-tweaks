import React, { Component } from "react";

class ContactForm1 extends Component {
  constructor() {
    super();
    this.state = {
      name: " ",
      email: " ",
      phone: " ",
    };
  }

  render() {
    return ( 
    <div>
        <label htmlFor="name" required>Your Name</label><br />
        <input type="text" id="name" name="name" onChange={this.handleChange} value={this.state.name} style={{width: "100%"}} /><br />
        <label htmlFor="email">Work Email</label><br />
        <input type="email" id="email" name="email" onChange={this.handleChange} value={this.state.email} required style={{width: "100%"}} /><br />
        <label htmlFor="phone">Phone</label><br />
        <input type="tel" id="phone" name="phone" onChange={this.handleChange} value={this.state.phone} style={{width: "100%"}} /><br />
        <div className="text-center">
          <input type="submit" className="mx-auto contact-button" value="Send" />
        </div>
    </div>
    );
  }
}

export default ContactForm1;