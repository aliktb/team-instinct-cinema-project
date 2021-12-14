import { useRef } from "react";
import "../css/center.css";
import emailjs from "emailjs-com";
import { Button } from "reactstrap";

const Contact = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const subjectRef = useRef("");
  const messageRef = useRef("");

  const SERVICE_ID = "service_64aty9j";
  const TEMPLATE_ID = "template_ln4xans";
  const USER_ID = "user_rVjmV1KPSzFVXT5VWlpqi";

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      Name: nameRef.current.value,
      Email: emailRef.current.value,
      Subject: subjectRef.current.value,
      Message: messageRef.current.value,
    };
    emailjs.send(SERVICE_ID, TEMPLATE_ID, data, USER_ID).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
      },
      (err) => {
        console.log("FAILED...", err);
      }
    );
    alert("Email has been sent!");
  };

  return (
    <div className="page-container">
      <h1 style={{ textAlign: "center" }}>Contact us</h1>
      <div className="mx-3">
        <p>Telephone: 0303 123 7300</p>
        <p>
          Address: Buckingham Palace <br></br>London<br></br>SW1 1AA
        </p>
      </div>
      <h3 class="center">
        <u>Send an Email</u>
      </h3>
      <br />

      <div className="ContactForm">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="contactForm">
                <form
                  onSubmit={handleSubmit}
                  id="contact-form"
                >
                  <div className="row formRow">
                    <div className="col-6">
                      <input
                        type="text"
                        name="name"
                        className="form-control formInput"
                        placeholder="Name"
                        ref={nameRef}
                        required
                      ></input>
                    </div>

                    <div className="col-6">
                      <input
                        type="email"
                        name="email"
                        className="form-control formInput"
                        placeholder="Email address"
                        ref={emailRef}
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$"
                      ></input>
                    </div>
                  </div>
                  <br />
                  <div className="row formRow">
                    <div className="col">
                      <input
                        type="text"
                        name="subject"
                        className="form-control formInput"
                        placeholder="Subject"
                        ref={subjectRef}
                      ></input>
                    </div>
                  </div>
                  <br />

                  <div className="row formRow">
                    <div className="col">
                      <textarea
                        rows={3}
                        name="message"
                        className="form-control formInput"
                        placeholder="Message"
                        ref={messageRef}
                        required
                      ></textarea>
                    </div>
                  </div>
                  <br />
                  <Button className="submit-btn mb-4" type="submit">
                    Send Email
                  </Button>
                  <br></br>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
