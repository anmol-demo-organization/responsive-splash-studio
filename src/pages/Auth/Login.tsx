import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be added later
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left side - Decorative area */}
          <div className="hidden md:block bg-muted rounded-lg h-[600px]"></div>

          {/* Right side - Login form */}
          <div className="w-full max-w-md mx-auto">
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold mb-2">Log in to Exclusive</h1>
                <p className="text-muted-foreground">Enter your details below</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email or Phone Number</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <Button type="submit">
                    Log In
                  </Button>
                  <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                    Forget Password?
                  </Link>
                </div>
              </form>

              <div className="text-center text-sm">
                Don't have an account?{" "}
                <Link to="/signup" className="font-medium hover:underline">
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
