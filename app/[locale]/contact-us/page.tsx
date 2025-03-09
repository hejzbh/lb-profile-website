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
import { Metadata } from "next";

type ContactProps = {
  params: Promise<{
    locale: LocaleType;
  }>;
};
export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = params;

  const meta = {
    en: {
      title: "Contact Us - Get in Touch with LB Profile",
      description:
        "Reach out to LB Profile for inquiries or support. We are a leading manufacturer of high-quality PVC profiles for windows and doors, dedicated to innovation and sustainability.",
      keywords: [
        "contact LB Profile",
        "PVC profiles manufacturer",
        "contact us",
        "inquiries about PVC profiles",
        "customer support",
        "PVC windows and doors",
      ],
    },
    de: {
      title: "Kontaktieren Sie uns - Kontaktieren Sie LB Profile",
      description:
        "Treten Sie mit LB Profile in Kontakt für Anfragen oder Support. Wir sind ein führender Hersteller hochwertiger PVC-Profile für Fenster und Türen, mit Fokus auf Innovation und Nachhaltigkeit.",
      keywords: [
        "Kontakt LB Profile",
        "PVC-Profile Hersteller",
        "Kontaktieren Sie uns",
        "Anfragen zu PVC-Profilen",
        "Kundensupport",
        "PVC Fenster und Türen",
      ],
    },
    "bs-BA": {
      title: "Kontakt - Kontaktirajte LB Profile",
      description:
        "Kontaktirajte LB Profile za bilo kakva pitanja ili podršku. Mi smo vodeći proizvođač visokokvalitetnih PVC profila za prozore i vrata, posvećeni inovacijama i održivosti.",
      keywords: [
        "kontakt LB Profile",
        "proizvođač PVC profila",
        "kontaktirajte nas",
        "pitanja o PVC profilima",
        "korisnička podrška",
        "PVC prozori i vrata",
      ],
    },
  }[locale];

  const ogImage =
    "https://lyctum.com/wp-content/uploads/2018/03/lb-profile.png";

  if (!meta) return {};

  return {
    title: `${meta.title}`,
    description: meta.description,
    keywords: meta.keywords.join(", "), // SEO ključne riječi
    openGraph: {
      type: "website",

      siteName: "LB Profile",
      title: meta.title,
      description: meta.description,
      locale: locale.replace("-", "_"),
      alternateLocale: ["en_US", "de_DE", "bs_BA"],
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "LB Profile - Contact Us",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@LBProfile",
      title: meta.title,
      description: meta.description,
      images: [ogImage],
    },
  };
}

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
