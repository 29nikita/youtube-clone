import "./_header.scss";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";

function Header({ handleSetSidebar }) {
  return (
    <div className="header border border-dark">
      <FaBars
        className="header__menu"
        size={26}
        onClick={() => handleSetSidebar()}
      />
      <h1 className="header__logo">
        Mini<span>Tube</span>
      </h1>
      <form>
        <input type="text" placeholder="Search" />
        <button type="submit">
          <AiOutlineSearch size={22} />
        </button>
      </form>
      <div className="header__icons">
        <MdNotifications size={28} />
        <MdApps size={28} />
        <img
          src="https://avatars.githubusercontent.com/u/71252906?v=4"
          alt="avatar"
        />
      </div>
    </div>
  );
}

export default Header;
