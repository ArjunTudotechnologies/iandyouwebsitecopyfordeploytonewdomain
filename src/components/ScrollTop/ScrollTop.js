import React from "react";
import { MdArrowUpward } from "react-icons/md";

const scrollTop = () => {
  // window.scrollTo({ top: 0, behavior: "smooth" });
  window.scrollTo(0, 0);
};

export default function ScrollTop() {
  return (
    <div className="scroll-top" onClick={scrollTop}>
      <MdArrowUpward />
    </div>
  );
}
