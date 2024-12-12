import { BlogItemType } from "@/types";
import React from "react";
import Image from "next/image";
import Title from "@/components/ui/Title";
import Link from "next/link";
import Text from "@/components/ui/Text";

type BlogCardProps = {
  className?: string;
  item: BlogItemType;
};

const BlogCard = ({ className = "", item }: BlogCardProps) => {
  return (
    <Link
      title={item.name}
      href={"/"}
      className={`transition block active:opacity-70 relative hover:md:opacity-90 hover:md:translate-y-[-3%] group ${className}`}
    >
      <article>
        {/** Image & Date */}
        <div className="relative">
          <Image
            src={item.thumbnail}
            alt="Blog"
            width={550}
            height={550}
            loading="lazy"
            className="w-full rounded-xl"
          />

          <Text className="bg-white text-black font-[600] group-hover:bg-textColors-hover group-hover:text-white max-w-fit px-4 py-2 absolute top-5 left-5">
            {new Date(item.createdAt).toDateString()}
          </Text>
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

export default BlogCard;
