import React from 'react'
import './request.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Requestc = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hrh6e73', 'template_zi67mgc', form.current, 'EFOp9HD-w_Nf1tMi9')
      .then(
        message => alert("Song Request Made Successfully")
      );
  };

  return (
    <div className='request' >
      {/* <div className='request-feel' style={{ border: '2px solid black' }}>
        <p style={{ color: 'black' }}>If there is a will there is music ❤️
          <br />Greetings everyone! If you wish to request a song ping me! <br />I’ll try my best to keep up and provide the piano for the same as soon as I can ✌️
        </p>
      </div> */}
      <section className="main-request" data-aos="fade-left"
        data-aos-offset="300"
        data-aos-duration="1000">

        <h1 className="title-request">Request A Song</h1>
        <form ref={form} onSubmit={sendEmail}>
          <div className="main-box">

            <div className="input-box">
              <span className="text">Name</span>
              <input type="text" placeholder="Please enter your Name" required="" name="from_name" />
            </div>
            <div className="input-box">
              <span className="text">Email</span>
              <input type="email" placeholder="Email" required="" name="user_email" />
            </div>
            <div className="input-box">
              <span className="text">Message</span>
              <input type="Message" placeholder="Song Request" required="" name="message" />
            </div>
          </div>
          <div >
            <input style={{}} className="button-31" type="submit" value="Send" />
          </div>
        </form>
      </section>

      {/* <scrpit>
        function sendEmail(){
          Email.send({
            Host: "smtp.elasticemail.com",
            Username: "username",
            Password: "password",
            To: 'them@website.com',
            From: "you@isp.com",
            Subject: "This is the subject",
            Body: "And this is the body"
          }).then(
            message => alert(message)
          );
        }
      </scrpit> */}

    </div>
  )
}

export default Requestc