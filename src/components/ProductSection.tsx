import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "./ProductCard";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
}

interface ProductSectionProps {
  label: string;
  title: string;
  products: Product[];
  showViewAll?: boolean;
}

const ProductSection = ({ label, title, products, showViewAll }: ProductSectionProps) => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-5 h-10 bg-primary rounded" />
          <span className="text-primary font-semibold">{label}</span>
        </div>
        
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">{title}</h2>
          
          <div className="flex items-center gap-2">
            {showViewAll && (
              <Button variant="default" className="bg-primary hover:bg-primary/90">
                View All
              </Button>
            )}
            <Button variant="outline" size="icon">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} id={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
