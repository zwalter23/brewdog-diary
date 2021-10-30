import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1>Brewdog Diary</h1>
      <div className="links">
        <Link to="/">Home</Link>
      </div>
    </nav>
  );
};

export default NavBar;
