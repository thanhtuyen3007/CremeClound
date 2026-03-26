import type { Product } from "@/features/products/types/product";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: Product[];
}

const ProductGrid = ({products} : ProductGridProps) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-6 mx-4" > 
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
     </div>
    </div>
  )
}

export default ProductGrid
