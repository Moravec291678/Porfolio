import React from "react";

const Contacts = () => {
  return (
    <div>
      <main className="section">
        <div className="container">
          <h1 className="title-1">Contacts</h1>

          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Location</h2>
              <p>Šumperk, Czech Republic</p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Telegram / WhatsApp</h2>
              <p>
                <a href="tel:+79051234567">+420 702 056 269</a>
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Email</h2>
              <p>
                <a href="mailto:webdev@protonmail.com">Dvid.Moravec2@seznam.cz</a>
              </p>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Contacts;
