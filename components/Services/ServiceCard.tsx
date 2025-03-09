import { ServiceItemType } from "@/types";
import React from "react";
import Image from "next/image";
import Title from "@/components/ui/Title";
import Link from "next/link";

type ServiceCardProps = {
  className?: string;
  item: ServiceItemType;
};

const ServiceCard = ({ className = "", item }: ServiceCardProps) => {
  return (
    <Link
      title={item.name}
      href={"/"}
      className={`transition block active:opacity-70 relative hover:md:opacity-90 hover:md:translate-y-[-3%] group ${className}`}
    >
      <article className="flex flex-col justify-center items-center">
        {/** Image & Date */}
        <div className="relative">
          <Image
            src={item.thumbnail}
            alt="Blog"
            width={550}
            height={550}
            loading="lazy"
            className="w-[300px] h-[280px] rounded-full"
          />
        </div>

        {/** Title */}
        <Title
          variant="h2"
          size="sm"
          className="text-white group-hover:md:bg-textColors-hover transition p-3 rounded-xl mt-4"
        >
          {item.name}
        </Title>
      </article>
    </Link>
  );
};

export default ServiceCard;
