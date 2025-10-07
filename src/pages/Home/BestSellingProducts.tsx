import ProductSection from "@/components/ProductSection";
import { bestSellingProducts } from "./constants";

const BestSellingProducts = () => {
  return (
    <ProductSection
      label="This Month"
      title="Best Selling Products"
      products={bestSellingProducts}
      showViewAll
      viewAllLink="/view-all/best-selling"
    />
  );
};

export default BestSellingProducts;
