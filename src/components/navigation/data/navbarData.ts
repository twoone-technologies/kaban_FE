import { aboutUsIcon } from "~/assets";
import { contactUsIcon } from "~/assets";
import { faqIcon } from "~/assets";
import { house_1Icon } from "~/assets";
import { house_2Icon } from "~/assets";
import { house_3Icon } from "~/assets";
import { agentsIcon } from "~/assets";
import { agenciesIcon } from "~/assets";

const navbarData = {
  Property: {
    href: undefined,
    subItems: [
      {
        icon: house_1Icon,
        name: 'Residential',
        path: 'residential',
      },
      {
        icon: house_2Icon,
        name: 'Industrial',
        path: 'industrial',
      },
      {
        icon: house_3Icon,
        name: 'Commercial',
        path: 'commercial',
      },
    ]
  },

  Realtors: {
    href: undefined,
    subItems: [
      {
        icon: agentsIcon,
        name: 'Agents',
        path: 'agents',
      },
      {
        icon: agenciesIcon,
        name: 'Agencies',
        path: 'agencies',
      },
    ]
  },

  Company: {
    href: undefined,
    subItems: [
      {
        icon: aboutUsIcon,
        name: 'About Us',
        path: 'about-us',
      },
      {
        icon: contactUsIcon,
        name: 'Contact Us',
        path: 'contact-us',
      },
      {
        icon: faqIcon,
        name: 'FAQs',
        path: 'faqs',
      },
    ]
  },

  Blog: {
    href: '/blog',
    subItems: undefined
  }
}
export default navbarData

