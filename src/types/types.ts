export type ImageNames = string[];

export interface ImageState {
  id: number;
  name: string;
  path: string;
  is_open: boolean;
}

export interface OpenedImages {
  [key: string]: boolean;
}

export interface SocialMedia {
  name: string;
  href: string;
  icon: string;
}
