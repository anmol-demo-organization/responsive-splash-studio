// Product data - ready for database migration
// Field names match future database schema

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image?: string;
}

export interface Category {
  id: number;
  name: string;
  icon?: string;
}

export const flashSalesProducts: Product[] = [
  { 
    id: 1, 
    name: "HAVIT HV-G92 Gamepad", 
    price: 120, 
    originalPrice: 160, 
    rating: 5, 
    reviewCount: 88 
  },
  { 
    id: 2, 
    name: "AK-900 Wired Keyboard", 
    price: 960, 
    originalPrice: 1160, 
    rating: 4, 
    reviewCount: 75 
  },
  { 
    id: 3, 
    name: "IPS LCD Gaming Monitor", 
    price: 370, 
    originalPrice: 400, 
    rating: 5, 
    reviewCount: 99 
  },
  { 
    id: 4, 
    name: "S-Series Comfort Chair", 
    price: 375, 
    originalPrice: 400, 
    rating: 4.5, 
    reviewCount: 99 
  },
  { 
    id: 5, 
    name: "RGB Liquid CPU Cooler", 
    price: 160, 
    originalPrice: 170, 
    rating: 4.5, 
    reviewCount: 65 
  },
];

export const bestSellingProducts: Product[] = [
  { 
    id: 6, 
    name: "The North Coat", 
    price: 260, 
    originalPrice: 360, 
    rating: 5, 
    reviewCount: 65 
  },
  { 
    id: 7, 
    name: "Gucci Duffle Bag", 
    price: 960, 
    originalPrice: 1160, 
    rating: 4.5, 
    reviewCount: 65 
  },
  { 
    id: 8, 
    name: "RGB Liquid CPU Cooler", 
    price: 160, 
    originalPrice: 170, 
    rating: 4.5, 
    reviewCount: 65 
  },
  { 
    id: 9, 
    name: "Small BookShelf", 
    price: 360, 
    rating: 5, 
    reviewCount: 65 
  },
];

export const exploreProducts: Product[] = [
  { 
    id: 10, 
    name: "Breed Dry Dog Food", 
    price: 100, 
    rating: 3, 
    reviewCount: 35 
  },
  { 
    id: 11, 
    name: "CANON EOS DSLR Camera", 
    price: 360, 
    rating: 4, 
    reviewCount: 95 
  },
  { 
    id: 12, 
    name: "ASUS FHD Gaming Laptop", 
    price: 700, 
    rating: 5, 
    reviewCount: 325 
  },
  { 
    id: 13, 
    name: "Curology Product Set", 
    price: 500, 
    rating: 4, 
    reviewCount: 145 
  },
  { 
    id: 14, 
    name: "Kids Electric Car", 
    price: 960, 
    rating: 5, 
    reviewCount: 65 
  },
  { 
    id: 15, 
    name: "Jr. Zoom Soccer Cleats", 
    price: 1160, 
    rating: 5, 
    reviewCount: 35 
  },
  { 
    id: 16, 
    name: "GP11 Shooter USB Gamepad", 
    price: 660, 
    rating: 4.5, 
    reviewCount: 55 
  },
  { 
    id: 17, 
    name: "Quilted Satin Jacket", 
    price: 660, 
    rating: 4.5, 
    reviewCount: 55 
  },
];

export const categories: Category[] = [
  { id: 1, name: "Phone" },
  { id: 2, name: "Computer" },
  { id: 3, name: "SmartWatch" },
  { id: 4, name: "Camera" },
  { id: 5, name: "HeadPhones" },
  { id: 6, name: "Gaming" },
];
