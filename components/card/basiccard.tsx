import { HiOutlineFilter } from "react-icons/hi";

interface BasicCardProps {
  children?: React.ReactNode;
  className?: string;
}
export default function BasicCard({ children, className }: BasicCardProps) {
  return (
    <div
      className={` shadow-md w-full rounded-2xl px-4 py-6 ${className}`}
    >
      {children}
    </div>
  );
}
