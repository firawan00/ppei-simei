import GridViewIcon from "@mui/icons-material/GridView";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import AssessmentIcon from "@mui/icons-material/Assessment";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

import FileUploadIcon from "@mui/icons-material/FileUpload";
import StyleIcon from "@mui/icons-material/Style";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PostAddIcon from "@mui/icons-material/PostAdd";

const ref = [
  {
    name: "Dashboard",
    path: "/",
    icon: GridViewIcon,
  },

  {
    name: "Users",
    icon: PeopleAltIcon,
    // role: ["admin"],
    child: [
      {
        name: "List",
        path: "/admin/user",
        // role: ["admin"],
      },
      {
        name: "Create",
        path: "/admin/user/create",
      },
    ],
  },

  {
    name: "Product",
    path: "/product",
    icon: FileUploadIcon,
    // role: ["user"],
  },

  {
    name: "Customer",
    path: "/customer",
    icon: FileUploadIcon,
    // role: ["user"],
  },

  {
    name: "Offering",
    icon: AssessmentIcon,
    path: "/offering",
  },

  {
    name: "Assessment",
    icon: AssessmentIcon,
    // role: ["admin"],
    child: [
      {
        name: "List",
        path: "/assessment",
        // role: ["admin"],
      },
    ],
  },
];

const nav = [
  {
    name: "Dashboard",
    path: "/",
    icon: GridViewIcon,
    role: [],
  },

  {
    name: "Users",
    icon: PeopleAltIcon,
    path: "/admin/users",
    role: ["admin"],
    child: [
      {
        name: "List",
        path: "/admin/user",
        // role: ["admin"],
      },
      {
        name: "Create",
        path: "/admin/user/create",
      },
    ],
  },

  {
    name: "Tags ",
    path: "/admin/tags",
    icon: StyleIcon,
    role: ["admin"],
  },

  {
    name: "Post ",
    path: "/post",
    icon: FeaturedPlayListIcon,
    role: ["admin"],
  },
  {
    name: "My Store",
    path: "#",
    icon: StorefrontIcon,
    role: ["user"],
  },
  {
    name: "New Post ",
    path: "/post",
    icon: PostAddIcon,
    role: ["user"],
  },
  {
    name: "Profile",
    path: "/post",
    icon: AccountCircleIcon,
    role: ["user"],
  },
];

export { nav };
