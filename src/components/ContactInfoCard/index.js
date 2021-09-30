import React from "react";
import "./styles.css";
function ContactInfoCard({ addres, emails = [], phoneNumbers = [] }) {
  return (
    <div>
      <address>{addres}</address>
      <div>
        <h3>Emails: </h3>
        {emails.map((email, index) => (
          <>
            <a key={index} href={`mailto:${email}`}>
              {email}
            </a>
            {emails.length - 1 === index ? "" : <span>/</span>}
          </>
        ))}
      </div>

      <div>
        <h3>Telfs:</h3>
        {phoneNumbers.map((phoneNumber, index) => (
          <>
            <a href={`mailto:${phoneNumber}`}>{phoneNumber}</a>
            {phoneNumbers.length - 1 === index ? "" : <span>/</span>}
          </>
        ))}
      </div>
    </div>
  );
}

export default ContactInfoCard;
