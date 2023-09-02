import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";
export const projectExperience = [
  {
    name: "Website Design",
    projects: 10,
    icon: HiOutlineDesktopComputer,
    bg: "#286F6C",
  },
];

export const WhatDoIHelp = [
  "I can help you find simple but effective solutions, I am dedicated to Front-End so I can help you with the views of your web page whether it is personal or your business.",
  
];

export const workExp = [
  {
    place: "self-employed",
    tenure: "jan 2023 - Sep 2023",
    role: "Front-End Developer",
    detail:
      "Front-end programmers are responsible for creating attractive and functional user interfaces. This involves translating layouts and design concepts into HTML, CSS, and JavaScript code. They need to make sure that the design is responsive and compatible with multiple devices and browsers.",
  },
];


export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

