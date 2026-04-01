import clsx from "clsx";
import { NavLink } from "react-router";

interface Props{
 path: string;
 children: React.ReactNode;
}

const HeaderNav = ({ children , path } : Props) => {
  return (
    <NavLink
      className={({ isActive }) =>
        clsx(
          "menu-nav-item",
          isActive && "text-text-main font-semibold md:border-b-2 md:border-primary",
        )
      }
      to={path}
    >
      {children}
    </NavLink>
  );
};

export default HeaderNav;
