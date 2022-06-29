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
    name: "Inquiry Letter",
    path: "/importir/inquiry",
    role: ["user-import", "admin"],
  },
  {
    name: "Lembar Kerja Negosiasi",
    path: "/importir/lkn",
    role: ["user-import", "admin"],
  },
  {
    name: "ORDERING LETTER",
    path: "/importir/ordering",
    role: ["user-import", "admin"],
  },
  {
    name: "Sales Contract",
    path: "/importir/salescontract",
    role: ["user-import", "admin"],
  },
  {
    name: "permintaan pembukaan LC",
    path: "/importir/lc",
    role: ["user-import", "admin", "fasilitator-bank"],
  },

  // {
  //   name: "Create SKA-COO ",
  //   path: "/importir/ska",

  //   role: ["user-import", "admin"],
  // },
  {
    name: "Wesel Import",
    path: "/importir/wessel",
    role: ["user-import", "admin", "fasilitator-bank"],
  },
];

const exportir = [
  {
    name: "Exportir Menu",
    isText: true,
    role: ["user-export", "admin"],
  },
  {
    name: "Introduction Letter",
    path: "/exportir/introductionletter",
    role: ["user-export", "admin"],

    // role: ["user"],
  },
  {
    name: "Offering Letter",
    path: "/exportir/offeringletter",
    role: ["user-export", "admin"],
  },

  {
    name: "Invoice",
    path: "/exportir/invoice",
    role: ["user-export", "admin"],
  },
  {
    name: "Packing List",
    path: "/exportir/packinglist",
    role: ["user-export", "admin"],
  },
  {
    name: "Shipping Instruction",
    path: "/exportir/shippinginstruction",
    role: ["user-export", "admin"],
  },
  {
    name: "Delivery Order",
    path: "/exportir/deliveryorder",
    role: ["user-export", "admin"],
  },

  {
    name: "Bill of LADING ",
    path: "/exportir/billoflanding",
    role: ["user-export", "admin"],
  },
  {
    name: "PEB",
    path: "/exportir/peb",
    role: ["user-export", "admin", "fasilitator-kepabeanan"],
  },

  {
    name: "SKA-COO ",
    path: "/exportir/ska",
    role: ["user-export", "admin"],
  },
  {
    name: "Wesel Export",
    path: "/exportir/wessel",
    role: ["user-export", "admin", "fasilitator-bank"],
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
  {
    name: "Configuration",
    path: "/admin/config",
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
