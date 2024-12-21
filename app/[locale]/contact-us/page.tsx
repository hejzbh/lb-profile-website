import React from "react";
import contactImg from "@/public/images/contact.webp";
import BackgroundImage from "@/components/ui/BackgroundImage";

import Title from "@/components/ui/Title";

const ContactPage = () => {
  return (
    <div>
      <BackgroundImage src={contactImg}>
        <Title variant="h1" className="!text-white">
          CONTACT US
        </Title>
      </BackgroundImage>
    </div>
  );
};

export default ContactPage;
