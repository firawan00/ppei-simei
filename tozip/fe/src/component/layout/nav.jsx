import AppsIcon from "@mui/icons-material/Apps";
import MailIcon from "@mui/icons-material/Mail";
import OutboxIcon from "@mui/icons-material/Outbox";
import PersonIcon from "@mui/icons-material/Person";
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
  // {
  //   name: "Wesel Import",
  //   path: "/importir/wessel",
  //   role: ["user-import", "admin", "fasilitator-bank"],
  // },
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
    name: "Release LC",
    path: "/exportir/lc",
    role: ["user-export", "fasilitator-bank", "admin"],
  },
  {
    name: "Invoice",
    path: "/exportir/invoice",
    role: ["user-export", "fasilitator-bank", "admin"],
  },
  {
    name: "Packing List",
    path: "/exportir/packinglist",
    role: ["user-export", "fasilitator-bank", "admin"],
  },
  {
    name: "Shipping Instruction",
    path: "/exportir/shippinginstruction",
    role: ["user-export", "admin", "fasilitator-cargo"],
  },
  {
    name: "Delivery Order",
    path: "/exportir/deliveryorder",
    role: ["user-export", "admin", "fasilitator-cargo"],
  },

  {
    name: "PEB",
    path: "/exportir/peb",
    role: ["user-export", "admin", "fasilitator-kepabeanan"],
  },
  {
    name: "NPE",
    path: "/exportir/npe",
    role: ["user-export", "admin", "fasilitator-kepabeanan"],
  },
  {
    name: "Bill of LADING ",
    path: "/exportir/billoflanding",
    role: ["user-export", "admin", "fasilitator-cargo"],
  },
  {
    name: "SKA-COO-FORM A",
    path: "/exportir/ska-a",
    role: ["user-export", "admin", "fasilitator-ska"],
  },
  {
    name: "SKA-COO-FORM D",
    path: "/exportir/ska-d",
    role: ["user-export", "admin", "fasilitator-ska"],
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
    name: "Profile",
    path: "/profile",
    icon: PersonIcon,
    role: ["user-export", "user-import"],
  },

  {
    name: "Inbox",
    path: "/inbox",
    icon: MailIcon,
  },

  {
    name: "Outbox",
    path: "/outbox",
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
