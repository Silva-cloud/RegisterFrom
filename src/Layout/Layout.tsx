import type { ReactNode } from "react";
import Nav from "../components/Nav/Nav";
import Hamburger from "../assets/mdi--hamburger-menu.svg";
import Close from "../assets/material-symbols-light--close.svg";
import Drawer from "../components/Drawer/Drawer";

const Layout = ({ children }: { children: ReactNode }) => {
  const { handleToggle, open } = Drawer.useDrawer();
  return (
    <div className="relative h-screen">
      <header className="p-7 flex items-center justify-between">
        <h1 className={`text-2xl font-bold cursor-pointer`}>LOGO</h1>
        <Nav containerClassName="sm:flex hidden" />
        <button onClick={handleToggle} className="sm:hidden cursor-pointer">
          <img src={Hamburger} alt="Hamburger Menu" />
        </button>
        <Drawer className="px-3" show={open}>
          <button onClick={handleToggle} className="cursor-pointer">
            <img src={Close} className="w-6 h-6" alt="Close" />
          </button>
          <Nav containerClassName="flex flex-col items-center h-full py-6" />
        </Drawer>
        <div
          onClick={handleToggle}
          className={`fixed inset-0 bg-black/50 z-10 ${open ? "block" : "hidden"}`}
        ></div>
      </header>
      <div className="absolute h-7/12 w-full bg-white top-0  -z-10"></div>
      <div className="absolute h-5/12 w-full bg-[#1F1F1F] bottom-0 -z-10"></div>
      {children}
    </div>
  );
};

export default Layout;
