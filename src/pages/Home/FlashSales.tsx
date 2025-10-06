import ProductSection from "@/components/ProductSection";
import { flashSalesProducts } from "./constants";

const FlashSales = () => {
  return (
    <ProductSection
      label="Today's"
      title="Flash Sales"
      products={flashSalesProducts}
      showViewAll
    />
  );
};

export default FlashSales;
