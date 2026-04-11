import FooterBrand from "./FooterBrand";
import FooterLink from "./FooterLink";
import FooterSection from "./FooterSection";

// Constants
const FOOTER_LINKS = {
  explore: [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "About", href: "/about" },
    { name: "Best seller", href: "/best-seller" },
  ],
  social: [
    { name: "Instagram", href: "https://instagram.com", icon: "📷" },
    { name: "Facebook", href: "https://facebook.com", icon: "👍" },
  ],
  contact: [
    {
      name: "hello@sweetie.com",
      href: "mailto:hello@sweetie.com",
      type: "email",
    },
    { name: "+84 123 456 789", href: "tel:+84123456789", type: "phone" },
  ],
} as const;

// Main Component
const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-text-main px-6 md:px-12 lg:px-20 py-10 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <FooterBrand />

        <FooterSection title="Explore">
          {FOOTER_LINKS.explore.map((link) => (
            <FooterLink key={link.name} {...link} />
          ))}
        </FooterSection>

        <div className="space-y-6">
          <FooterSection title="Social">
            {FOOTER_LINKS.social.map((link) => (
              <FooterLink key={link.name} {...link} />
            ))}
          </FooterSection>

          <FooterSection title="Contact">
            {FOOTER_LINKS.contact.map((link) => (
              <FooterLink key={link.name} {...link} />
            ))}
          </FooterSection>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
