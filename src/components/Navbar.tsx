
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

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

  // These are the original nav items, restructured for dropdowns
  const navStructure = [
    { name: "Home", path: "/", dropdown: false },
    { 
      name: "Services", 
      dropdown: true,
      items: [
        { name: "Features", path: "/features" },
        { name: "Demo", path: "/demo" },
        { name: "Pricing", path: "/pricing" },
      ] 
    },
    { 
      name: "About", 
      dropdown: true,
      items: [
        { name: "About Us", path: "/about" },
        { name: "Testimonials", path: "/testimonials" },
      ] 
    },
    { 
      name: "Resources", 
      dropdown: true,
      items: [
        { name: "Blog", path: "/blog" },
        { name: "Contact", path: "/contact" },
      ] 
    },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // Check if any item in dropdown is active
  const isDropdownActive = (items: {name: string, path: string}[]) => {
    return items.some(item => isActive(item.path));
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

        {/* Desktop Navigation with Dropdowns */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navStructure.map((item) => (
              item.dropdown ? (
                <NavigationMenuItem key={item.name}>
                  <NavigationMenuTrigger 
                    className={cn(
                      "transition-colors",
                      isDropdownActive(item.items) && "text-accurate-purple-600"
                    )}
                  >
                    {item.name}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-1 p-2">
                      {item.items.map((subItem) => (
                        <li key={subItem.name}>
                          <Link
                            to={subItem.path}
                            className={cn(
                              "block select-none rounded-md p-2 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground",
                              isActive(subItem.path)
                                ? "bg-accurate-purple-50 text-accurate-purple-600"
                                : "text-gray-700"
                            )}
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={item.name}>
                  <Link to={item.path}>
                    <NavigationMenuLink 
                      className={cn(
                        navigationMenuTriggerStyle(),
                        isActive(item.path) && "text-accurate-purple-600"
                      )}
                    >
                      {item.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              )
            ))}
          </NavigationMenuList>
        </NavigationMenu>

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
                {/* Mobile nav with accordions for dropdowns */}
                {navStructure.map((item) => 
                  item.dropdown ? (
                    <div key={item.name} className="py-1">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button 
                            variant="ghost" 
                            className={cn(
                              "justify-between w-full px-3 py-2 text-sm font-medium rounded-md transition-colors",
                              isDropdownActive(item.items) ? "text-accurate-purple-600" : "text-gray-700"
                            )}
                          >
                            {item.name}
                            <ChevronDown className="h-4 w-4 ml-2" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start" className="w-full">
                          {item.items.map((subItem) => (
                            <DropdownMenuItem key={subItem.name} asChild>
                              <Link
                                to={subItem.path}
                                className={cn(
                                  "w-full px-2 py-1",
                                  isActive(subItem.path) ? "text-accurate-purple-600" : ""
                                )}
                                onClick={() => setIsOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  ) : (
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
                  )
                )}
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
