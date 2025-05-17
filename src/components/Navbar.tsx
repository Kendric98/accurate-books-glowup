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
    {name: "About Us",  path: "/about", dropdown: false,},
    { name: "Features", path: "/features", dropdown: false },
    { name: "Pricing", path: "/pricing", dropdown: false },
    { name: "Demo", path: "/demo", dropdown: false },
    { name: "Contact Us", path: "/contact" , dropdown: false},
  
    {
      name: "Resources",
      dropdown: true,
      items: [
        { name: "Blog", path: "/blog" },
        { name: "Testimonials", path: "/testimonials" },

      ]
    },
   
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // Check if any item in dropdown is active
  const isDropdownActive = (items: { name: string, path: string }[]) => {
    return items.some(item => isActive(item.path));
  };

  return (
    <>
      {/* Enhanced Decorative Top Section */}
      <div className="relative">
        {/* Main gradient bar */}
        <div className="h-3 bg-gradient-to-r from-accurate-purple-200 via-accurate-purple-100 to-accurate-blue-100 relative overflow-hidden">
          {/* Subtle pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.1) 25%, rgba(255,255,255,0.1) 50%, transparent 50%, transparent 75%, rgba(255,255,255,0.1) 75%, rgba(255,255,255,0.1))`,
              backgroundSize: '20px 20px'
            }}></div>
          </div>
          
          {/* Very subtle shimmer */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
        </div>
        
        {/* Subtle corner accents with gradient */}
        <div className="absolute -left-1 top-0 w-2 h-2 bg-gradient-to-br from-accurate-purple-200 to-accurate-purple-100 transform rotate-45"></div>
        <div className="absolute -right-1 top-0 w-2 h-2 bg-gradient-to-br from-accurate-blue-100 to-accurate-purple-100 transform rotate-45"></div>
      </div>
      
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img
              src="/images/logo.png"
            alt="MyAccurate Books Logo"
            className="h-12 transition-transform hover:scale-105"
          />
          
        </Link>

        {/* Desktop Navigation with Dropdowns */}
          <NavigationMenu className="hidden md:flex relative">
          <NavigationMenuList>
            {navStructure.map((item) => (
              item.dropdown ? (
                  <NavigationMenuItem key={item.name} className="relative">
                  <NavigationMenuTrigger
                    className={cn(
                        "transition-colors hover:bg-accurate-purple-100 hover:text-accurate-purple-500",
                      isDropdownActive(item.items)
                          ? "bg-accurate-purple-50 text-accurate-purple-500"
                        : "text-gray-700"
                    )}
                  >
                    {item.name}
                  </NavigationMenuTrigger>
                    <NavigationMenuContent className="absolute left-0 mt-2">
                    <ul className="grid w-[200px] gap-1 p-2">
                      {item.items.map((subItem) => (
                        <li key={subItem.name}>
                          <Link
                            to={subItem.path}
                            className={cn(
                                "block select-none rounded-md p-2 text-sm outline-none transition-colors hover:bg-accurate-purple-100 hover:text-accurate-purple-500",
                              isActive(subItem.path)
                                  ? "bg-accurate-purple-50 text-accurate-purple-500"
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
                  <NavigationMenuLink
                    asChild
                    className={cn(
                        "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accurate-purple-100 hover:text-accurate-purple-500 focus:bg-accurate-purple-100 focus:text-accurate-purple-500 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accurate-purple-100/50 data-[state=open]:bg-accurate-purple-100/50",
                      isActive(item.path)
                          ? "bg-accurate-purple-50 text-accurate-purple-500"
                        : "text-gray-700"
                    )}
                  >
                    <Link to={item.path}>
                      {item.name}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              )
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* CTA Button */}
        
        <div className="flex items-center gap-4">
            <a
              href="https://play.google.com/store/apps/details?id=core.rwk.myaccuratebooks&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center hover:opacity-90 transition-opacity"
            >
              <img
                src="/images/gplay.png"
                alt="Get it on Google Play"
                className="h-[34px] w-[120px] object-contain"
              />
            </a>
          <Button
            asChild
            variant="outline"
              className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all hover:bg-accurate-purple-500 hover:text-white border-accurate-purple-600 text-accurate-purple-600"
          >
            <a href="https://app.myaccuratebook.com/login" target="_blank" rel="noopener noreferrer">
              Log In
            </a>
          </Button>
            <Button className="w-full py-2.5 text-[15px] font-medium bg-blue-600 hover:bg-blue-700 text-white">
                    <a href="/pricing" target="_blank" rel="noopener noreferrer" className="w-full h-full block text-white">
                    Get Started
                  </a>
                </Button>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild className="md:hidden">
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[280px] sm:w-[320px] bg-white shadow-lg">
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center p-4 border-b">
              <Link to="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                <img
                    src="/images/logo.png"
                  alt="MyAccurate Books Logo"
                  className="h-10"
                />
                <span className="text-base font-semibold text-gray-800"></span>
              </Link>
              
            </div>
            <nav className="flex flex-col gap-2 p-4">
              {navStructure.map((item) =>
                item.dropdown ? (
                  <div key={item.name} className="py-1">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          className={cn(
                            "justify-between w-full px-4 py-3 text-[15px] font-medium rounded-lg transition-colors hover:bg-gray-50",
                            isDropdownActive(item.items)
                                ? "bg-accurate-purple-50 text-accurate-purple-500"
                              : "text-gray-700"
                          )}
                        >
                          {item.name}
                          <ChevronDown className="h-4 w-4 ml-2" />
                        </Button>
                      </DropdownMenuTrigger>
                        <DropdownMenuContent align="start" className="w-[280px] mt-1 absolute left-0 z-50">
                        {item.items.map((subItem) => (
                          <DropdownMenuItem key={subItem.name} asChild>
                            <Link
                              to={subItem.path}
                              className={cn(
                                "w-full px-4 py-2.5 text-[15px] rounded-md transition-colors hover:bg-gray-50",
                                isActive(subItem.path)
                                    ? "bg-accurate-purple-50 text-accurate-purple-500 font-medium"
                                  : "text-gray-700"
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
                      "px-4 py-3 text-[15px] font-medium rounded-lg transition-colors hover:bg-gray-50",
                      isActive(item.path)
                          ? "bg-accurate-purple-50 text-accurate-purple-500"
                        : "text-gray-700"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </nav>
            <div className="mt-auto p-4 border-t">
              <div className="flex flex-col gap-3">
                <Button variant="outline" className="w-full py-2.5 text-[15px] font-medium border-blue-600 text-white-600 hover:bg-blue-600 hover:text-white">
                  <a href="https://app.myaccuratebook.com/login" target="_blank" rel="noopener noreferrer" className="w-full h-full block">
                    Log In
                  </a>
                </Button>
                <Button className="w-full py-2.5 text-[15px] font-medium text-white bg-blue-600 hover:bg-blue-700 text-white">
                  <a href="/pricing" target="_blank" rel="noopener noreferrer" className="w-full h-full block">
                    Get Started
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
        </div>
      </div>
      </header>
    </>
  );
};

export default Navbar;
