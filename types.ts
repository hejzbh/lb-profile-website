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
