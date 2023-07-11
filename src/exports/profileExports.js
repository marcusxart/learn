import { Spain, UnitedKingdom, France } from "../assets/svg/flags";

import LocationIcon from "../assets/svg/locationIcon";
import UserGroupIcon from "../assets/svg/userGroupIcon";
import VideoCameraIcon from "../assets/svg/videoCamera";
import {
  Mircosoft,
  Github,
  Google,
  Figma,
  Apple,
} from "../assets/svg/brand-icons";

export const languages = [
  { name: "French", flag: France },
  { name: "Spanish", flag: Spain },
  { name: "English", flag: UnitedKingdom },
];

export const otherInfo = [
  { text: "New York", icon: LocationIcon },
  { text: "1,771,743 Students", icon: UserGroupIcon },
  { text: "41 Courses", icon: VideoCameraIcon },
];

export const enterprisesData = [
  { title: "The Figma school", time: "Joined: 01-10-1995", brandIcon: Figma },
  { title: "Learn HTML / CSS", time: "Joined: 01-10-1995", brandIcon: Google },
  {
    title: "School For Developers",
    time: "Joined: 01-10-1995",
    brandIcon: Github,
  },
  {
    title: "School For Developers",
    time: "Joined: 01-10-1995",
    brandIcon: Mircosoft,
  },
  {
    title: "School For Developers",
    time: "Joined: 01-10-1995",
    brandIcon: Apple,
  },
];
