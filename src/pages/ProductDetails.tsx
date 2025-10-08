import { useState, useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Star, Heart, Minus, Plus, Truck, RotateCcw } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { getProductById, getAllProducts } from "@/pages/Home/constants";

const ProductDetails = () => {
  const { id } = useParams();
  const { toast } = useToast();
  
  // Get product by ID
  const product = getProductById(Number(id));
  
  // If product not found, redirect to home
  if (!product) {
    return <Navigate to="/" replace />;
  }

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0]?.name || "");
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || "");
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Get related products (random products excluding current one)
  const allProducts = getAllProducts();
  const relatedProducts = allProducts
    .filter(p => p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    toast({
      title: "Added to cart!",
      description: `${quantity} ${product.name} added to your cart.`,
    });
  };

  const handleToggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    toast({
      title: isWishlisted ? "Removed from wishlist" : "Added to wishlist",
      description: isWishlisted ? "Product removed from your wishlist." : "Product added to your wishlist.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <span className="hover:text-foreground transition-colors cursor-pointer">Gaming</span>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </div>
        </div>

        {/* Product Details */}
        <div className="container mx-auto px-4 pb-16">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square bg-secondary rounded-lg flex items-center justify-center overflow-hidden">
                {product.image ? (
                  <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
                ) : (
                  <span className="text-muted-foreground text-lg">Product Image</span>
                )}
              </div>
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-square bg-secondary rounded-lg cursor-pointer hover:ring-2 hover:ring-primary transition-all overflow-hidden flex items-center justify-center">
                    {product.image ? (
                      <img src={product.image} alt={`${product.name} ${i}`} className="w-full h-full object-contain" />
                    ) : (
                      <span className="text-muted-foreground text-xs">{i}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold mb-3">{product.name}</h1>
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < product.rating ? "fill-rating text-rating" : "fill-none text-border"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">({product.reviewCount} Reviews)</span>
                  </div>
                  <span className="text-sm">|</span>
                  <span className={`text-sm ${product.inStock ? "text-green-500" : "text-red-500"}`}>
                    {product.inStock ? "In Stock" : "Out of Stock"}
                  </span>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <p className="text-3xl font-semibold">${product.price.toFixed(2)}</p>
                  {product.originalPrice && (
                    <p className="text-xl text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</p>
                  )}
                </div>
                <p className="text-muted-foreground pb-6 border-b">
                  {product.description || "No description available for this product."}
                </p>
              </div>

              {/* Colors */}
              {product.colors && product.colors.length > 0 && (
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="font-medium">Colours:</span>
                    <div className="flex gap-2">
                      {product.colors.map((color) => (
                        <button
                          key={color.name}
                          onClick={() => setSelectedColor(color.name)}
                          className={`w-8 h-8 rounded-full ${color.class} ${
                            selectedColor === color.name ? "ring-2 ring-foreground ring-offset-2" : ""
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Sizes */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="font-medium">Size:</span>
                    <div className="flex gap-2">
                      {product.sizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`px-4 py-2 border rounded ${
                            selectedSize === size
                              ? "bg-primary text-primary-foreground border-primary"
                              : "border-input hover:border-primary transition-colors"
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Quantity & Actions */}
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center border rounded">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-3 hover:bg-accent transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-6 py-3 border-x min-w-[80px] text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <Button size="lg" className="flex-1 min-w-[200px]" onClick={handleAddToCart}>
                  Buy Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={handleToggleWishlist}
                  className={isWishlisted ? "bg-primary text-primary-foreground" : ""}
                >
                  <Heart className={`h-5 w-5 ${isWishlisted ? "fill-current" : ""}`} />
                </Button>
              </div>

              {/* Delivery Info */}
              <div className="space-y-3">
                <div className="border rounded-lg p-4 flex items-start gap-4">
                  <Truck className="h-6 w-6 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Free Delivery</h4>
                    <p className="text-sm text-muted-foreground">
                      Enter your postal code for Delivery Availability
                    </p>
                  </div>
                </div>
                <div className="border rounded-lg p-4 flex items-start gap-4">
                  <RotateCcw className="h-6 w-6 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Return Delivery</h4>
                    <p className="text-sm text-muted-foreground">
                      Free 30 Days Delivery Returns. Details
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Related Items */}
          <div className="mt-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-1 h-10 bg-primary rounded" />
              <h2 className="text-2xl font-semibold">Related Item</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetails;
