import React from "react";
import emailjs from "emailjs-com";

export default function ContactUs() {
  const inputRef = React.useRef(null);

  function clickBtn() {
    inputRef.current.click();
  }

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "kishanb",
        "template_f4r2apt",
        e.target,
        "user_CvuIkc5QnnVDEGrRBSbRJ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div>
      <form className="contact-form" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input
          ref={inputRef}
          onClick={() => console.log("clicked")}
          type="submit"
          value="Send"
        />
      </form>
      <button onClick={clickBtn}> click</button>
    </div>
  );
}
