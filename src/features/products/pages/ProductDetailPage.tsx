import ProductDetailOverview from "@features/products/components/ProductDetailOverview";
import ProductDetailDesc from "@features/products/components/ProductDetailDesc";
import RelatedProducts from "@features/products/components/RelatedProducts";
import { useParams } from "react-router";
import { products } from "@features/products/services/mockProducts";

const ProductDetailPage = () => {
  const { id } = useParams();

  const product = products.find((item) => item.id === id);

  if (!product) return <div>Product not found</div>;
  return (
    <div>
      <ProductDetailOverview product={product} />
      <ProductDetailDesc />
      <RelatedProducts />
    </div>
  );
};

export default ProductDetailPage;
