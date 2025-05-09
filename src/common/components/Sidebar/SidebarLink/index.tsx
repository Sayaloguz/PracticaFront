import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "../../Icon/Delivery";
import clsx from "clsx";
import { SidebarLinkProps } from "./interface";

const SidebarLink = ({ href, icon, title }: SidebarLinkProps) => {
  const pathname = usePathname();

  return (
    <li>
      <Link
        href={href}
        className={clsx(
          "flex items-center gap-x-4 text-lg py-2 width-full mt-1 px-4 rounded-md hover:bg-gray-200 transition-colors duration-300",
          {
            "bg-red-500 text-white hover:bg-red-700": pathname.includes(href),
          }
        )}
      >
        <Icon id={icon} />

        {title}
      </Link>
    </li>
  );
};

export default SidebarLink;
