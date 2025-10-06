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
import mouseImg from "@/assets/products/mouse.jpg";
import headphonesImg from "@/assets/products/headphones.jpg";
import smartphoneImg from "@/assets/products/smartphone.jpg";
import tabletImg from "@/assets/products/tablet.jpg";
import smartwatchImg from "@/assets/products/smartwatch.jpg";
import deskLampImg from "@/assets/products/desk-lamp.jpg";
import runningShoesImg from "@/assets/products/running-shoes.jpg";
import backpackImg from "@/assets/products/backpack.jpg";
import toothbrushImg from "@/assets/products/toothbrush.jpg";
import coffeeMakerImg from "@/assets/products/coffee-maker.jpg";
import speakerImg from "@/assets/products/speaker.jpg";
import earbudsImg from "@/assets/products/earbuds.jpg";
import hoodieImg from "@/assets/products/hoodie.jpg";
import sunglassesImg from "@/assets/products/sunglasses.jpg";
import waterBottleImg from "@/assets/products/water-bottle.jpg";

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
  { 
    id: 18, 
    name: "Wireless RGB Gaming Mouse", 
    price: 89, 
    originalPrice: 120, 
    rating: 4.8, 
    reviewCount: 156,
    image: mouseImg,
    description: "High-precision wireless gaming mouse with customizable RGB lighting and programmable buttons.",
    inStock: true,
    colors: [
      { name: "black", class: "bg-gray-900" },
      { name: "white", class: "bg-gray-100" },
    ],
  },
  { 
    id: 19, 
    name: "Premium Wireless Headphones", 
    price: 299, 
    originalPrice: 399, 
    rating: 4.9, 
    reviewCount: 89,
    image: headphonesImg,
    description: "Noise-cancelling wireless headphones with premium sound quality and 30-hour battery life.",
    inStock: true,
    colors: [
      { name: "black", class: "bg-gray-900" },
      { name: "blue", class: "bg-blue-500" },
    ],
  },
  { 
    id: 20, 
    name: "Latest Smartphone Pro", 
    price: 999, 
    originalPrice: 1199, 
    rating: 4.7, 
    reviewCount: 234,
    image: smartphoneImg,
    description: "Latest flagship smartphone with triple camera system and 5G connectivity.",
    inStock: true,
    colors: [
      { name: "black", class: "bg-gray-900" },
      { name: "blue", class: "bg-blue-500" },
      { name: "gold", class: "bg-yellow-500" },
    ],
  },
  { 
    id: 21, 
    name: "Professional Tablet", 
    price: 649, 
    originalPrice: 799, 
    rating: 4.6, 
    reviewCount: 167,
    image: tabletImg,
    description: "Professional tablet with stylus support, perfect for digital art and productivity.",
    inStock: true,
    colors: [
      { name: "black", class: "bg-gray-900" },
      { name: "silver", class: "bg-gray-400" },
    ],
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
  { 
    id: 22, 
    name: "Fitness Smartwatch", 
    price: 249, 
    originalPrice: 349, 
    rating: 4.5, 
    reviewCount: 198,
    image: smartwatchImg,
    description: "Advanced fitness smartwatch with heart rate monitoring and GPS tracking.",
    inStock: true,
    colors: [
      { name: "black", class: "bg-gray-900" },
      { name: "white", class: "bg-gray-100" },
      { name: "rose", class: "bg-pink-400" },
    ],
  },
  { 
    id: 23, 
    name: "LED Desk Lamp", 
    price: 89, 
    originalPrice: 129, 
    rating: 4.4, 
    reviewCount: 112,
    image: deskLampImg,
    description: "Adjustable LED desk lamp with touch controls and multiple brightness levels.",
    inStock: true,
    colors: [
      { name: "silver", class: "bg-gray-400" },
      { name: "black", class: "bg-gray-900" },
    ],
  },
  { 
    id: 24, 
    name: "Professional Coffee Maker", 
    price: 599, 
    originalPrice: 699, 
    rating: 4.8, 
    reviewCount: 145,
    image: coffeeMakerImg,
    description: "Professional-grade espresso machine with built-in grinder and milk frother.",
    inStock: true,
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
  { 
    id: 25, 
    name: "Premium Running Shoes", 
    price: 189, 
    originalPrice: 249, 
    rating: 4.7, 
    reviewCount: 298,
    image: runningShoesImg,
    description: "High-performance running shoes with advanced cushioning and breathable mesh upper.",
    inStock: true,
    colors: [
      { name: "neon", class: "bg-green-400" },
      { name: "blue", class: "bg-blue-500" },
    ],
    sizes: ["7", "8", "9", "10", "11", "12"],
  },
  { 
    id: 26, 
    name: "Travel Backpack Pro", 
    price: 149, 
    originalPrice: 199, 
    rating: 4.6, 
    reviewCount: 187,
    image: backpackImg,
    description: "Durable travel backpack with multiple compartments and laptop sleeve.",
    inStock: true,
    colors: [
      { name: "black", class: "bg-gray-900" },
      { name: "gray", class: "bg-gray-600" },
    ],
  },
  { 
    id: 27, 
    name: "Electric Toothbrush", 
    price: 129, 
    originalPrice: 179, 
    rating: 4.5, 
    reviewCount: 156,
    image: toothbrushImg,
    description: "Smart electric toothbrush with app connectivity and multiple cleaning modes.",
    inStock: true,
    colors: [
      { name: "white", class: "bg-gray-100" },
      { name: "blue", class: "bg-blue-500" },
    ],
  },
  { 
    id: 28, 
    name: "Bluetooth Speaker", 
    price: 79, 
    originalPrice: 119, 
    rating: 4.3, 
    reviewCount: 234,
    image: speakerImg,
    description: "Portable Bluetooth speaker with 360-degree sound and waterproof design.",
    inStock: true,
    colors: [
      { name: "black", class: "bg-gray-900" },
      { name: "blue", class: "bg-blue-500" },
    ],
  },
  { 
    id: 29, 
    name: "Wireless Earbuds Pro", 
    price: 199, 
    originalPrice: 249, 
    rating: 4.8, 
    reviewCount: 345,
    image: earbudsImg,
    description: "True wireless earbuds with active noise cancellation and premium sound quality.",
    inStock: true,
    colors: [
      { name: "white", class: "bg-gray-100" },
      { name: "black", class: "bg-gray-900" },
    ],
  },
  { 
    id: 30, 
    name: "Comfort Hoodie", 
    price: 89, 
    originalPrice: 129, 
    rating: 4.4, 
    reviewCount: 123,
    image: hoodieImg,
    description: "Ultra-soft cotton hoodie with premium comfort fit and modern design.",
    inStock: true,
    colors: [
      { name: "gray", class: "bg-gray-500" },
      { name: "black", class: "bg-gray-900" },
      { name: "white", class: "bg-gray-100" },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  },
  { 
    id: 31, 
    name: "Designer Sunglasses", 
    price: 149, 
    originalPrice: 219, 
    rating: 4.6, 
    reviewCount: 89,
    image: sunglassesImg,
    description: "Premium designer sunglasses with UV protection and polarized lenses.",
    inStock: true,
    colors: [
      { name: "gold", class: "bg-yellow-500" },
      { name: "silver", class: "bg-gray-400" },
    ],
  },
  { 
    id: 32, 
    name: "Insulated Water Bottle", 
    price: 39, 
    originalPrice: 59, 
    rating: 4.7, 
    reviewCount: 267,
    image: waterBottleImg,
    description: "Double-wall insulated water bottle that keeps drinks hot or cold for hours.",
    inStock: true,
    colors: [
      { name: "steel", class: "bg-gray-500" },
      { name: "black", class: "bg-gray-900" },
      { name: "blue", class: "bg-blue-500" },
    ],
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
