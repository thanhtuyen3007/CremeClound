interface Props {
  title: string;
  children: React.ReactNode;
}

const ProductDetailSpecification = ({ title, children }: Props) => {
  return (
    <div className="py-1 mb-2">
      <h2 className="text-base md:text-lg font-semibold capitalize py-2">
        {title}
      </h2>
      <p className="text-sm md:text-base">{children}</p>
    </div>
  );
};

export default ProductDetailSpecification;
