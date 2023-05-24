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

// cards data
export const cardsData = [
  {
    image: "/images/cardImg.png",
    location: "Denver, Colorado",
    title: "Ponte vedra",
    description:
      "Nestled in a quiet and picturesque neighborhood, this cozy apartment offers.",
    bedImg: "/images/bed.png",
    bedQuantity: "1",
    tableImg: "/images/table.png",
    tableQuantity: "1",
    showerImg: "/images/shower.png",
    showerQuantity: "1",
  },

  {
    image: "/images/cardImg.png",
    location: "Denver, Colorado",
    title: "Ponte vedra",
    description:
      "Nestled in a quiet and picturesque neighborhood, this cozy apartment offers.",
    bedImg: "/images/bed.png",
    bedQuantity: "2",
    tableImg: "/images/table.png",
    tableQuantity: "2",
    showerImg: "/images/shower.png",
    showerQuantity: "2",
  },

  {
    image: "/images/cardImg.png",
    location: "Denver, Colorado",
    title: "Ponte vedra",
    description:
      "Nestled in a quiet and picturesque neighborhood, this cozy apartment offers.",
    bedImg: "/images/bed.png",
    bedQuantity: "3",
    tableImg: "/images/table.png",
    tableQuantity: "2",
    showerImg: "/images/shower.png",
    showerQuantity: "1",
  },

  {
    image: "/images/cardImg.png",
    location: "Denver, Colorado",
    title: "Ponte vedra",
    description:
      "Nestled in a quiet and picturesque neighborhood, this cozy apartment offers.",
    bedImg: "/images/bed.png",
    bedQuantity: "4",
    tableImg: "/images/table.png",
    tableQuantity: "5",
    showerImg: "/images/shower.png",
    showerQuantity: "3",
  },

  {
    image: "/images/cardImg.png",
    location: "Denver, Colorado",
    title: "Ponte vedra",
    description:
      "Nestled in a quiet and picturesque neighborhood, this cozy apartment offers.",
    bedImg: "/images/bed.png",
    bedQuantity: "6",
    tableImg: "/images/table.png",
    tableQuantity: "3",
    showerImg: "/images/shower.png",
    showerQuantity: "6",
  },

  {
    image: "/images/cardImg.png",
    location: "Denver, Colorado",
    title: "Ponte vedra",
    description:
      "Nestled in a quiet and picturesque neighborhood, this cozy apartment offers.",
    bedImg: "/images/bed.png",
    bedQuantity: "5",
    tableImg: "/images/table.png",
    tableQuantity: "3",
    showerImg: "/images/shower.png",
    showerQuantity: "4",
  },
  {
    image: "/images/cardImg.png",
    location: "Denver, Colorado",
    title: "Ponte vedra",
    description:
      "Nestled in a quiet and picturesque neighborhood, this cozy apartment offers.",
    bedImg: "/images/bed.png",
    bedQuantity: "10",
    tableImg: "/images/table.png",
    tableQuantity: "2",
    showerImg: "/images/shower.png",
    showerQuantity: "5",
  },
  {
    image: "/images/cardImg.png",
    location: "Denver, Colorado",
    title: "Ponte vedra",
    description:
      "Nestled in a quiet and picturesque neighborhood, this cozy apartment offers.",
    bedImg: "/images/bed.png",
    bedQuantity: "8",
    tableImg: "/images/table.png",
    tableQuantity: "3",
    showerImg: "/images/shower.png",
    showerQuantity: "5",
  },
  {
    image: "/images/cardImg.png",
    location: "Denver, Colorado",
    title: "Ponte vedra",
    description:
      "Nestled in a quiet and picturesque neighborhood, this cozy apartment offers.",
    bedImg: "/images/bed.png",
    bedQuantity: "4",
    tableImg: "/images/table.png",
    tableQuantity: "2",
    showerImg: "/images/shower.png",
    showerQuantity: "3",
  },
];
