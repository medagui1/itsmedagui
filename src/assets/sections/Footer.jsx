const Footer = () => {
  return (
    <footer className="flex justify-center items-center p-8 flex-col w-full">
      <hr className="h-[1px] bg-white w-full my-8"/>
      <div className="flex justify-between w-full  items-center">
        <h3 className="font-bold text-4xl">MedAgui.</h3>
        <div className="">
          <ul className="flex gap-8 font-semibold">
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
      <div className="w-full mt-12 text-lg">
        Designed and coded with ❤️ by{" "}
        <a href="https://www.github.com/medagui1">MedAgui.</a>.
      </div>
    </footer>
  );
};

export default Footer;
