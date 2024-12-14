import { BlogItemType } from "@/types";
import React from "react";
import BlogCard from "./BlogCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/Carousel";

type BlogListProps = {
  className?: string;
  items: BlogItemType[];
};

const BlogList = ({ className = "", items }: BlogListProps) => {
  return (
    <Carousel className={`${className}`}>
      <CarouselContent className="mt-20 mb-10 space-x-10">
        {items?.map((item) => (
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

export default BlogList;
