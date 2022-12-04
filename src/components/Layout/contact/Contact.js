import { Fragment, useRef } from "react";

const Contact = () => {
  const usernameRef = useRef("");
  const phoneRef = useRef("");
  const emailRef = useRef("");
  const submitHandler = async (event) => {
    event.preventDefault();
    const contact = {
      name: usernameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
    };
    console.log(contact);

    const response = await fetch(
      "https://moviereact-50b2e-default-rtdb.firebaseio.com/contact.json",
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
  };

  return (
    <Fragment>
      <h1>Contact us</h1>
      <form onSubmit={submitHandler}>
        <label> Name</label>
        <input
          id="username"
          type="text"
          name="username"
          ref={usernameRef}
          required
        />
        <label> EmailId</label>
        <input id="email" type="email" name="emailId" ref={emailRef} required />
        <label> Phone Number</label>
        <input
          id="phonenumber"
          type="number"
          name="phonenumber"
          ref={phoneRef}
          required
        />
        <button>Submit</button>
      </form>
    </Fragment>
  );
};
export default Contact;
