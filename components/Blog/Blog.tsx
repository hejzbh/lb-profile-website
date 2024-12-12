import React from "react";
import Image from "next/image";
import webImg from "@/public/images/web-1.webp";
import Title from "@/components/ui/Title";
import Button from "@/components/ui/Button";
import { BlogItemType } from "@/types";
import BlogList from "./BlogList";

type BlogProps = {
  className?: string;
};

async function getBlogItems() {
  try {
    return [
      {
        id: 1,
        name: "Ist es an der Zeit, Ihre TisCHLEREI ZU ERSETZEN?",
        thumbnail:
          "https://lbprofile.de/wp-content/uploads/2023/01/home-owners-products-windows-image-new.webp",
        createdAt: "2024-12-12",
      },
      {
        id: 2,
        name: "Tipps zur Erstellung eines beeindruckenden",
        thumbnail:
          "https://lbprofile.de/wp-content/uploads/2023/01/home-owners-products-slidingdoors-image.webp",
        createdAt: "2024-12-10",
      },
      {
        id: 3,
        name: "Wie Sie Ihren Lebenslauf mit lbprofile",
        thumbnail:
          "https://lbprofile.de/wp-content/uploads/2023/01/home-owners-products-entrance-doors-image.webp",
        createdAt: "2024-12-08",
      },
      {
        id: 4,
        name: "Warum ein professionelles Profilbild",
        thumbnail:
          "https://lbprofile.de/wp-content/uploads/2023/01/home-owners-products-slidingdoors-image.webp",
        createdAt: "2024-12-05",
      },
    ] as BlogItemType[];
  } catch {
    return [];
  }
}

const Blog = async ({ className = "" }: BlogProps) => {
  const blogItems = await getBlogItems();

  return (
    <section
      className={`py-[70px] relative z-[1] bg-bgColors-secondary ${className}`}
    >
      <Image
        src={webImg}
        fill
        className="z-[-2] object-cover"
        alt="Background"
        draggable={false}
      />

      <main className="container">
        {/** Heading */}
        <div className="flex items-center justify-between">
          <Title variant="h2" className="!text-white font-[400]">
            Aktuelles
          </Title>
          <Button
            variant="secondary"
            className=" !min-w-0  py-3 px-8 md:py-4 md:px-12"
          >
            Mehr
          </Button>
        </div>
        {/** List */}
        <BlogList items={blogItems} />
      </main>
    </section>
  );
};

export default Blog;
