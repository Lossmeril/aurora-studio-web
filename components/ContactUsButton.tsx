import { Card, Text } from "@nextui-org/react";
import { IoLogoYoutube } from "react-icons/io";

const ContactUsButton = () => {
  return (
    <div className="contact-button-container">
      <div className="contact-button youtube-button">
        <IoLogoYoutube />
      </div>
      <div className="contact-button contact-us-button">
        <Text>Ozvěte se nám</Text>
      </div>
    </div>
  );
};

export default ContactUsButton;
