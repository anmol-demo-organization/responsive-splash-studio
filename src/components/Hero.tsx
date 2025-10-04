import heroImage from "@/assets/hero-landscape.jpg";

const Hero = () => {
  return (
    <section className="relative h-[400px] md:h-[500px] overflow-hidden">
      <img 
        src={heroImage} 
        alt="Mountain landscape" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
    </section>
  );
};

export default Hero;
