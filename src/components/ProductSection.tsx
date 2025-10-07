import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

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
  viewAllLink?: string;
}

const ProductSection = ({ label, title, products, showViewAll, viewAllLink }: ProductSectionProps) => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Calculate items per page based on screen size to maintain 2 rows
  useEffect(() => {
    const calculateItemsPerPage = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setItemsPerPage(4); // 2 cols × 2 rows = 4 items
      } else if (width < 1024) {
        setItemsPerPage(6); // 3 cols × 2 rows = 6 items
      } else if (width < 1280) {
        setItemsPerPage(8); // 4 cols × 2 rows = 8 items
      } else {
        setItemsPerPage(10); // 5 cols × 2 rows = 10 items
      }
    };

    calculateItemsPerPage();
    window.addEventListener('resize', calculateItemsPerPage);
    return () => window.removeEventListener('resize', calculateItemsPerPage);
  }, []);

  // Reset to page 1 when items per page changes
  useEffect(() => {
    setCurrentPage(1);
  }, [itemsPerPage]);

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

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
              <Button 
                variant="default" 
                className="bg-primary hover:bg-primary/90"
                onClick={() => viewAllLink && navigate(viewAllLink)}
              >
                View All
              </Button>
            )}
            <Button 
              variant="outline" 
              size="icon"
              onClick={handlePrevious}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="icon"
              onClick={handleNext}
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-8">
          {currentProducts.map((product) => (
            <ProductCard key={product.id} id={product.id} {...product} />
          ))}
        </div>

        {totalPages > 1 && (
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  onClick={handlePrevious}
                  className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                />
              </PaginationItem>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <PaginationItem key={page}>
                  <PaginationLink
                    onClick={() => handlePageClick(page)}
                    isActive={currentPage === page}
                    className={currentPage === page 
                      ? "cursor-pointer bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground" 
                      : "cursor-pointer"}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))}
              
              <PaginationItem>
                <PaginationNext 
                  onClick={handleNext}
                  className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </div>
    </section>
  );
};

export default ProductSection;
