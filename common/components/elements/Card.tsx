import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  [propName: string]: unknown;
}

export default function Card({
  children,
  className = "",
  ...others
}: CardProps) {
  return (
    <div
      className={`rounded-xl transition-all duration-300 shadow-lg lg:hover:shadow-lg ${className} `}
      {...others}
      data-testid="card"
    >
      {children}
    </div>
  );
}
