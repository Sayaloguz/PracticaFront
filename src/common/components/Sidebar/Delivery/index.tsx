"use client";

import Link from "next/link";
import Image from "next/image";
import CNN from "../../../assets/CNN.svg";
import SidebarLink from "../SidebarLink";

export default function Sidebar() {
  return (
    <aside className="sidebar h-full bg-gray-100">
      <Link href="/">
        <Image
          src={CNN.src}
          alt="prueba"
          width={200}
          height={200}
          className="hover:scale-105 transition-transform duration-300"
        />
      </Link>
      <ul className="pt-6">
        <SidebarLink href="/clients" icon="users" title="Clients" />

        <SidebarLink href="/merchants" icon="store" title="Merchants" />

        <SidebarLink href="/about" icon="info" title="About" />
      </ul>
    </aside>
  );
}
