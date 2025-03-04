import React from "react";
import contactImg from "@/public/images/contact.webp";
import BackgroundImage from "@/components/ui/BackgroundImage";

import Title from "@/components/ui/Title";
import Team from "@/components/Contact/Team";
import { LocaleType } from "@/i18n-config";
import { ContactText } from "@/types";
import { CACHE_DURATION } from "@/lib/constants";
import { unstable_cache } from "next/cache";
import { API } from "@/lib/axios";

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
