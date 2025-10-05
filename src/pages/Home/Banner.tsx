import heroImage from "@/assets/hero-landscape.jpg";

const Banner = () => {
  return (
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
  );
};

export default Banner;
