import { Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
          {/* Subscribe */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-xl font-bold mb-4">BoxCraftPro</h3>
            <p className="mb-4 text-sm">Subscribe</p>
            <p className="text-sm mb-4">Get 10% off your first order</p>
            <div className="relative">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-transparent border-white text-white pr-10"
              />
              <Button 
                size="icon" 
                variant="ghost" 
                className="absolute right-0 top-0 text-white hover:text-white hover:bg-white/10"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-3 text-sm">
              <li>111 Bijoy sarani, Dhaka,<br />DH 1515, Bangladesh.</li>
              <li>exclusive@gmail.com</li>
              <li>+88015-88888-9999</li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="font-semibold mb-4">Account</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:underline">My Account</a></li>
              <li><a href="#" className="hover:underline">Login / Register</a></li>
              <li><a href="#" className="hover:underline">Cart</a></li>
              <li><a href="#" className="hover:underline">Wishlist</a></li>
              <li><a href="#" className="hover:underline">Shop</a></li>
            </ul>
          </div>

          {/* Quick Link */}
          <div>
            <h3 className="font-semibold mb-4">Quick Link</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms Of Use</a></li>
              <li><a href="#" className="hover:underline">FAQ</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Download App */}
          <div>
            <h3 className="font-semibold mb-4">Download App</h3>
            <p className="text-xs text-gray-400 mb-3">Save $3 with App New User Only</p>
            <div className="grid grid-cols-2 gap-2 mb-4">
              <div className="col-span-2 border border-white/30 rounded p-2 text-center text-xs">
                QR Code
              </div>
              <div className="border border-white/30 rounded p-2 text-center text-xs">
                Google Play
              </div>
              <div className="border border-white/30 rounded p-2 text-center text-xs">
                App Store
              </div>
            </div>
            <div className="flex gap-4">
              <Facebook className="h-5 w-5 cursor-pointer hover:text-primary transition-colors" />
              <Twitter className="h-5 w-5 cursor-pointer hover:text-primary transition-colors" />
              <Instagram className="h-5 w-5 cursor-pointer hover:text-primary transition-colors" />
              <Linkedin className="h-5 w-5 cursor-pointer hover:text-primary transition-colors" />
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-4 text-center text-sm text-gray-400">
          © Copyright BoxCraftPro 2025. All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
