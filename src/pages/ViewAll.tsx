import { useParams, useNavigate } from "react-router-dom";
import { flashSalesProducts, bestSellingProducts, exploreProducts } from "./Home/constants";
import ProductCard from "@/components/ProductCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

const ViewAll = () => {
  const { section } = useParams<{ section: string }>();
  const navigate = useNavigate();

  const getSectionData = () => {
    switch (section) {
      case "flash-sales":
        return {
          title: "Flash Sales",
          label: "Today's",
          products: flashSalesProducts,
        };
      case "best-selling":
        return {
          title: "Best Selling Products",
          label: "This Month",
          products: bestSellingProducts,
        };
      case "explore-products":
        return {
          title: "Explore Our Products",
          label: "Our Products",
          products: exploreProducts,
        };
      default:
        return {
          title: "Products",
          label: "All",
          products: [],
        };
    }
  };

  const sectionData = getSectionData();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-12">
          <div className="container mx-auto px-4">
            <Button
              variant="outline"
              onClick={() => navigate("/")}
              className="mb-6"
            >
              <ChevronLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-5 h-10 bg-primary rounded" />
              <span className="text-primary font-semibold">{sectionData.label}</span>
            </div>

            <h1 className="text-4xl font-bold mb-8">{sectionData.title}</h1>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {sectionData.products.map((product) => (
                <ProductCard key={product.id} id={product.id} {...product} />
              ))}
            </div>

            {sectionData.products.length === 0 && (
              <div className="text-center py-12 text-muted-foreground">
                No products found in this section.
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ViewAll;
