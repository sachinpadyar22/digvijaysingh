import React from 'react'
import "./contact.css";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <>
      <section id="contact" style={{ backgroundColor: "#f8f8f8" }}>

        
        <div className="container">
        <div className="d-flex pb-5 pt-5">
          <p><Link to="/" className="nav-link">Home</Link></p>
          <span className="bi bi-chevron-compact-right">Request</span>
        </div>
          <h1>Request a private appointment now</h1>

          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Name</label>
            <input type="Name" className="form-control" id="exampleFormControlInput1" placeholder="Name" />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Email</label>
            <input type="Email" className="form-control" id="exampleFormControlInput1" placeholder="Enter your email" />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Phone Number</label>
            <input type="tel" className="form-control" id="exampleFormControlInput1" placeholder="Enter your number" />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">Message</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <button>Send Message</button>
        </div>

      </section>

    </>
  )
}
export default Contact;