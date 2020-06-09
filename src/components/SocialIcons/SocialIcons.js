import React from "react";
import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
export default function SocialIcons() {
  return (
    <div className="mt-5">
      <ul className="social-icons-large">
        <li>
          <Link className="icons" to="#">
            <FaTwitter />
          </Link>
        </li>
        <li>
          <Link className="icons" to="#">
            <FaFacebookF />
          </Link>
        </li>
        <li>
          <Link className="icons" to="#">
            <FaLinkedinIn />
          </Link>
        </li>
        <li>
          <Link className="icons" to="#">
            <FaYoutube />
          </Link>
        </li>
      </ul>
    </div>
  );
}
