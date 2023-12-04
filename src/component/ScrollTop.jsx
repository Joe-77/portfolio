import React from "react";
import siri from "../assets/Siri.png";

const ScrollTop = () => {
  window.onscroll = () => {
    if (window.scrollY >= 240) {
      document.getElementById("showScroll").classList.add("opacity-100");
      document.getElementById("showScroll").classList.remove("opacity-0");
    } else {
      document.getElementById("showScroll").classList.remove("opacity-100");
      document.getElementById("showScroll").classList.add("opacity-0");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        onClick={scrollToTop}
        className="fixed bottom-3 z-[999] w-10 h-10 cursor-pointer left-1/2 -translate-x-1/2 opacity-0  duration-500"
        id="showScroll"
      >
        <img src={siri} alt="" />
      </div>
    </>
  );
};

export default ScrollTop;
