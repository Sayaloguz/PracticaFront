import Icon from "@/common/components/Icon/Delivery";
import Link from "next/link";
import { FC } from "react";

interface IconButtonProps {
  icon: string;
  title: string;
  href: string;
}
const IconButton: FC<IconButtonProps> = ({
  icon,
  title,
  href,
}: IconButtonProps) => {
  return (
    <Link
      href={href}
      className="flex items-center gap-x-4 text-lg bg-red-500 hover:bg-red-700 text-white font-bold py-4 px-8 pr-10 rounded-full"
    >
      <Icon id={icon} />
      {title}
    </Link>
  );
};

export default IconButton;
