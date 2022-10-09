import { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as CancelIcon } from "../../assets/images/icons/cancel.svg";
import { ReactComponent as HamburgerIcon } from "../../assets/images/icons/hamburger.svg";
import { ReactComponent as SearchIcon } from "../../assets/images/icons/search.svg";
import img from "../../assets/images/logos/BedrockLauncher_128x128.png";
import SearchSidebar from "./components/SearchSidebar";
import SideNavbar from "./components/SideNavbar";
import "./index.scss";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const handleSideBarOpen = () => {
    if (searchOpen && !navOpen) setSearchOpen(false);
    setNavOpen(!navOpen);
  };

  return (
    <header className="navbar">
      <div className="container">
        <Link to="/" className="nav-logo" onClick={() => window.scroll(0, 0)}>
          <img src={img} alt="" />
          Bedrock Launcher Lite
        </Link>
        <nav className="header-nav">
          <ul>
            <Link
              to="/search"
              className="search-btn" /* onClick={handleSearch} */
            >
              {!searchOpen ? (
                <SearchIcon />
              ) : (
                <CancelIcon className="cancel-icon" />
              )}
            </Link>
            <button className="hamburger-btn" onClick={handleSideBarOpen}>
              {!navOpen ? (
                <HamburgerIcon />
              ) : (
                <CancelIcon className="cancel-icon" />
              )}
            </button>

            <SearchSidebar
              isOpen={searchOpen}
              closeNav={() => setSearchOpen(false)}
            />
            <SideNavbar
              isOpen={navOpen}
              closeNav={() => setNavOpen(false)}
              onClose={handleSideBarOpen}
            />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
