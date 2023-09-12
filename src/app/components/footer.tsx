

import React, { FormEvent, useState } from 'react';
import styles from '../page.module.css'; // Replace with your CSS file import





export default function Footer() {

  const [fontSize, setFontSize] = useState(5); // Initial font size
  const [showSend, setShowSend] = useState(false);
  const [message, setMessage] = useState(''); // State to store the message text

  const resizeText = (textarea: HTMLTextAreaElement) => {
    const contentLength = textarea.value.length;
    const maxSize = 5;
    const minSize = 2;
    contentLength > 23 ? setShowSend(true) : setShowSend(false);

    let newFontSize = maxSize - contentLength * 0.05;
    newFontSize = Math.max(newFontSize, minSize);
    textarea.style.fontSize = newFontSize + 'rem';
    setFontSize(newFontSize);
  }

  const sendEmail = () => {
    // Construct the email body with subject and message
    const subject = 'I am ready to boost my success!';
    const emailBody = ` ${message}`;

    // Encode the email address and email body
    const encodedEmailAddress = encodeURIComponent('esteban@pixelchromatic.com');
    const encodedEmailBody = encodeURIComponent(emailBody);

    // Create the mailto URL
    const mailtoUrl = `mailto:${encodedEmailAddress}?subject=${subject}&body=${encodedEmailBody}`;

    // Open the user's default email client
    window.location.href = mailtoUrl;
  }

  return (
    <div className={styles.footer}>
      <p style={{ color: 'black', fontWeight: 100, fontSize: 20, textAlign: 'center', margin: 30 }}>Get Started!</p>
      <br />

      <p style={{ color: 'black', fontWeight: 100, fontSize: 30, textAlign: 'center', margin: 20 }}>We are excited to start!</p>

      <textarea className={styles.contactForm} placeholder="Type your message here." onInput={(e: FormEvent<HTMLTextAreaElement>) => {
        resizeText(e.target as HTMLTextAreaElement); // Explicitly cast to HTMLTextAreaElement
        setMessage((e.target as HTMLTextAreaElement).value); // Explicitly cast to HTMLTextAreaElement
      }}></textarea>

      <div style={{ alignSelf: 'center' }}>
        {showSend ? <p className={styles.button} onClick={sendEmail}>Send</p> : <p style={{ fontWeight: 100 }}>Tell us a little more. </p>}
      </div>
    </div>
  );
}
