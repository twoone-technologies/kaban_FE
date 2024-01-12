import { commercialImg, industrialImg, residentialImg } from "~/assets/img";

export const propertyTypeData = [
  {
    name: "commercial",
    type: ["Land", "Office", "Mall", "Gas Station", "School"],
    image: commercialImg,
  },
  {
    name: "industrial",
    type: ["Factory", "Oil Rig", "Power Plant", "Warehouse"],
    image: industrialImg,
  },
  {
    name: "residential",
    type: [
      "Self Contain",
      "Apartment",
      "Detached House",
      "Terace house",
      "Semi-detached House",
    ],
    image: residentialImg,
  },
];
