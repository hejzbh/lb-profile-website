export type ProfileItemType = {
  id: number | string;
  name: string;
  image: any;
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
  fax: string;
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
  id: string;
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
