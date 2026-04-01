import Button from "@/components/ui/Button";
import QuantitySelector from "@/components/ui/QuantitySelector";
import type { Product } from "@features/products/types/product";

const ProductDetailOverview = ({ product }: { product: Product }) => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 lg:gap-6 py-3 lg:py-6 ">
      {/* Image */}
      <div className="flex items-center justify-center p-4">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="max-w-full h-auto shadow-lg"
        />
      </div>
      {/* Information */}
      <div className="flex flex-col gap-6 lg:gap-10">
        <h2 className="text-base md:text-xl lg:text-3xl text-text-main uppercase line-clamp-2">{product.name}</h2>
        <p className="text-base lg:text-3xl">
          {product.price.toFixed(3)}VND
        </p>
        <p className="text-text-main text-sm lg:text-base line-clamp-5">
          {product.description}
        </p>
        <div className="mt-auto">
          <QuantitySelector />
          <Button variant="primary" size="lg" fullWidth>
            Add to Cart
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailOverview;
