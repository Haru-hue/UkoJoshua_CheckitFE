import { Icon } from "@iconify/react";

export const NavItems = [
    {
      link: "/",
      icon: <Icon style={{ fontSize: '2rem'}} icon="mdi:home" />,
    },
    {
      link: "https://www.linkedin.com/in/joshuedev/",
      icon: <Icon style={{ fontSize: '2rem'}} icon="lucide:user-round" />,
    },
    {
        link: '/projects',
        icon: <Icon style={{ fontSize: '2rem'}} icon="line-md:briefcase" />,
    },
    {
        link: '/types',
        icon: <Icon style={{ fontSize: '2rem'}} icon="bx:rocket"  />,
    },
    {
      link: "/settings",
      icon: (
        <Icon style={{ fontSize: '2rem'}} icon="ic:baseline-settings" />
      ),
    },
  ];