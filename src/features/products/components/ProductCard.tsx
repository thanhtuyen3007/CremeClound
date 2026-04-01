import Button from "@/components/ui/Button";
import type { Product } from "../types/product";
import { Link } from "react-router";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link
      to={`/products/${product.id}`}
      aria-label={`View details for ${product.name}`}
      className="w-full h-auto aspect-282/379 "
    >
      <div className="shadow-card px-5 md:px-3 lg:px-5 py-4 rounded-2xl overflow-hidden ">
        {/* Image */}
        <div>
          <img
            className="w-full object-cover shadow-img rounded-xl"
            src={product.imageUrl}
            alt={product.name}
          />
        </div>

        {/* Content */}
        <div className="flex flex-col h-full">
          <h3 className="my-2 text-text-soft md:text-base text-sm line-clamp-1">
            {product.name}
          </h3>
          <div className="flex items-center justify-between">
            <div className="text-text-main text-base">
              ${product.price.toFixed(2)}
            </div>
            <Button className="mt-auto" variant="outline" size="md">
              Buy now
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
