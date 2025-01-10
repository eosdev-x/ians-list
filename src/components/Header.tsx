import React from "react";
import { Button } from "@/components/ui/button";
import { Menu, Moon, Sun } from "lucide-react";

interface HeaderProps {
  toggleTheme: () => void;
  isDark: boolean;
}

const Header = ({ toggleTheme, isDark }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
          <h1 className="text-2xl font-bold tracking-tight">Ian&apos;s List</h1>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Button variant="ghost">Browse</Button>
          <Button variant="ghost">Categories</Button>
          <Button variant="ghost">About</Button>
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