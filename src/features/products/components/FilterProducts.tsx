import Button from "@/components/ui/Button";
import Checked from "@/components/ui/Checked";

interface Props {
  filtered: boolean;
  onClose: () => void;
}

const FilterProducts = ({ filtered, onClose }: Props) => {
  const categories = {
    name: "Category",
    options: ["All", "Cakes", "Candies", "Ice Cream"],
  };
  const specials = {
    name: "Special",
    options: ["On Sale", "New Arrivals", "Best Sellers"],
  };
  return (
    <div>
      {/* Filter for desktop/tablet */}
      <div className="hidden md:block w-full h-fit bg-bg-milk px-3 py-5 shadow-md ">
        <h4 className="text-text-main font-semibold py-3">Filter Products</h4>
        {/* Category */}
        <div>
          <h5 className="text-text-main py-2"> Category</h5>
          {categories.options.map((category) => (
            <Checked key={category} value={category} name={categories.name} />
          ))}
        </div>
        {/* Special */}
        <div>
          <h5 className="text-text-main py-2">Special</h5>
          {specials.options.map((special) => (
            <Checked key={special} value={special} name={specials.name} />
          ))}
        </div>
      </div>

      {/* Filter for mobile */}
      {filtered && (
        <div className="block md:hidden w-full h-fit bg-bg-milk px-3 py-5 shadow-md absolute top-0 left-0">
          <h4 className="text-text-main font-semibold py-3">Filter Products</h4>
          {/* Category */}
          <div>
            <h5 className="text-text-main py-2"> Category</h5>
            {categories.options.map((category) => (
              <Checked key={category} value={category} name={categories.name} />
            ))}
          </div>
          {/* Special */}
          <div>
            <h5 className="text-text-main py-2">Special</h5>
            {specials.options.map((special) => (
              <Checked key={special} value={special} name={specials.name} />
            ))}
          </div>
          {/* Button submit */}
          <div className="w-fit mx-auto py-3">
            <Button className="mx-auto" variant="primary" onClick={onClose}>
              Apply Filters
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterProducts;
