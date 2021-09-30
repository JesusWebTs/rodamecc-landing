import React from "react";
import "./styles.css";
function ContactInfoCard({ addres, emails = [], phoneNumbers = [] }) {
  return (
    <div className="contact-info-card__container">
      <address className="contact-info-card__adress">{addres}</address>
      <div className="contact-info-card__emails">
        <h3>Emails: </h3>
        {emails.map((email, index) => (
          <div>
            <a key={index} href={`mailto:${email}`}>
              {email}
            </a>
          </div>
        ))}
      </div>

      <div className="contact-info-card__phones">
        <h3>Telfs:</h3>
        {phoneNumbers.map((phoneNumber, index) => (
          <div>
            <a href={`mailto:${phoneNumber}`}>{phoneNumber}</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactInfoCard;
