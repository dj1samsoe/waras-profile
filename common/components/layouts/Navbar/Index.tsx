import Menu from "./Menu";

export default function Navbar() {
  return (
    <nav className="z-20 fixed shadow-sm xl:shadow-none w-full md:px-20 md:py-5 md:bg-transparent bg-[#343045]">
      <Menu />
    </nav>
  );
}
