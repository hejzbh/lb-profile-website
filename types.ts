export type ProfileItemType = {
  id: number;
  title: string;
  description: any;
  title_two?: string;
  description_two: any;
  slug: string;
  gallery: { name: string; hash: string; url: string }[];
};

export type BlogItemType = {
  id: number | string;
  name: string;
  thumbnail: any;
  createdAt: string;
};

export type SocialLinkType = {
  Icon: any;
  href: string;
  name: string;
};

export type LocationType = {
  name: string;
  address: string;
  mapHref: string;
  tel: string;
  fax?: string;
  email: string;
};

export type CatalogItemType = {
  image: string;
  name: string;
  href: string;
};

export type TeamMemberType = {
  name: string;
  role: string;
  tel?: string;
  telM: string[];
  fax?: string;
  email: string;
};

export type HomepageText = {
  id: number;
  documentId: string;
  hero_title: string;
  hero_button: string;
  produkte_title: string;
  produkte_description: string;
  about_title: string;
  about_text: any;
  video_title: string;
  about_us_two: string;
  about_us_two_text: any;
  location_one: string;
  location_one_address: string;
  location_two: string;
  location_two_address: string;
  meta_description: string;
  meta_title: string;
  footer_description: string;
  footer_button: string;
  follow_us: string;
  copyright: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
};

export type AboutText = {
  id: number;
  documentId: string;
  title: string;
  position_one: string;
  position_one_description: string;
  position_two: string;
  position_two_description: string;
  position_three: string;
  position_three_description: string;
  description_one: any;
  title_two: string;
  title_two_description: string;
  point_one: string;
  point_one_description: string;
  point_two: string;
  point_two_description: string;
  point_three: string;
  point_three_description: string;
  point_four: string;
  point_four_description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
};

export type ContactText = {
  title: string;
  title_two: string;
  description: any;
};

export type CatalogText = {
  title: string;
  title_two: string;
  title_two_description: string;
};
