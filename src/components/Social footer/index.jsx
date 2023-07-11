import React from "react";

import { SocialContainer } from "./index.styled";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "../../assets/svg/social-icons";

const SocialFooter = () => {
  return (
    <SocialContainer>
      <h2>Socials links</h2>
      <ul>
        <li>
          <a href="#">
            <Facebook />
          </a>
        </li>
        <li>
          <a href="#">
            <Instagram />
          </a>
        </li>
        <li>
          <a href="#">
            <Linkedin />
          </a>
        </li>
        <li>
          <a href="#">
            <Twitter />
          </a>
        </li>
      </ul>
    </SocialContainer>
  );
};

export default SocialFooter;
