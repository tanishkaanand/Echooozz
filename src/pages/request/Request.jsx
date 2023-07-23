import React from 'react'
import './request.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Col, Container, Row } from 'react-bootstrap';

const RequestC = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hrh6e73', 'template_zi67mgc', form.current, 'EFOp9HD-w_Nf1tMi9')
      .then(
        message => alert("Song Request Made Successfully")
      );
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail}>
        <Container>
          <Col>
            <Row>
              <h1 className="title-request">Request A Song</h1>
            </Row>
            <Row>
              <span className="text">Name</span>
              <input type="text" placeholder="Please enter your Name" required="" name="from_name" />
            </Row>
            <Row>
              <span className="text">Email</span>
              <input type="email" placeholder="Email" required="" name="user_email" />
            </Row>
            <Row>
              <span className="text">Message</span>
              <input type="Message" placeholder="Song Request" required="" name="message" />
            </Row>
            <Row>
              <input style={{}} className="button-31" type="submit" value="Send" />
            </Row>
          </Col>

          <Col>
            <Row>
              <p style={{ color: 'black' }}>If there is a will there is music ❤️
                <br />Greetings everyone! If you wish to request a song ping me! <br />I’ll try my best to keep up and provide the piano for the same as soon as I can ✌️
              </p>
            </Row>
          </Col>
        </Container>
      </form>
    </div>
  )
}

export default Request