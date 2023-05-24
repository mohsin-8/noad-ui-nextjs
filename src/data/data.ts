// navbar data

export interface NavbarDataItem {
  explore: {
    label: string;
    href: string;
  };
  myTrips: {
    label: string;
    href: string;
  };
  chat: {
    label: string;
    href: string;
  };
  myHome: {
    label: string;
    href: string;
  };
  myAccount: {
    label: string;
    href: string;
  };
}

export type NavbarData = Array<NavbarDataItem>;

export const navbarData: NavbarData = [
  {
    explore: {
      label: "Explore",
      href: "#",
    },

    myTrips: {
      label: "My trips",
      href: "#",
    },

    chat: {
      label: "Chat",
      href: "#",
    },

    myHome: {
      label: "My home",
      href: "#",
    },

    myAccount: {
      label: "My Account",
      href: "#",
    },
  },
];
