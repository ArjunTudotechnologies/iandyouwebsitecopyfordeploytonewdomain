import React from "react";
import { FaSlash } from "react-icons/fa";

export default function Comment() {
  return (
    <span>
      <FaSlash className="rotate-slash mt-m-10" />
      <FaSlash className="rotate-slash ml-m-20 mt-m-10" />
    </span>
  );
}
