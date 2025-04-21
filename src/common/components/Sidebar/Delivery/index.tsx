export default function Sidebar() {
    return (
      <aside className="sidebar">
        <h2><a href="/">Home</a></h2>
        <ul>
          <li><a href="/clients">Clients</a></li>
          <li><a href="/merchants">Merchants</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </aside>
    );
  }