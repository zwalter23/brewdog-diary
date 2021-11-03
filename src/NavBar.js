import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <span id="brewdog-logo"></span>
      <div className="links">
        <Link to="/tasted">Beers I tasted</Link>
        <Link to="/brewed">Beers I brewed</Link>
        <Link to="/random">Random Beer</Link>
        <Link to="/">Home</Link>
      </div>
    </nav>
  );
};

export default NavBar;
