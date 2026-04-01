import { products } from "../services/mockProducts";
import ProductGrid from "@/features/products/components/ProductGrid";
import FilterProducts from "../components/FilterProducts";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { ListFilterPlus } from "lucide-react";
import { useState } from "react";
const ProductsPage = () => {
  const [isFiltered, setFiltered] = useState(false);
  return (
    <div>
      <h2 className="h2-section-title">Crème Cloud products</h2>

      {/* Product Search */}
      <div className="mb-6 flex flex-row items-center">
        <Input placeholder="Search desserts..." />
        <Button
          className="md:hidden"
          variant="none"
          onClick={() => setFiltered(!isFiltered)}
        >
          <ListFilterPlus />
        </Button>
      </div>

      {/* Products Content */}

      <div className="md:grid md:grid-cols-4 gap-3 lg:gap-6 relative">
        {/* Filter */}
        <FilterProducts
          filtered={isFiltered}
          onClose={() => setFiltered(false)}
        />
        {/* Product List */}
        <div className="col-span-3">
          {" "}
          <ProductGrid products={products} />
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
