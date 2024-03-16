import Form from "react-bootstrap/Form";
import styles from "src/components/Contact/Contact.module.css";
import Mailto from "src/components/Contact/Mailto.jsx";
import { useState } from "react";

function Contact() {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
    console.log(subject);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    console.log(message);
  };

  return (
    <div className={styles.container} id="contact">
      <h1>Contact</h1>
      <Form className={styles.form}>
        <Form.Group className={styles.subject}>
          <Form.Label>Subject:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Subject"
            className={styles.subjectForm}
            value={subject}
            onChange={handleSubjectChange}
          />
        </Form.Group>
        <Form.Group
          className={styles.message}
          placeholder="Message"
          value={message}
          onChange={handleMessageChange}
        >
          <Form.Label>Message:</Form.Label>
          <Form.Control as="textarea" rows={3} className={styles.textForm} />
        </Form.Group>
        <Mailto subject={subject} body={message} children="Submit" />
      </Form>
    </div>
  );
}
//https://www.30secondsofcode.org/react/s/mailto/

export default Contact;
