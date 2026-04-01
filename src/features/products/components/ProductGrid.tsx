import type { Product } from "@/features/products/types/product";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: Product[];
}

const ProductGrid = ({products} : ProductGridProps) => {
  return (
    
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-x-6 mx-4" > 
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
     </div>
    
  )
}

export default ProductGrid
