import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand">Your Brand Name</a>
        </Link>
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <Link href="/dashboard">
              <a className="nav-link">Dashboard</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/team">
              <a className="nav-link">Team</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/projects">
              <a className="nav-link">Projects</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/calendar">
              <a className="nav-link">Calendar</a>
            </Link>
          </li>
          <li className="nav-item">
            <form className="search-form">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
              />
              <button type="submit" className="btn btn-primary">
                <i className="fas fa-search"></i>
              </button>
            </form>
          </li>
        </ul>
      </div>
    </nav>
  );
}
