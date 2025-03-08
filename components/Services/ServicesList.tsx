import { ServiceItemType } from "@/types";
import React from "react";
import BlogCard from "./ServiceCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/Carousel";

type ServicesListProps = {
  className?: string;
  services: ServiceItemType[];
};

const ServicesList = ({ className = "", services }: ServicesListProps) => {
  return (
    <Carousel className={`${className}`}>
      <CarouselContent className="mt-20 mb-10 space-x-10">
        {services?.map((item) => (
          <CarouselItem
            key={item.id}
            className="basis-[85%] md:basis-1/2 lg:basis-1/3"
          >
            <BlogCard item={item} />
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="flex items-center justify-center space-x-10">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
};

export default ServicesList;
