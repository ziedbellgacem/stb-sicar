import React from "react";
import "./Contact.css";
import { Form, Button } from "react-bootstrap";

function Contact() {
  return (
    <div className="contactDet">
      <h1>CONTACT</h1>
      <div className="contactImg">
        <img src="/images/contact.jpg" alt="" />
        <div className="contactCont">
          <div className="contactAdr">
            <h5>
              {" "}
              Adresse : Siège social, Imm. El Emtiez. Centre Urbain Nord, 1003,
              Tunis.
            </h5>

            <h5> Telephone: +216 71 238 729 - +216 71 233342</h5>
            <h5> Email: info@stbsicar.com.tn</h5>
          </div>
          <div className="ContactForm">
            <Form>
              <Button variant="primary" style={{ marginBottom: "10px" }}>
                {" "}
                Contactez-Nous
              </Button>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Nom" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="email" placeholder=" email" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder=" Message" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Envoyer
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
