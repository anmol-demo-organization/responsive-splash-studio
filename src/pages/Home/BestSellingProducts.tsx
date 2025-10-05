import ProductSection from "@/components/ProductSection";
import { bestSellingProducts } from "./constants";

const BestSellingProducts = () => {
  return (
    <ProductSection
      label="This Month"
      title="Best Selling Products"
      products={bestSellingProducts}
      showViewAll
    />
  );
};

export default BestSellingProducts;
