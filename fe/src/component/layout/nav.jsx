import AppsIcon from "@mui/icons-material/Apps";
import MailIcon from "@mui/icons-material/Mail";
import OutboxIcon from "@mui/icons-material/Outbox";
const importir = [
  {
    name: "Importir Menu",
    isText: true,
    role: ["user-import", "admin"],
  },

  {
    name: "Introduction Letter",
    path: "/importir/introductionletter",
    role: ["user-import", "admin"],

    // role: ["user"],
  },

  {
    name: "Offering Letter",
    path: "/importir/offeringletter",
    role: ["user-import", "admin"],
  },

  {
    name: "Invoice",
    path: "/importir/invoice",
    role: ["user-import", "admin"],
  },
  {
    name: "Packing List",
    path: "/importir/packinglist",
    role: ["user-import", "admin"],
  },

  {
    name: "Delivery Order",
    path: "/importir/deliveryorder",
    role: ["user-import", "admin"],
  },

  {
    name: "Bill of LADING ",
    path: "/importir/billoflanding",
    role: ["user-import", "admin"],
  },
  {
    name: "Create SKA-COO ",
    path: "/importir/ska",

    role: ["user-import", "admin"],
  },
  {
    name: "Create DRAFT Wesel ",
    path: "/importir/wessel",
    role: ["user-import", "admin"],
  },
];

const exportir = [
  {
    name: "Exportir Menu",
    isText: true,
    role: ["user-export", "admin"],
  },
  {
    name: "Inquiry Letter",
    path: "/exportir/inquiry",
    role: ["user-export", "admin"],
  },

  {
    name: "Lembar Kerja Negosiasi",
    path: "/exportir/lkn",
    role: ["user-export", "admin"],
  },

  {
    name: "ORDERING LETTER",
    path: "/exportir/ordering",
    role: ["user-export", "admin"],
  },

  {
    name: "PEB",
    path: "/exportir/peb",
    role: ["user-export", "admin"],
  },
  {
    name: "Salaes Contract",
    path: "/exportir/salescontract",
    role: ["user-export", "admin"],
  },

  {
    name: "permintaan pembukaan LC",
    path: "/exportir/lc",
    role: ["user-export", "admin"],
  },

  {
    name: "SKA-COO ",
    path: "/exportir/ska",
    role: ["user-export", "admin"],
  },
  {
    name: "DRAFT Wesel ",
    path: "/exportir/wessel",
    role: ["user-export", "admin"],
  },
];

const fasilator = [];

const admin = [
  {
    name: "Admin Menu",
    isText: true,
    role: ["admin"],
  },
  {
    name: "Users",
    path: "/admin/users",
    role: ["admin"],
  },
];

const nav = [
  {
    name: "Dashboard",
    path: "/",
    icon: AppsIcon,
  },

  {
    name: "Inbox",
    path: "/inbox",
    icon: MailIcon,
  },
  ...admin,

  // {
  //   name: "Outbox",
  //   path: "/outbox",
  //   icon: OutboxIcon,
  // },

  ...exportir,
  ...importir,

  // ...fasilator,
];

export { nav };
