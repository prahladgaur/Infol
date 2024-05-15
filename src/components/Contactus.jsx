//import React from 'react'
import "../css/Contact.css";
import contact from "../assets/contact.png";

function Contactus() {
  return (
    <section id="contact" className="footer">
      <div className="division">
        <div className="container left">
          <div className="contact-right">
            <img src={contact}></img>
          </div>
        </div>
        <div className="container right">
            {/*   Form start from Here      */}
          <div className="contact-left">
            <form className="text-center  p-5" action="#!">
              <p className="h4 mb-4">Contact us</p>

              <input
                type="text"
                id="defaultContactFormName"
                className="form-control mb-4"
                placeholder="Name"
              />

              <input
                type="email"
                id="defaultContactFormEmail"
                className="form-control mb-4"
                placeholder="E-mail"
              />

              <label>Subject</label>
              <select className="browser-default custom-select mb-4">
                <option value="" disabled>
                  Choose option
                </option>
                <option value="1" selected>
                  Feedback
                </option>
                <option value="2">Report a bug</option>
                <option value="3">Feature request</option>
                <option value="4">Feature request</option>
              </select>

              <div className="form-group">
                <textarea
                  className="form-control rounded-0"
                  id="exampleFormControlTextarea2"
                  rows="3"
                  placeholder="Message"
                ></textarea>
              </div>

              <button className="btn btn-info btn-block my-3" type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contactus;
