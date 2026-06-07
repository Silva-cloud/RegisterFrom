const Nav = ({ containerClassName = "" }: { containerClassName?: string }) => {
  return (
    <nav className={`flex gap-8 ${containerClassName}`}>
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
  );
};

export default Nav;
