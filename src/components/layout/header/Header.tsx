import logoIcon from "@/assets/images/creme-cloud-logo.svg";
import HeaderNav from "./HeaderNav";
import { Menu, ShoppingCart, UserRound } from "lucide-react";
import { Link } from "react-router";
import MobileNav from "./MobileNav";
import Button from "@/components/ui/Button";
import { useState } from "react";

const Header = () => {
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/products", label: "Menu" },
    { path: "/about", label: "About" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-99 bg-surface-header h-16 md:h-20 flex items-center justify-between px-4 md:px-8 lg:px-30 ">
      {/* Logo */}
      <Link to="/" aria-label="Home" className="w-50 h-full hidden md:block">
        <img
          className="w-full h-full lg:object-none"
          src={logoIcon}
          alt="Creme Cloud Logo"
        />
      </Link>

      {/* Desktop Navigation */}
      <nav aria-label="Main navigation" className="hidden md:block">
        <ul className="flex space-x-4">
          {navItems.map((item) => (
            <li key={item.path}>
              <HeaderNav children={item.label} path={item.path} />
            </li>
          ))}
        </ul>
      </nav>

      {/* MobileNav */}
      <div className="md:hidden">
        <Button
          variant="none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu size={30} />
        </Button>

          {/* Mobile nav content */}
        {isMobileMenuOpen && (
          <MobileNav
            navItems={navItems}
            onClose={() => setIsMobileMenuOpen(false)}
          />
        )}
      </div>

      {/* Cart Icon & User Profile Icon */}
      <div className="flex items-center gap-4">
        <Link
          to="/profile"
          aria-label="User Profile"
          className="text-text-soft hover:text-text-main p-2 hover:scale-105"
        >
          <UserRound size={30} />
        </Link>

        <Link
          to="/cart"
          aria-label="Shopping Cart"
          className="ml-4 text-text-soft hover:text-text-main p-2 hover:scale-105"
        >
          <ShoppingCart size={30} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
