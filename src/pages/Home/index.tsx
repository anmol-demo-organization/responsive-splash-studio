import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NewArrivals from "@/components/NewArrivals";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import FlashSales from "./FlashSales";
import BrowseByCategory from "./BrowseByCategory";
import BestSellingProducts from "./BestSellingProducts";
import Banner from "./Banner";
import ExploreOurProducts from "./ExploreOurProducts";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      
      <main>
        <FlashSales />
        <BrowseByCategory />
        <BestSellingProducts />
        <Banner />
        <ExploreOurProducts />
        <NewArrivals />
        <Features />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
