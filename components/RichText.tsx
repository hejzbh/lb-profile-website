import React from "react";
import Text from "./ui/Text";
import Image from "next/image";

interface RichTextBlock {
  type: "heading" | "paragraph" | "text" | "image" | "list" | "quote";
  text?: string;
  level?: number;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  link?: { url: string };
  image?: { url: string; alternativeText?: string };
  format?: "ordered" | "unordered";
  children?: RichTextBlock[];
}

interface RichTextProps {
  content: RichTextBlock[];
  className?: string;
}

const RichText: React.FC<RichTextProps> = ({ content, className }) => {
  if (!content) return null;
  const renderContent = (block: RichTextBlock): React.ReactNode => {
    switch (block.type) {
      case "heading": {
        return (
          <Text className={`${className}`} size="xl">
            {block.children?.map(renderContent)}
          </Text>
        );
      }
      case "paragraph":
        return (
          <Text className={`${className} mb-4`}>
            {block.children?.map((child, idx) => (
              <span key={idx}>{renderContent(child)}</span>
            ))}
          </Text>
        );
      case "text": {
        let content: React.ReactNode = <span>{block.text}</span>;
        if (block.bold) content = <strong>{content}</strong>;
        if (block.italic) content = <em>{content}</em>;
        if (block.underline) content = <u>{content}</u>;
        if (block.strikethrough) content = <s>{content}</s>;
        if (block.link)
          content = (
            <a href={block.link.url} target="_blank" rel="noopener noreferrer">
              {content}
            </a>
          );
        return content;
      }
      case "image":
        return block.image ? (
          <div style={{ textAlign: "center" }}>
            <Image
              src={block.image.url}
              alt={block.image.alternativeText || "Image"}
              width={500}
              height={500}
              objectFit="contain"
            />
          </div>
        ) : null;
      case "list": {
        if (!block.children) return null;
        const ListTag = block.format === "ordered" ? "ol" : "ul";
        return (
          <ListTag className={className} style={{ marginLeft: "2em" }}>
            {block.children.map((item, index) => (
              <li key={index}>{item.children?.map(renderContent)}</li>
            ))}
          </ListTag>
        );
      }
      case "quote":
        return (
          <blockquote
            className={className}
            style={{ marginLeft: "20px", fontStyle: "italic", color: "#555" }}
          >
            {block.children?.map(renderContent)}
          </blockquote>
        );
      default:
        return null;
    }
  };

  return (
    <>
      {content.map((block, index) => (
        <React.Fragment key={index}>{renderContent(block)}</React.Fragment>
      ))}
    </>
  );
};

export default RichText;
