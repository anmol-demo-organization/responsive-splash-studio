import { Star } from "lucide-react";

interface ProductCardProps {
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image?: string;
}

const ProductCard = ({ 
  name, 
  price, 
  originalPrice, 
  rating, 
  reviewCount,
  image 
}: ProductCardProps) => {
  return (
    <div className="group cursor-pointer">
      <div className="aspect-square bg-secondary rounded-lg mb-4 overflow-hidden relative">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-muted-foreground">Product Image</span>
          </div>
        )}
        {originalPrice && (
          <div className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs px-2 py-1 rounded">
            -{Math.round(((originalPrice - price) / originalPrice) * 100)}%
          </div>
        )}
      </div>
      
      <h3 className="font-medium mb-2 group-hover:text-primary transition-colors">{name}</h3>
      
      <div className="flex items-center gap-3 mb-2">
        <span className="text-price font-semibold">${price}</span>
        {originalPrice && (
          <span className="text-muted-foreground line-through text-sm">${originalPrice}</span>
        )}
      </div>
      
      <div className="flex items-center gap-2">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < Math.floor(rating)
                  ? "fill-rating text-rating"
                  : "fill-none text-border"
              }`}
            />
          ))}
        </div>
        <span className="text-sm text-muted-foreground">({reviewCount})</span>
      </div>
    </div>
  );
};

export default ProductCard;
