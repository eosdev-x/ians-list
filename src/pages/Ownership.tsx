import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import CategorySelector from "@/components/CategorySelector";
import ProductTable from "@/components/ProductTable";
import { cerealData, feminineHygieneData, supplementsData, householdData } from "@/data/productData";

const Ownership = () => {
  const [isDark, setIsDark] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("cereal");

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

  const currentData = selectedCategory === "cereal" 
    ? cerealData 
    : selectedCategory === "feminine-hygiene" 
    ? feminineHygieneData 
    : selectedCategory === "supplements"
    ? supplementsData
    : householdData;

  const filteredData = currentData.filter(
    (item) =>
      item.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.owner.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.ownershipType.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header toggleTheme={toggleTheme} isDark={isDark} />
      <main className="container mx-auto flex-grow px-4 py-8 animate-fade-in">
        <h1 className="text-4xl font-bold mb-8">Brand Ownership</h1>
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <CategorySelector 
            value={selectedCategory} 
            onValueChange={setSelectedCategory} 
          />
          <Input
            type="search"
            placeholder="Search brands, owners, or ownership types..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-md"
          />
        </div>
        <ProductTable data={filteredData} />
      </main>
      <Footer />
    </div>
  );
};

export default Ownership;