import React, { useEffect } from "react";
import Content from "./common/content";
import TextContent from "./common/textContent";
import Form from "./common/form";
import L from "leaflet";

const ContactPage = () => {
  useEffect(() => {
    const map = L.map("map").setView([42.963947, -78.737808], 13);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
    L.marker([42.963947, -78.737808]).addTo(map).bindPopup("Williamsville");
  }, []);
  return (
    <>
      <Content>
        Contact – Get in touch! I am currently available for contract work
      </Content>
      <div className="contact-page row">
        <div className="col">
          <TextContent
            title={"I am located in"}
            paragraphs={[
              {
                id: 1,
                content: (
                  <>
                    <span style={{ color: "black", display: "block" }}>
                      Main Street 1, Williamsville
                    </span>
                    Buffalo, USA
                  </>
                ),
              },
              {
                id: 2,
                content: (
                  <>
                    <span style={{ color: "black", display: "block" }}>
                      office@enfold-minimal.com
                    </span>
                    +555 283 784 333
                  </>
                ),
              },
              {
                id: 3,
                content:
                  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
              },
              {
                id: 4,
                content:
                  "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
              },
            ]}
          />
        </div>
        <div className="col">
          <h2 className="text-content-title">Feel free to drop me a mail</h2>
          <Form
            data={[
              { type: "text", name: "name", placeholder: "Name*" },
              { type: "email", placeholder: "Email*", name: "email" },
              { id: "textarea", name: "textarea", placeholder: "Message*" },
            ]}
          />
        </div>
      </div>
      <div id="map"></div>
    </>
  );
};

export default ContactPage;
