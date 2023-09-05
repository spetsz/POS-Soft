import React, { useState } from "react";
import contactSVG from "../gifs/contact.png";

const Contact = () => {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { name, email, subject, message } = fields;

  const send = () => {
    if (name && email && subject && message) {
      window.alert("Message Envoyer");
      setFields({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } else {
      window.alert("Les champs doit etre remplis!");
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="contact-left">
        <div className="contact-left-text">Have any question?</div>
        <div className="contact-left-subtext">
          Contact us! our technical team will make sure to get back to you
        </div>

        <img src={contactSVG} alt="contact" />
      </div>

      <div className="contact-right">
        <input
          name="name"
          value={name}
          onChange={(e) =>
            setFields({ ...fields, [e.target.name]: e.target.value })
          }
          placeholder="Name"
        />
        <input
          name="email"
          value={email}
          onChange={(e) =>
            setFields({ ...fields, [e.target.name]: e.target.value })
          }
          placeholder="Email"
        />
        <input
          name="subject"
          value={subject}
          onChange={(e) =>
            setFields({ ...fields, [e.target.name]: e.target.value })
          }
          placeholder="Subject"
        />
        <textarea
          name="message"
          value={message}
          onChange={(e) =>
            setFields({ ...fields, [e.target.name]: e.target.value })
          }
          className="contact-right-message"
          placeholder="Write you message"
        />
        <button onClick={send}>Send</button>
      </div>
    </div>
  );
};

export default Contact;
