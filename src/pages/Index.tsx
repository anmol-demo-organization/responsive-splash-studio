import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";
import CategorySection from "@/components/CategorySection";
import NewArrivals from "@/components/NewArrivals";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-landscape.jpg";

const Index = () => {
  const flashSalesProducts = [
    { id: 1, name: "HAVIT HV-G92 Gamepad", price: 120, originalPrice: 160, rating: 5, reviewCount: 88 },
    { id: 2, name: "AK-900 Wired Keyboard", price: 960, originalPrice: 1160, rating: 4, reviewCount: 75 },
    { id: 3, name: "IPS LCD Gaming Monitor", price: 370, originalPrice: 400, rating: 5, reviewCount: 99 },
    { id: 4, name: "S-Series Comfort Chair", price: 375, originalPrice: 400, rating: 4.5, reviewCount: 99 },
    { id: 5, name: "RGB Liquid CPU Cooler", price: 160, originalPrice: 170, rating: 4.5, reviewCount: 65 },
  ];

  const bestSellingProducts = [
    { id: 1, name: "The North Coat", price: 260, originalPrice: 360, rating: 5, reviewCount: 65 },
    { id: 2, name: "Gucci Duffle Bag", price: 960, originalPrice: 1160, rating: 4.5, reviewCount: 65 },
    { id: 3, name: "RGB Liquid CPU Cooler", price: 160, originalPrice: 170, rating: 4.5, reviewCount: 65 },
    { id: 4, name: "Small BookShelf", price: 360, rating: 5, reviewCount: 65 },
  ];

  const exploreProducts = [
    { id: 1, name: "Breed Dry Dog Food", price: 100, rating: 3, reviewCount: 35 },
    { id: 2, name: "CANON EOS DSLR Camera", price: 360, rating: 4, reviewCount: 95 },
    { id: 3, name: "ASUS FHD Gaming Laptop", price: 700, rating: 5, reviewCount: 325 },
    { id: 4, name: "Curology Product Set", price: 500, rating: 4, reviewCount: 145 },
    { id: 5, name: "Kids Electric Car", price: 960, rating: 5, reviewCount: 65 },
    { id: 6, name: "Jr. Zoom Soccer Cleats", price: 1160, rating: 5, reviewCount: 35 },
    { id: 7, name: "GP11 Shooter USB Gamepad", price: 660, rating: 4.5, reviewCount: 55 },
    { id: 8, name: "Quilted Satin Jacket", price: 660, rating: 4.5, reviewCount: 55 },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      
      <main>
        <ProductSection
          label="Today's"
          title="Flash Sales"
          products={flashSalesProducts}
        />

        <CategorySection />

        <ProductSection
          label="This Month"
          title="Best Selling Products"
          products={bestSellingProducts}
          showViewAll
        />

        {/* Mid banner */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img 
                src={heroImage} 
                alt="Promotional banner" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        <ProductSection
          label="Our Products"
          title="Explore Our Products"
          products={exploreProducts}
        />

        <NewArrivals />

        <Features />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
