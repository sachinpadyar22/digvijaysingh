import React from 'react'
import "./contact.css";
const Contact = () => {
    return (
      <>
      <section id="contact">
      <div class="nine">
            <h1>Contact</h1>
          </div>
  <div className="contact-wrapper">
    {/* Left contact page */}
    <form id="contact-form" className="form-horizontal" role="form">
      <div className="form-group">
        <div className="col-sm-12">
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="NAME"
            name="name"
            defaultValue=""
            required=""
          />
        </div>
      </div>
      <div className="form-group">
        <div className="col-sm-12">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="EMAIL"
            name="email"
            defaultValue=""
            required=""
          />
        </div>
      </div>
      <textarea
        className="form-control"
        rows={10}
        placeholder="MESSAGE"
        name="message"
        required=""
        defaultValue={""}
      />
      <button
        className="btn btn-primary send-button"
        id="submit"
        type="submit"
        value="SEND"
      >
        <div className="alt-send-button">
          <i className="fa fa-paper-plane" />
          <span className="send-text">SEND</span>
        </div>
      </button>
    </form>
    {/* Left contact page */}
    <div className="direct-contact-container text-start">
      <ul className='contact_ul'>
        <li><span className='bi bi-geo-alt-fill'></span> &nbsp;&nbsp; <a href="">Ahemdabad, Gujarat</a></li>
        <li><span className='bi bi-telephone-fill'></span> &nbsp;&nbsp; <a href="tel:1-212-555-5555" title="Give me a call">(212) 555-2368</a></li>
        <li><span className='bi bi-envelope-fill'></span> &nbsp;&nbsp;<a href="mailto:#" title="Send me an email"> hitmeup@gmail.com</a></li>
      </ul>
      {/* <ul className="contact-list text-start">
        <li className="list-item text-start">
          <i className="fa fa-map-marker fa-2x">
            <span className="contact-text place">City, State</span>
          </i>
        </li>
        <li className="list-item">
          <i className="fa fa-phone fa-2x">
            <span className="contact-text phone">
              <a className="text-dark" href="tel:1-212-555-5555" title="Give me a call">
                (212) 555-2368
              </a>
            </span>
          </i>
        </li>
        <li className="list-item">
          <i className="fa fa-envelope fa-2x">
            <span className="contact-text gmail">
              <a className="text-dark" href="mailto:#" title="Send me an email">
                hitmeup@gmail.com
              </a>
            </span>
          </i>
        </li>
      </ul> */}
      <hr />
      <ul className="social-media-list mt-4">
        <li>
          <a href="#" target="_blank" className="contact-icon">
            <i class="bi bi-github" aria-hidden="true" ></i>
          </a>
        </li>
        <li>
          <a href="#" target="_blank" className="contact-icon">
          <i class="bi bi-youtube" aria-hidden="true" ></i>
          </a>
        </li>
        <li>
          <a href="#" target="_blank" className="contact-icon">
          <i class="bi bi-twitter" aria-hidden="true" ></i>
          </a>
        </li>
        <li>
          <a href="#" target="_blank" className="contact-icon">
          <i class="bi bi-instagram" aria-hidden="true" ></i>
          </a>
        </li>
      </ul>
      <hr />
      <div className="copyright">© ALL OF THE RIGHTS RESERVED</div>
    </div>
  </div>
</section>

      </>
    )}
    export default Contact;