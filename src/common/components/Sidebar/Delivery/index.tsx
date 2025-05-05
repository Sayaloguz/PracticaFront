import Link from "next/link";
import Icon from "../../Icon/Delivery";

export default function Sidebar() {
    return (
      <aside className="sidebar">
        <h2><a href="/">Home</a></h2>
        <ul>

          <li>
            <Link href="/clients">
            {/* Esto se puede desmigar más */}
              <Icon id="users"/> 
              Clients
            </Link>
          </li>

          <li>
            <Link href="/merchants">
              <Icon id="store"/>
              Merchants
            </Link>
          </li>

          <li>
            <Link href="/about">
              <Icon id="info"/>
              About
            </Link>
          </li>
        </ul>
      </aside>
    );
  }