import type { Product } from "../types/product";
import { Link } from "react-router";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="shadow-lg w-full h-auto aspect-282/379 px-5 py-4 rounded-lg overflow-hidden ">
        {/* Image */}
        <div>
          <img
            className="w-full h-auto object-cover shadow-sm rounded-xl"
            src={product.imageUrl}
            alt={product.name}
          />
        </div>

        {/* Content */}
        <div>
          <h3 className="my-2 text-text-soft md:text-base text-sm">{product.name}</h3>
          <div className="flex items-center justify-between mt-2 ">
            <div className="text-text-main text-base">${product.price.toFixed(2)}</div>
            <button className="px-4 py-2">Buy now</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
