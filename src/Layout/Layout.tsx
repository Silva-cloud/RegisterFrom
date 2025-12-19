import type { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative h-screen">
      <header className="p-7 flex items-center justify-between">
        <h1 className={`text-2xl font-bold cursor-pointer`}>LOGO</h1>
        <nav className="flex gap-8">
          <div className="font-bold text-gray-600 hover:text-primary-black transition-colors cursor-pointer">
            Link
          </div>
          <div className="font-bold text-gray-600 hover:text-primary-black transition-colors cursor-pointer">
            Link
          </div>
          <div className="font-bold text-gray-600 hover:text-primary-black transition-colors cursor-pointer">
            Link
          </div>
        </nav>
      </header>
      <div className="absolute h-7/12 w-full bg-white top-0  -z-10"></div>
      <div className="absolute h-5/12 w-full bg-[#1F1F1F] bottom-0 -z-10"></div>
      {children}
    </div>
  );
};

export default Layout;
