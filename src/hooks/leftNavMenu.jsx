// import { useState } from "react";
import {
  FaSmile,
  FaMicrophone,
  FaHeadphonesAlt,
  FaLanguage,
  FaChartLine,
  FaFileAlt,
  FaBook,
  FaUsers,
  FaBullhorn,
  FaUser,
  FaCog,
  FaQuestion,
  FaCode,
} from "react-icons/fa";
// import { HiOutlineBookOpen } from "react-icons/hi";
import { BsChatSquareText } from "react-icons/bs";
import { MdOutlineBook } from "react-icons/md";
import UserImage from "../assets/images/dashboardImage.png";
import Learning from "../assets/svg/learning";
import { AwardIcon } from "../assets/svg/award";
import { DocumentIcon } from "../assets/svg/document";
import { TeamsIcon } from "../assets/svg/teams";
import { VolumeIcon } from "../assets/svg/volume";
import { BookIcon } from "../assets/svg/book";
import { DashboardIcon } from "../assets/svg/dashboard";

export const user = {
  name: "John Doe",
  handle: "@johndoe",
  avatar: UserImage,
};

export const leftNavMenu = [
  {
    path: "/learning",
    label: "Learning",
    icon: <Learning />,
  },
  {
    path: "/community",
    label: "Community",
    icon: <BsChatSquareText />,
  },
  {
    path: "/fun",
    label: "Fun",
    icon: <FaSmile />,
  },
  {
    path: "/duet",
    label: "Duet",
    icon: <FaHeadphonesAlt />,
  },
  {
    path: "/speech",
    label: "Speech",
    icon: <FaMicrophone />,
  },
  {
    path: "/dictionary",
    label: "Dictionary",
    icon: <MdOutlineBook />,
  },
];

export const sideMenuOptions = [
  {
    userType: "developer",
    routes: [
      {
        path: "/dashboard",
        icon: <DashboardIcon />,
        text: "Dashboard",
      },
      { path: "/reports/students", icon: <AwardIcon />, text: "Reports" },

      {
        path: "/courses",
        icon: <BookIcon />,
        text: "Courses",
      },
      {
        path: "/manage-teams/index",
        icon: <TeamsIcon />,
        text: "Manage Teams",
      },
      {
        path: "/announcements/index",
        icon: <VolumeIcon />,
        text: "Announcements",
        notifications: 3,
      },
    ],
  },
  {
    userType: "user",
    routes: [
      {
        path: "/dashboard",
        icon: <FaChartLine />,
        text: "Dashboard",
        notifications: 1,
      },
      { path: "/courses", icon: <FaBook />, text: "Courses" },
      { path: "/teams", icon: <FaUsers />, text: "My teams" },
      { path: "/profile", icon: <FaUser />, text: "Profile" },
      { path: "/help", icon: <FaQuestion />, text: "Help" },
    ],
  },
  {
    userType: "instructor",
    routes: [
      {
        path: "/dashboard",
        icon: <FaChartLine />,
        text: "Dashboard",
        notifications: 1,
      },
      { path: "/reports", icon: <FaUsers />, text: "Manage Report" },
      { path: "/courses", icon: <FaBook />, text: "Manage Courses" },
      { path: "/teams", icon: <FaUsers />, text: "Manage Student" },
      {
        path: "/announcements",
        icon: <VolumeIcon />,
        text: "Announcements",
        notifications: 3,
      },
      { path: "/file", icon: <FaQuestion />, text: "File Manager" },
    ],
  },
];
