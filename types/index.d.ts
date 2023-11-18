import { Icon } from "lucide-react";
import { string } from "zod";


export type MetaAttributes = {
    title: string;
    subTitle: string;
    absoluteTitle: string;
    ogTitle: string;
    author: { name: string; twitterUrl: string; twitterAddress: string };
    description: string;
    keywords: Array<string>;
    tags: Array<string>;
  };


export type DashBoardAttributes = {
    title: string;
    slug?: string;
    icon: Icon;
  };
  
  export type DashBoardPageAttributes = {
    title: string;
    slug?: string;
    initial: string;
  };


  interface FooterAttributes {
    socials: Social[];
    copyright: string;
    menus: FooterMenu[];
  }
  
  export type Social = {
    name: string;
    href: string;
    icon: Icon;
  };
  
  export type FooterMenu = {
    name: string;
    href: string;
  };