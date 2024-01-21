import { useEffect, useState } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="flex justify-center items-center p-8 flex-col w-full">
      <hr className="dark:h-[1px] h-[2px] dark:bg-white bg-black_primary w-full my-8"/>
      <div className="flex justify-between w-full  items-center flex-wrap gap-8">
        <h3 className="font-bold text-4xl">MedAgui.</h3>
        <div className="">
          <ul className="flex gap-8 font-semibold flex-wrap max-sm:flex-col max-sm:gap-4">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#projects">My Works</a>
            </li>
            <li>
              <a href="mailto:ismailregragui37@gmail.com">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full mt-8 text-lg">
        Designed and coded with ❤️ by{" "}
        <a href="https://www.github.com/medagui1">MedAgui.</a> - {currentYear}
      </div>
    </footer>
  );
};

export default Footer;
