import React from "react";
import BodyIntro from "../components/BodyIntro";
import ContactForm from "../components/ContactForm";

const Contact = (props) => {
  const introText = {
    title: "Get in touch",
    blurb:
      "Up for a chat? Feel free to contact me to discuss any projects, ideas, or opportunities.",
  };

  return (
    <article>
      <BodyIntro title={introText.title} blurb={introText.blurb} />
      <ContactForm />
    </article>
  );
};

export default Contact;
