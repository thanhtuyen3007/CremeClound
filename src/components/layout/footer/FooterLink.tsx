import { Link } from "react-router";
// Types
interface FooterLinkProps {
  name: string;
  href: string;
  icon?: string;
}
// Sub-components
const FooterLink: React.FC<FooterLinkProps> = ({ name, href, icon }) => {
  const isExternal = href.startsWith("http") || href.startsWith("mailto");
  const isInternalLink = !isExternal && !href.startsWith("tel");

  const linkClasses =
    "hover:underline cursor-pointer transition-all hover:opacity-80 hover:translate-x-0.5 block w-fit";

  if (isInternalLink) {
    return (
      <li>
        <Link to={href} className={linkClasses}>
          {icon && <span className="mr-2">{icon}</span>}
          {name}
        </Link>
      </li>
    );
  }

  return (
    <li>
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className={linkClasses}
      >
        {icon && <span className="mr-2">{icon}</span>}
        {name}
      </a>
    </li>
  );
};

export default FooterLink;
