import { Search, ShoppingCart, User, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
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
              <Link to="/" className="hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary pb-1">Home</Link>
              <Link to="/contact" className="hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary pb-1">Contact</Link>
              <a href="#" className="hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary pb-1">About</a>
              <a href="#" className="hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary pb-1">Sign Up</a>
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
              
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
