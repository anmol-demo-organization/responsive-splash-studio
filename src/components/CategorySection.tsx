import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  { id: 1, name: "Phone" },
  { id: 2, name: "Computer" },
  { id: 3, name: "SmartWatch" },
  { id: 4, name: "Camera" },
  { id: 5, name: "HeadPhones" },
  { id: 6, name: "Gaming" },
];

const CategorySection = () => {
  return (
    <section className="py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-5 h-10 bg-primary rounded" />
          <span className="text-primary font-semibold">Categories</span>
        </div>
        
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Browse By Category</h2>
          
          <div className="flex items-center gap-2">
            <Button variant="default" className="bg-primary hover:bg-primary/90">
              View All
            </Button>
            <Button variant="outline" size="icon">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="aspect-square border rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all cursor-pointer group"
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-secondary group-hover:bg-primary-foreground/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">📱</span>
                </div>
                <span className="font-medium">{category.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
