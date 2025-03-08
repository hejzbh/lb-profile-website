import React from "react";
import Image from "next/image";
import webImg from "@/public/images/lb-2.webp";
import Title from "@/components/ui/Title";
import Button from "@/components/ui/Button";
import { ServiceItemType } from "@/types";
import ServicesList from "./ServicesList";

type ServicesProps = {
  className?: string;
};

async function getBlogItems() {
  try {
    return [
      {
        id: 1,
        name: "Service 1",
        thumbnail:
          "https://lbprofile.de/wp-content/uploads/2023/01/home-owners-products-windows-image-new.webp",
        createdAt: "2024-12-12",
      },
      {
        id: 2,
        name: "Service 2",
        thumbnail:
          "https://lbprofile.de/wp-content/uploads/2023/01/home-owners-products-slidingdoors-image.webp",
        createdAt: "2024-12-10",
      },
      {
        id: 3,
        name: "Service 3",
        thumbnail:
          "https://lbprofile.de/wp-content/uploads/2023/01/home-owners-products-entrance-doors-image.webp",
        createdAt: "2024-12-08",
      },
      {
        id: 4,
        name: "Service 4",
        thumbnail:
          "https://lbprofile.de/wp-content/uploads/2023/01/home-owners-products-slidingdoors-image.webp",
        createdAt: "2024-12-05",
      },
    ] as ServiceItemType[];
  } catch {
    return [];
  }
}

const Services = async ({ className = "" }: ServicesProps) => {
  const blogItems = await getBlogItems();

  return (
    <section
      style={{ backdropFilter: "blur(10px)" }}
      className={`py-[70px] relative z-[1] bg-bgColors-secondary ${className}`}
    >
      <Image
        src={webImg}
        fill
        className="z-[-2] object-cover"
        alt="Background"
        style={{ filter: "blur(10px)" }}
        draggable={false}
      />

      <main className="container">
        {/** Heading */}
        <div className="flex items-center justify-between">
          <Title variant="h2" className="!text-white font-[400]">
            Services
          </Title>
          <Button
            variant="secondary"
            className=" !min-w-0  py-3 px-8 md:py-4 md:px-12"
          >
            Mehr
          </Button>
        </div>
        {/** List */}
        <ServicesList services={blogItems} />
      </main>
    </section>
  );
};

export default Services;
