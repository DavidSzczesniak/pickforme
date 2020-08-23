import React from "react";
import "./ContactForm.css";
import Button from "./Button";

const initialState = {
  name: "",
  email: "",
  subject: "",
  message: "",
  nameErr: "",
  emailErr: "",
  subjectErr: "",
  messageErr: "",
};

export default class Form extends React.Component {
  state = initialState;

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  validate = () => {
    let nameErr;
    let emailErr;
    let subjectErr;

    if (!this.state.name) {
      nameErr = "Don't forget your name!";
    }

    if (!this.state.email.includes("@")) {
      emailErr = "Please enter a valid email address";
    }

    if (!this.state.subject) {
      subjectErr = "Subject is empty";
    }

    if (nameErr || emailErr || subjectErr) {
      this.setState({ nameErr, emailErr, subjectErr });
      return false;
    }

    return true;
  };

  handleSubmit = (event) => {
    // prevent page reload
    event.preventDefault();

    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      // clear form
      this.setState(initialState);
    }
  };

  render() {
    return (
      <section className="body__contact-form">
        <form onSubmit={this.handleSubmit}>
          <div className="name-field">
            <input
              value={this.state.name}
              placeholder="Name *"
              onChange={this.handleChange}
              name="name"
            />
            <p className="validation-error">{this.state.nameErr}</p>
          </div>
          <div className="email-field">
            <input
              value={this.state.email}
              placeholder="Email *"
              onChange={this.handleChange}
              name="email"
            />
            <p className="validation-error">{this.state.emailErr}</p>
          </div>
          <div className="subject-field">
            <input
              value={this.state.subject}
              placeholder="Subject *"
              onChange={this.handleChange}
              name="subject"
            />
            <p className="validation-error">{this.state.subjectErr}</p>
          </div>
          <div className="message-field">
            <textarea
              value={this.state.message}
              placeholder="Message"
              onChange={this.handleChange}
              name="message"
            ></textarea>
          </div>
          <Button type="submit" btnStyle="solid" text="Submit" />
        </form>
      </section>
    );
  }
}
