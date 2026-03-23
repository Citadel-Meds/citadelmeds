import { Care, Effective, Responsive, Secure, WellLed } from "../../public/images";

export const standardsData = [
  {
    id: 1,
    image: Secure?.src ?? Secure,
    description: "Safe",
  },
  {
    id: 2,
    image: Effective?.src ?? Effective,
    description: "Effective",
  },
  {
    id: 3,
    image: Care?.src ?? Care,
    description: "Caring",
  },
  {
    id: 4,
    image: Responsive?.src ?? Responsive,
    description: "Responsive",
  },
  {
    id: 5,
    image: WellLed?.src ?? WellLed,
    description: "Well Led",
  },
];
