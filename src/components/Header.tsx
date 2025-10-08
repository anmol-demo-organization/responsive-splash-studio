import { Search, ShoppingCart, User, Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <>
      {/* Top banner */}
      <div className="bg-primary text-primary-foreground text-sm py-2 px-4 text-center">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! Shop Now
      </div>
      
      {/* Main header */}
      <header className="border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link to="/">
              <h1 className="text-2xl font-bold cursor-pointer hover:text-primary transition-colors">BoxCraftPro</h1>
            </Link>
            
            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link 
                to="/" 
                className={`hover:text-primary transition-colors border-b-2 pb-1 ${
                  isActive('/') ? 'border-primary text-primary' : 'border-transparent'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/contact" 
                className={`hover:text-primary transition-colors border-b-2 pb-1 ${
                  isActive('/contact') ? 'border-primary text-primary' : 'border-transparent'
                }`}
              >
                Contact
              </Link>
              <Link 
                to="/about" 
                className={`hover:text-primary transition-colors border-b-2 pb-1 ${
                  isActive('/about') ? 'border-primary text-primary' : 'border-transparent'
                }`}
              >
                About
              </Link>
              <Link 
                to="/signup" 
                className={`hover:text-primary transition-colors border-b-2 pb-1 ${
                  isActive('/signup') ? 'border-primary text-primary' : 'border-transparent'
                }`}
              >
                Sign Up
              </Link>
            </nav>
            
            {/* Search and icons */}
            <div className="flex items-center gap-4">
              <div className="relative hidden lg:block">
                <Input 
                  type="search" 
                  placeholder="What are you looking for?" 
                  className="w-64 pr-10"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>
              
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
              
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  2
                </span>
              </Button>
              
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px]">
                  <nav className="flex flex-col space-y-4 mt-8">
                    <Link 
                      to="/" 
                      onClick={() => setIsOpen(false)}
                      className={`text-lg hover:text-primary transition-colors ${
                        isActive('/') ? 'text-primary font-semibold' : ''
                      }`}
                    >
                      Home
                    </Link>
                    <Link 
                      to="/contact" 
                      onClick={() => setIsOpen(false)}
                      className={`text-lg hover:text-primary transition-colors ${
                        isActive('/contact') ? 'text-primary font-semibold' : ''
                      }`}
                    >
                      Contact
                    </Link>
                    <Link 
                      to="/about" 
                      onClick={() => setIsOpen(false)}
                      className={`text-lg hover:text-primary transition-colors ${
                        isActive('/about') ? 'text-primary font-semibold' : ''
                      }`}
                    >
                      About
                    </Link>
                    <Link 
                      to="/signup" 
                      onClick={() => setIsOpen(false)}
                      className={`text-lg hover:text-primary transition-colors ${
                        isActive('/signup') ? 'text-primary font-semibold' : ''
                      }`}
                    >
                      Sign Up
                    </Link>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
