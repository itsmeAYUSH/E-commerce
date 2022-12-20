import { Fragment, useRef } from "react";
import classes from "./Contact.module.css";

const Contact = () => {
  const usernameRef = useRef("");
  const phoneRef = useRef("");
  const emailRef = useRef("");
  const messageRef = useRef("");
  const submitHandler = async (event) => {
    event.preventDefault();
    const contact = {
      name: usernameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      message: messageRef.current.value,
    };
    console.log(contact);

    const response = await fetch(
      "https://e-commerce-75f41-default-rtdb.firebaseio.com/contact.json",
      {
        method: "POST",
        body: JSON.stringify(contact),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);

    usernameRef.current.value = "";
    emailRef.current.value = "";
    phoneRef.current.value = "";
    messageRef.current.value = "";
  };

  return (
    <Fragment>
      <h1 className={classes.title}>Contact Us</h1>
      <form className={classes.form} onSubmit={submitHandler}>
        <label> Enter your details</label>
        <input
          id="username"
          type="text"
          name="username"
          ref={usernameRef}
          placeholder="Name"
          required
        />
        <input
          id="email"
          type="email"
          name="emailId"
          placeholder="Email Address"
          ref={emailRef}
          required
        />
        <input
          id="phonenumber"
          type="number"
          name="phonenumber"
          placeholder="Phone Number"
          ref={phoneRef}
          required
        />
        <input
          id="message"
          type="text"
          name="text"
          placeholder="Enter Your Message"
          ref={messageRef}
          required
        />
        <button className={classes.btn}>Submit</button>
      </form>
    </Fragment>
  );
};
export default Contact;
