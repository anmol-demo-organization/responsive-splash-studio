import ProductSection from "@/components/ProductSection";
import { exploreProducts } from "./constants";

const ExploreOurProducts = () => {
  return (
    <ProductSection
      label="Our Products"
      title="Explore Our Products"
      products={exploreProducts}
      showViewAll
      viewAllLink="/view-all/explore-products"
    />
  );
};

export default ExploreOurProducts;
