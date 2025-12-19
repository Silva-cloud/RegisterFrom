import type { ReactNode } from "react";

const Card = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div className={`p-6 border-primary-black  border ${className}`}>
      {children}
    </div>
  );
};

const Header = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 ${className}`}
    >
      {children}
    </div>
  );
};
const Title = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return <h1 className={`text-2xl font-bold ${className}`}>{children}</h1>;
};

const Description = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return <p className={`text-xs text-gray-500 ${className}`}>{children}</p>;
};

const Content = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return <div className={`${className}`}>{children}</div>;
};

Card.Header = Header;
Card.Title = Title;
Card.Description = Description;
Card.Content = Content;

export default Card;
