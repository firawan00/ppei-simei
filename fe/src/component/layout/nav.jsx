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
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AlarmOnIcon from "@mui/icons-material/AlarmOn";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
const nav = [
  {
    name: "Dashboard",
    path: "/",
    icon: GridViewIcon,
  },

  {
    name: "Pengajuan Rencana Diklat",
    path: "/diklat/new",
    icon: AddCircleOutlineIcon,
    // role: ["user"],
  },

  {
    name: "Pelaksanaan  Diklat",
    path: "/",
    icon: AlarmOnIcon,
  },

  {
    name: "Evaluasi  Diklat",
    path: "/",
    icon: TextSnippetIcon,
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
