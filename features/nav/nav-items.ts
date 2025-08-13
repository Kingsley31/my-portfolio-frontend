import { CircleUserRound, Contact, Home, Lightbulb, LucideIcon, MessageCircle, Projector, Rss } from "lucide-react";

export type NavItem = {
  title: string;
  url: string;
  icon: LucideIcon;
}
export const navItems: NavItem[] = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "About Me",
    url: "#about",
    icon: CircleUserRound,
  },
  {
    title: "Projects",
    url: "#projects",
    icon: Projector,
  },
  {
    title: "Skills",
    url: "#skills",
    icon: Lightbulb,
  },
  // {
  //   title: "Contact Me",
  //   url: "#contact-me",
  //   icon: Contact,
  // },
  {
    title: "Testimonials",
    url: "#testimonials",
    icon: MessageCircle,
  },
  {
    title: "Blog",
    url: "#blog",
    icon: Rss,
  },
]