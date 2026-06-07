import { useState, type ReactNode } from "react";

const Drawer = ({
  children,
  show = false,
  className = "",
}: {
  children: ReactNode;
  show: boolean;
  className?: string;
}) => {
  return (
    <div
      className={`h-dvh bg-white fixed w-5/12 top-0 p-4 end-0 z-20  ${show ? "block" : "hidden"} ${className}`}
    >
      {children}
    </div>
  );
};

const useDrawer = () => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => setOpen((prev) => !prev);
  return { handleToggle, open };
};

Drawer.useDrawer = useDrawer;

export default Drawer;
