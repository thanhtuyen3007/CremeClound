import { images } from "@/assets/assetImages";
import { Link } from "react-router";

const FooterBrand: React.FC = () => {
  return (
    <div className="space-y-4">
      <Link to="/" aria-label="Go to homepage" className="inline-block group">
        <img
          src={images.logoIcon}
          alt="Crème Cloud - Homepage"
          className="w-40 h-auto object-none transition-transform group-hover:scale-105"
          loading="lazy"
        />
      </Link>
      <p className="text-sm lg:text-base leading-relaxed">
        Sweetie – A little sweetness for every day.
      </p>
      <p className="text-sm lg:text-base leading-relaxed">
        Ice-cold ice cream, soft cakes, and tiny candies — just enough to make
        your day a little brighter.
      </p>
      <p className="text-xs lg:text-sm pt-4 border-t border-[#4b3a2f]/20">
        © 2026 Crème Cloud. Designed and crafted by Thanh Tuyen.
      </p>
    </div>
  );
};
export default FooterBrand;
