
import seoImg from "@/assets/images/services/Services 1.svg";
import ppcImg from "@/assets/images/services/Services 2.svg";
import socialImg from "@/assets/images/services/Services 3.svg";
import emailImg from "@/assets/images/services/Services 4.svg";
import contentImg from "@/assets/images/services/Services 5.svg";
import analyticsImg from "@/assets/images/services/Services 6.svg";

export interface ServiceItem {
  id: number;
  titlePart1: string;
  titlePart2: string;
  theme: "grey" | "green" | "dark";
  badgeTheme: "green" | "white";
  image: string;
  link: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: 1,
    titlePart1: "Search engine",
    titlePart2: "optimization",
    theme: "grey",
    badgeTheme: "green",
    image: seoImg,
    link: "#",
  },
  {
    id: 2,
    titlePart1: "Pay-per-click",
    titlePart2: "advertising",
    theme: "green",
    badgeTheme: "white",
    image: ppcImg,
    link: "#",
  },
  {
    id: 3,
    titlePart1: "Social Media",
    titlePart2: "Marketing",
    theme: "dark",
    badgeTheme: "white",
    image: socialImg,
    link: "#",
  },
  {
    id: 4,
    titlePart1: "Email",
    titlePart2: "Marketing",
    theme: "grey",
    badgeTheme: "green",
    image: emailImg,
    link: "#",
  },
  {
    id: 5,
    titlePart1: "Content",
    titlePart2: "Creation",
    theme: "green",
    badgeTheme: "white",
    image: contentImg,
    link: "#",
  },
  {
    id: 6,
    titlePart1: "Analytics and",
    titlePart2: "Tracking",
    theme: "dark",
    badgeTheme: "green",
    image: analyticsImg,
    link: "#",
  },
];