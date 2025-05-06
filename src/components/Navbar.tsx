
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Update scroll state
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
    { name: "Pricing", path: "/pricing" },
    { name: "Demo", path: "/demo" },
    { name: "About Us", path: "/about" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/879e1aa7-83d9-460f-9d35-b0f9949c3ceb.png" 
            alt="MyAccurate Books Logo" 
            className="h-12" 
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "px-3 py-2 text-sm font-medium rounded-md transition-colors relative",
                isActive(item.path)
                  ? "text-accurate-purple-600"
                  : "text-gray-700 hover:bg-gray-100"
              )}
            >
              {item.name}
              {isActive(item.path) && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accurate-purple-600 rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="outline">Log In</Button>
          <Button>Get Started</Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[240px] sm:w-[300px]">
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center py-4 border-b">
                <img 
                  src="/lovable-uploads/879e1aa7-83d9-460f-9d35-b0f9949c3ceb.png" 
                  alt="MyAccurate Books Logo" 
                  className="h-8" 
                />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <nav className="flex flex-col gap-1 py-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={cn(
                      "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                      isActive(item.path)
                        ? "text-accurate-purple-600 bg-accurate-purple-50"
                        : "text-gray-700 hover:bg-gray-100"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-2 py-4 border-t">
                <Button variant="outline" className="w-full">Log In</Button>
                <Button className="w-full">Get Started</Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
