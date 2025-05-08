import Link from "next/link";
import Icon from "../../Icon/Delivery";
import Image from "next/image";
import CNN from "../../../assets/CNN.svg";
export default function Sidebar() {
  return (
    <aside className="sidebar">
      <Link href="/">
        <Image src={CNN} alt="prueba" width={200} height={200} />        
      </Link>
      <ul>
        <li>
          <Link href="/clients" className="flex items-center gap-x-3 text-lg py-2">
            <Icon id="users" className="w-6 h-6" /> 
            Clients
          </Link>
        </li>

        <li>
          <Link href="/clients/create" className="flex items-center gap-x-3 text-lg py-2">
            <Icon id="addUser" className="w-6 h-6" />
            Crear client
          </Link>
        </li>

        <li>
          <Link href="/merchants" className="flex items-center gap-x-3 text-lg py-2">
            <Icon id="store" className="w-6 h-6" />
            Merchants
          </Link>
        </li>

        <li>
          <Link href="/merchants/create" className="flex items-center gap-x-3 text-lg py-2">
            <Icon id="add" className="w-6 h-6" />
            Crear merchant
          </Link>
        </li>

        <li>
          <Link href="/about" className="flex items-center gap-x-3 text-lg py-2">
            <Icon id="info" className="w-6 h-6" />
            About
          </Link>
        </li>
      </ul>
    </aside>
  );
}