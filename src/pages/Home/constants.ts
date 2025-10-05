// Product data - ready for database migration
// Field names match future database schema

import gamepadImg from "@/assets/products/gamepad.jpg";
import keyboardImg from "@/assets/products/keyboard.jpg";
import monitorImg from "@/assets/products/monitor.jpg";
import chairImg from "@/assets/products/chair.jpg";
import cpuCoolerImg from "@/assets/products/cpu-cooler.jpg";
import coatImg from "@/assets/products/coat.jpg";
import bagImg from "@/assets/products/bag.jpg";
import bookshelfImg from "@/assets/products/bookshelf.jpg";
import dogFoodImg from "@/assets/products/dog-food.jpg";
import cameraImg from "@/assets/products/camera.jpg";
import laptopImg from "@/assets/products/laptop.jpg";
import skincareImg from "@/assets/products/skincare.jpg";
import kidsCarImg from "@/assets/products/kids-car.jpg";
import soccerCleatsImg from "@/assets/products/soccer-cleats.jpg";
import usbGamepadImg from "@/assets/products/usb-gamepad.jpg";
import jacketImg from "@/assets/products/jacket.jpg";

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image?: string;
  description?: string;
  inStock?: boolean;
  colors?: Array<{ name: string; class: string }>;
  sizes?: string[];
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
    reviewCount: 88,
    image: gamepadImg,
    description: "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",
    inStock: true,
    colors: [
      { name: "blue", class: "bg-blue-500" },
      { name: "red", class: "bg-red-500" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  { 
    id: 2, 
    name: "AK-900 Wired Keyboard", 
    price: 960, 
    originalPrice: 1160, 
    rating: 4, 
    reviewCount: 75,
    image: keyboardImg,
    description: "Mechanical RGB gaming keyboard with premium switches and customizable backlighting. Perfect for gaming and typing.",
    inStock: true,
    colors: [
      { name: "black", class: "bg-gray-900" },
      { name: "white", class: "bg-gray-100" },
    ],
    sizes: ["Standard"],
  },
  { 
    id: 3, 
    name: "IPS LCD Gaming Monitor", 
    price: 370, 
    originalPrice: 400, 
    rating: 5, 
    reviewCount: 99,
    image: monitorImg,
    description: "27-inch IPS display with 144Hz refresh rate and 1ms response time. Perfect for competitive gaming.",
    inStock: true,
  },
  { 
    id: 4, 
    name: "S-Series Comfort Chair", 
    price: 375, 
    originalPrice: 400, 
    rating: 4.5, 
    reviewCount: 99,
    image: chairImg,
    description: "Ergonomic gaming chair with lumbar support and adjustable armrests. Designed for long gaming sessions.",
    inStock: true,
    colors: [
      { name: "red", class: "bg-red-500" },
      { name: "black", class: "bg-gray-900" },
    ],
  },
  { 
    id: 5, 
    name: "RGB Liquid CPU Cooler", 
    price: 160, 
    originalPrice: 170, 
    rating: 4.5, 
    reviewCount: 65,
    image: cpuCoolerImg,
    description: "High-performance liquid cooling system with RGB lighting. Keeps your CPU running cool under heavy loads.",
    inStock: true,
  },
];

export const bestSellingProducts: Product[] = [
  { 
    id: 6, 
    name: "The North Coat", 
    price: 260, 
    originalPrice: 360, 
    rating: 5, 
    reviewCount: 65,
    image: coatImg,
    description: "Premium winter coat with water-resistant fabric and insulated lining. Perfect for cold weather.",
    inStock: true,
    colors: [
      { name: "beige", class: "bg-amber-200" },
      { name: "black", class: "bg-gray-900" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  { 
    id: 7, 
    name: "Gucci Duffle Bag", 
    price: 960, 
    originalPrice: 1160, 
    rating: 4.5, 
    reviewCount: 65,
    image: bagImg,
    description: "Luxury designer duffle bag with signature monogram pattern. Spacious and stylish for travel.",
    inStock: true,
    colors: [
      { name: "brown", class: "bg-amber-700" },
      { name: "black", class: "bg-gray-900" },
    ],
  },
  { 
    id: 8, 
    name: "RGB Liquid CPU Cooler", 
    price: 160, 
    originalPrice: 170, 
    rating: 4.5, 
    reviewCount: 65,
    image: cpuCoolerImg,
    description: "High-performance liquid cooling system with RGB lighting. Keeps your CPU running cool under heavy loads.",
    inStock: true,
  },
  { 
    id: 9, 
    name: "Small BookShelf", 
    price: 360, 
    rating: 5, 
    reviewCount: 65,
    image: bookshelfImg,
    description: "Modern minimalist bookshelf with three shelves. Perfect for organizing books and decor.",
    inStock: true,
    colors: [
      { name: "wood", class: "bg-amber-600" },
      { name: "white", class: "bg-gray-100" },
    ],
  },
];

export const exploreProducts: Product[] = [
  { 
    id: 10, 
    name: "Breed Dry Dog Food", 
    price: 100, 
    rating: 3, 
    reviewCount: 35,
    image: dogFoodImg,
    description: "Premium dry dog food with natural ingredients. Nutritionally balanced for adult dogs.",
    inStock: true,
  },
  { 
    id: 11, 
    name: "CANON EOS DSLR Camera", 
    price: 360, 
    rating: 4, 
    reviewCount: 95,
    image: cameraImg,
    description: "Professional DSLR camera with 24MP sensor and full HD video recording. Perfect for photography enthusiasts.",
    inStock: true,
  },
  { 
    id: 12, 
    name: "ASUS FHD Gaming Laptop", 
    price: 700, 
    rating: 5, 
    reviewCount: 325,
    image: laptopImg,
    description: "High-performance gaming laptop with RTX graphics and 144Hz display. Built for serious gamers.",
    inStock: true,
    colors: [
      { name: "black", class: "bg-gray-900" },
    ],
  },
  { 
    id: 13, 
    name: "Curology Product Set", 
    price: 500, 
    rating: 4, 
    reviewCount: 145,
    image: skincareImg,
    description: "Complete skincare set with custom formulated products. Dermatologist-tested and cruelty-free.",
    inStock: true,
  },
  { 
    id: 14, 
    name: "Kids Electric Car", 
    price: 960, 
    rating: 5, 
    reviewCount: 65,
    image: kidsCarImg,
    description: "Battery-powered ride-on car for kids. Features realistic design and remote control for parents.",
    inStock: true,
    colors: [
      { name: "red", class: "bg-red-500" },
      { name: "blue", class: "bg-blue-500" },
    ],
  },
  { 
    id: 15, 
    name: "Jr. Zoom Soccer Cleats", 
    price: 1160, 
    rating: 5, 
    reviewCount: 35,
    image: soccerCleatsImg,
    description: "Youth soccer cleats with lightweight design and superior traction. Perfect for young athletes.",
    inStock: true,
    sizes: ["3Y", "4Y", "5Y", "6Y", "7Y"],
  },
  { 
    id: 16, 
    name: "GP11 Shooter USB Gamepad", 
    price: 660, 
    rating: 4.5, 
    reviewCount: 55,
    image: usbGamepadImg,
    description: "USB gaming controller with ergonomic design and programmable buttons. Compatible with PC and console.",
    inStock: true,
    colors: [
      { name: "black", class: "bg-gray-900" },
      { name: "blue", class: "bg-blue-500" },
    ],
  },
  { 
    id: 17, 
    name: "Quilted Satin Jacket", 
    price: 660, 
    rating: 4.5, 
    reviewCount: 55,
    image: jacketImg,
    description: "Stylish quilted satin jacket with comfortable fit. Perfect for casual and semi-formal occasions.",
    inStock: true,
    colors: [
      { name: "olive", class: "bg-green-700" },
      { name: "black", class: "bg-gray-900" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
];

// Helper function to get all products
export const getAllProducts = (): Product[] => {
  return [...flashSalesProducts, ...bestSellingProducts, ...exploreProducts];
};

// Helper function to get product by ID
export const getProductById = (id: number): Product | undefined => {
  return getAllProducts().find(product => product.id === id);
};

export const categories: Category[] = [
  { id: 1, name: "Phone" },
  { id: 2, name: "Computer" },
  { id: 3, name: "SmartWatch" },
  { id: 4, name: "Camera" },
  { id: 5, name: "HeadPhones" },
  { id: 6, name: "Gaming" },
];
