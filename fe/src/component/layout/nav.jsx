import AppsIcon from "@mui/icons-material/Apps";
const importir = [
  {
    name: "Importir Menu",
    isText: true,
    // path: "#",
  },

  {
    name: "Introduction Letter",
    path: "/importir/introductionletter",
    // role: ["user"],
  },

  {
    name: "Offering Letter",
    path: "/importir/offeringletter",

    // role: ["user"],
  },

  {
    name: "Invoice",
    path: "/importir/invoice",
    // role: ["user"],
  },
  {
    name: "Packing List",
    path: "/importir/packinglist",

    // role: ["user"],
  },

  {
    name: "Delivery Order",
    path: "/importir/deliveryorder",

    // role: ["user"],
  },

  {
    name: "Bill of LADING ",
    path: "/importir/billoflanding",

    // role: ["user"],
  },
  {
    name: "Create SKA-COO ",
    path: "/importir/ska",

    // role: ["user"],
  },
  {
    name: "Create DRAFT Wesel ",
    path: "/importir/wessel",
    // role: ["user"],
  },
];

const exportir = [
  {
    name: "Exportir Menu",
    isText: true,
    // path: "#",
  },
  {
    name: "Create Inquiry Letter",
    path: "#",
  },

  {
    name: "Create Lembar Kerja Negosiasi",
    path: "#",
    // role: ["user"],
  },

  {
    name: "Create ORDERING LETTER",
    path: "#",
    // role: ["user"],
  },

  {
    name: "Create PEB",
    path: "#",
    // role: ["user"],
  },
  {
    name: "Create Salaes Contract",
    path: "#",
    // role: ["user"],
  },

  {
    name: "Create permintaan pembukaan LC",
    path: "#",
    // role: ["user"],
  },

  {
    name: "Create SKA-COO ",
    path: "#",
    // role: ["user"],
  },
  {
    name: "Create DRAFT Wesel ",
    path: "#",
    // role: ["user"],
  },
];

const fasilator = [
  {
    name: "Fasilitator Menu",
    isText: true,
    // path: "#",
  },
  {
    name: "Create xxxxx",
    path: "#",
  },
  {
    name: "Create xxxxx",
    path: "#",
  },
  {
    name: "Create xxxxx",
    path: "#",
  },
  {
    name: "Create xxxxx",
    path: "#",
  },
];

const nav = [
  {
    name: "Dashboard",
    path: "/",
    icon: AppsIcon,
  },
  ...importir,
  ...exportir,
  ...fasilator,
];

export { nav };
