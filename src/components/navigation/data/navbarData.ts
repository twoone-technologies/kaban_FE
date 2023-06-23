import { aboutUsIcon } from "~/assets";
import { contactUsIcon } from "~/assets";
import { faqIcon } from "~/assets";
import { house_1Icon } from "~/assets";
import { house_2Icon } from "~/assets";
import { house_3Icon } from "~/assets";
import { agentsIcon } from "~/assets";
import { agenciesIcon } from "~/assets";

const navbarData = {
  Realtors: {
    href: undefined,
    subItems: [
      {
        icon: agentsIcon,
        name: 'Agents',
      },
      {
        icon: agenciesIcon,
        name: 'Agencies',
      },
    ]
  },
  Company: {
    href: undefined,
    subItems: [
      {
        icon: aboutUsIcon,
        name: 'About Us',
      },
      {
        icon: contactUsIcon,
        name: 'Contact Us',
      },
      {
        icon: faqIcon,
        name: 'FAQs',
      },
    ]
  },
  Property: {
    href: undefined,
    subItems: [
      {
        icon: house_1Icon,
        name: 'Residential',
      },
      {
        icon: house_2Icon,
        name: 'Industrial',
      },
      {
        icon: house_3Icon,
        name: 'Commercial',
      },
    ]
  },
  Blog: {
    href: '#',
    subItems: undefined
  }
}
export default navbarData

