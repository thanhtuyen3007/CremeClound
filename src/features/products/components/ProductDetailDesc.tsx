import ProductDetailSpecification from "./ProductDetailSpecification";

const ProductDetailDesc = () => {
  return (
    <div className="py-5">
      <ProductDetailSpecification
        title="thành phần:"
        children="Sản phẩm được làm từ các nguyên liệu chọn lọc như sữa, đường, bột mì (đối với bánh), cacao, trái cây hoặc hương liệu thực phẩm an toàn, tùy theo từng hương vị."
      />
      <ProductDetailSpecification
        title="Hướng dẫn:"
        children="Sử dụng trực tiếp sau khi mở bao bì. Ngon hơn khi dùng lạnh đối với sản phẩm kem hoặc bảo quản ở nhiệt độ phù hợp theo từng loại sản phẩm."
      />
      <ProductDetailSpecification
        title="Cách dùng:"
        children="Dùng ngay sau khi mở bao bì. Có thể kết hợp cùng trà, cà phê hoặc các món tráng miệng khác để tăng trải nghiệm hương vị."
      />
      <ProductDetailSpecification
        title="Bảo quản:"
        children="Bảo quản nơi khô ráo, thoáng mát. Tránh ánh nắng trực tiếp. Đối với sản phẩm kem, bảo quản trong ngăn đông. Đậy kín sau khi mở bao bì để giữ nguyên chất lượng sản phẩm."
      />
      <ProductDetailSpecification
        title="Hạn dùng:"
        children="Xem trên bao bì sản phẩm. Khuyến nghị sử dụng trong thời gian sớm nhất sau khi mở để đảm bảo hương vị tốt nhất."
      />
    </div>
  );
};

export default ProductDetailDesc;
