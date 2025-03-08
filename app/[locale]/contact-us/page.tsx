import React from "react";
import contactImg from "@/public/images/contact.webp";
import BackgroundImage from "@/components/ui/BackgroundImage";

import Title from "@/components/ui/Title";
import { LocaleType } from "@/i18n-config";
import { ContactText } from "@/types";
import { CACHE_DURATION } from "@/lib/constants";
import { unstable_cache } from "next/cache";
import { API } from "@/lib/axios";
import ContactInfo from "@/components/Contact/ContactInfo";

type ContactProps = {
  params: Promise<{
    locale: LocaleType;
  }>;
};

const getAboutContent = unstable_cache(
  async (locale: LocaleType) => {
    const response = await API.get("/contact" + `?locale=${locale}`);

    return response?.data?.data;
  },
  ["global_content"],
  {
    revalidate: CACHE_DURATION,
  }
);

const ContactPage = async ({ params }: ContactProps) => {
  const { locale } = await params;
  const text: ContactText = await getAboutContent(locale);

  return (
    <div>
      <BackgroundImage src={contactImg}>
        <Title variant="h1" size="xl" className="!text-white">
          {text.title?.toUpperCase()}
        </Title>
      </BackgroundImage>

      <main className="container py-20 space-y-20">
        <ContactInfo locale={locale} />
        <div className="w-full h-[1px] bg-gray-300"></div>
        <div className="grid md:grid-cols-2 gap-10">
          <iframe
            className="w-full h-[350px] rounded-xl"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d458.2044035275374!2d18.0859362!3d44.7185252!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475e83e02695a9ad%3A0x87319ee494de76e6!2sLB%20Profile!5e1!3m2!1sbs!2sba!4v1741449943747!5m2!1sbs!2sba"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <iframe
            className="w-full h-[350px] rounded-xl"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2317.609171548359!2d9.354312475009296!3d50.55394159432328!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bcc8acae567daf%3A0x514f56d8742af965!2sAm%20Schlirfer%20Weg%202-4%2C%2036358%20Herbstein%2C%20Njema%C4%8Dka!5e1!3m2!1sbs!2sba!4v1741450006287!5m2!1sbs!2sba"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
