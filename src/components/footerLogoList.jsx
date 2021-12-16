import React from "react";
import FooterLogo from "./common/footerLogo";
const FooterLogoList = () => {
  return (
    <ul className="footer-logos">
      <FooterLogo
        src={`${process.env.PUBLIC_URL}/images/twitter.png`}
        alt={"twitter"}
        title={"Follow me on Twitter"}
      />
      <FooterLogo
        src={`${process.env.PUBLIC_URL}/images/facebook.png`}
        alt={"facebook"}
        title={"Follow me on Facebook"}
      />
      <FooterLogo
        src={`${process.env.PUBLIC_URL}/images/dribbble.png`}
        alt={"dribbble"}
        title={"Follow me on Dribbble"}
      />
      <FooterLogo
        src={`${process.env.PUBLIC_URL}/images/instagram.png`}
        alt={"instagram"}
        title={"Follow me on Instagram"}
      />
      <FooterLogo
        src={`${process.env.PUBLIC_URL}/images/linkedin.png`}
        alt={"linkedin"}
        title={"Follow me on Linkedin"}
      />
      <FooterLogo
        src={`${process.env.PUBLIC_URL}/images/email.png`}
        alt={"email"}
        title={"Get in touch"}
      />
    </ul>
  );
};

export default FooterLogoList;
