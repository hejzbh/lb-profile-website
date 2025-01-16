import React from "react";
import contactImg from "@/public/images/contact.webp";
import BackgroundImage from "@/components/ui/BackgroundImage";

import Title from "@/components/ui/Title";
import Team from "@/components/Contact/Team";
import { LocaleType } from "@/i18n-config";

type ContactProps = {
  params: Promise<{
    locale: LocaleType;
  }>;
};

const ContactPage = async ({ params }: ContactProps) => {
  const { locale } = await params;
  return (
    <div>
      <BackgroundImage src={contactImg}>
        <Title variant="h1" size="xl" className="!text-white">
          CONTACT US
        </Title>
      </BackgroundImage>

      <main className="container py-20 space-y-20">
        <h1 className="text-[2.8rem] md:text-[5rem] container text-center">
          U IZRADI...
        </h1>

        {/** Team Bosnian */}
        <Team location="bosnian" locale={locale} />

        {/** Team Deutschland */}
        <Team location="deutschland" locale={locale} />
      </main>
    </div>
  );
};

export default ContactPage;
