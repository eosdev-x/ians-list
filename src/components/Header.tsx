import React from "react";
import { Button } from "@/components/ui/button";
import { Menu, Moon, Sun } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface HeaderProps {
  toggleTheme: () => void;
  isDark: boolean;
}

const Header = ({ toggleTheme, isDark }: HeaderProps) => {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/bac26262-db8d-4711-9352-deb24cd1e213.png" 
              alt="Logo" 
              className="h-8 w-8"
            />
            <span className="text-2xl font-bold tracking-tight">Ian&apos;s List</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Button
            variant="ghost"
            className={location.pathname === "/browse" ? "bg-accent" : ""}
            asChild
          >
            <Link to="/browse">Browse</Link>
          </Button>
          <Button
            variant="ghost"
            className={location.pathname === "/categories" ? "bg-accent" : ""}
            asChild
          >
            <Link to="/categories">Categories</Link>
          </Button>
          <Button
            variant="ghost"
            className={location.pathname === "/ownership" ? "bg-accent" : ""}
            asChild
          >
            <Link to="/ownership">Ownership</Link>
          </Button>
          <Button
            variant="ghost"
            className={location.pathname === "/about" ? "bg-accent" : ""}
            asChild
          >
            <Link to="/about">About</Link>
          </Button>
        </nav>

        <Button variant="ghost" size="icon" onClick={toggleTheme}>
          {isDark ? (
            <Sun className="h-6 w-6" />
          ) : (
            <Moon className="h-6 w-6" />
          )}
        </Button>
      </div>
    </header>
  );
};

export default Header;