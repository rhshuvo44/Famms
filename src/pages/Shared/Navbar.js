import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="sticky top-0 z-50 h-16 bg-base-100 flex justify-between items-center shadow-sm px-4 md:px-10">
      <Logo />
      <Links isVisible={isVisible} />
      <Bar isVisible={isVisible} setIsVisible={setIsVisible} />
    </div>
  );
};

const Logo = () => (
  <div className="flex items-center gap-2">
    <Link to="/" className="text-primary text-xl font-bold">
      <img width="250" src={logo} alt="" srcset="" />
    </Link>
  </div>
);

const Links = ({ isVisible }) => {
  return (
    <div
      className={`flex flex-col fixed top-[65px] font-bold px-16 uppercase ${
        isVisible ? "left-[0%]" : "left-[-100%]"
      } transition-all delay-200 bottom-0 w-full bg-base-100 p-4 gap-2 md:static md:w-auto md:flex md:flex-row md:item-center md:gap-8`}
    >
      <LinkItem to="/" title="Home" />
      <LinkItem to="/products" title="products" />
      <LinkItem to="/blog" title="blog" />
      <LinkItem to="/contact" title="contact" />
      <LinkItem to="/login" title="login" />
    </div>
  );
};

const LinkItem = ({ to, title, Icon }) => (
  <NavLink
    className={({ isActive }) =>
      isActive
        ? "flex items-center gap-2 text-primary font-semibold"
        : "flex items-center gap-2"
    }
    to={to}
  >
    {title}
  </NavLink>
);

const Bar = ({ isVisible, setIsVisible }) => (
  <div className="flex md:hidden">
    <IoMenu
      className="text-primary text-2xl cursor-pointer"
      onClick={() => setIsVisible(!isVisible)}
    />
  </div>
);

export default Navbar;
