const NewArrivals = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-5 h-10 bg-primary rounded" />
          <span className="text-primary font-semibold">Featured</span>
        </div>
        
        <h2 className="text-3xl font-bold mb-8">New Arrival</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-black rounded-lg overflow-hidden relative h-[500px] group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
            <div className="absolute bottom-8 left-8 z-20 text-white">
              <h3 className="text-2xl font-bold mb-2">PlayStation 5</h3>
              <p className="text-gray-300 mb-4 max-w-xs">Black and White version of the PS5 coming out on sale.</p>
              <button className="text-white underline hover:no-underline font-semibold">Shop Now</button>
            </div>
          </div>
          
          <div className="grid grid-rows-2 gap-6">
            <div className="bg-black rounded-lg overflow-hidden relative group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
              <div className="absolute bottom-6 left-6 z-20 text-white">
                <h3 className="text-xl font-bold mb-2">Women's Collections</h3>
                <p className="text-gray-300 text-sm mb-3 max-w-xs">Featured woman collections that give you another vibe.</p>
                <button className="text-white underline hover:no-underline font-semibold text-sm">Shop Now</button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-black rounded-lg overflow-hidden relative group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                <div className="absolute bottom-4 left-4 z-20 text-white">
                  <h3 className="text-lg font-bold mb-1">Speakers</h3>
                  <p className="text-gray-300 text-xs mb-2">Amazon wireless speakers</p>
                  <button className="text-white underline hover:no-underline font-semibold text-sm">Shop Now</button>
                </div>
              </div>
              
              <div className="bg-black rounded-lg overflow-hidden relative group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                <div className="absolute bottom-4 left-4 z-20 text-white">
                  <h3 className="text-lg font-bold mb-1">Perfume</h3>
                  <p className="text-gray-300 text-xs mb-2">GUCCI INTENSE OUD EDP</p>
                  <button className="text-white underline hover:no-underline font-semibold text-sm">Shop Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
