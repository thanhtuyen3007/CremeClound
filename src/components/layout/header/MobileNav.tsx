import Button from "@/components/ui/Button";
import HeaderNav from "./HeaderNav";
import { X } from "lucide-react";

interface MobileNavProps {
  navItems: { path: string; label: string }[];
  onClose: () => void;
}

const MobileNav = ({ navItems = [], onClose }: MobileNavProps) => {
  return (
    <div className="fixed inset-0 top-0 z-9 w-full h-full px-4 py-8 bg-bg-milk text-text-main">
      {/* Btn close menu bar */}
      <Button variant="none" onClick={onClose} className="absolute top-8 right-4">
        <X size={30} />
      </Button>
      {/* Mobile menu */}
      <nav aria-label="Mobile navigation" className="w-full h-full">
        <ul className="flex flex-col h-full space-y-6">
          {navItems.map((item) => (
           <div  key={item.label} onClick={onClose} >
              <li>
                <HeaderNav children={item.label} path={item.path} />
              </li>
           </div>
          ))}
        </ul>
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border-soft">
        <p className="text-sm text-text-soft text-center">
          © 2026 Creme Cloud
        </p>
      </div>
      </nav>
      
    </div>
  );
};

export default MobileNav;
