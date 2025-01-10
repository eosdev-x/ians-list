import React from "react";
import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const categories = [
  "Baby Food",
  "Baby Formula",
  "Candy",
  "Cereal",
  "Chocolate",
  "Cheese",
  "Chips & Snacks",
  "Coffee",
  "Drinks",
  "Energy Drinks",
  "Frozen Pizza",
  "Ice Cream",
  "Juice",
  "Pasta Sauce",
  "Pickles",
  "Sauces & Dressings",
  "Feminine Hygeine",
  "Deoderant",
  "Haircare/Shampoo",
  "Skincare",
  "Baby Products",
  "Toothpaste",
  "Paper Products",
  "Preworkout & Supplements"
];

const Categories = () => {
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header toggleTheme={toggleTheme} isDark={isDark} />
      <main className="container mx-auto px-4 py-8 animate-fade-in">
        <h1 className="text-4xl font-bold mb-8">Product Categories</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link to={`/browse?category=${encodeURIComponent(category)}`} key={category}>
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <h3 className="text-xl font-semibold">{category}</h3>
                <p className="text-muted-foreground mt-2">
                  Browse all {category.toLowerCase()} products
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Categories;