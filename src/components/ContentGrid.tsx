import React, { useState } from "react";
import ContentCard from "./ContentCard";
import { Input } from "@/components/ui/input";
import { Product } from "@/types/product";

const data: Product[] = [
  {
    category: "Baby Food",
    brand: "Plum Organics",
    owner: "Sun-Maid Co-op",
    ownershipType: "Co-op"
  },
  {
    category: "Baby Food",
    brand: "Cerebelly",
    owner: "Dr. Teresa Pursner & Nick Langan",
    ownershipType: "Female founder owned",
    additionalNotes: "Dr. Pursner is a practicing neurosurgeon PhD in developmental neurobiology from Stanford and mom of three"
  },
  {
    category: "Baby Food",
    brand: "Happy Family",
    owner: "Happy Family Organics",
    ownershipType: "Female founded"
  },
  {
    category: "Baby Food",
    brand: "Earth's Best",
    owner: "The Hain Celestial Group",
    ownershipType: "Publicly traded"
  },
  {
    category: "Baby Food",
    brand: "Gerber",
    owner: "Nestlé",
    ownershipType: "Publicly traded"
  },
  {
    category: "Baby Food",
    brand: "Beech-Nut",
    owner: "Beech-Nut Nutrition Company",
    ownershipType: "Private"
  },
  {
    category: "Baby Food",
    brand: "Little Spoon",
    owner: "Little Spoon, Inc.",
    ownershipType: "Female founded"
  },
  {
    category: "Baby Food",
    brand: "Yumi",
    owner: "Yumi, Inc.",
    ownershipType: "Female founded"
  },
  {
    category: "Baby Food",
    brand: "Once Upon a Farm",
    owner: "Jennifer Garner",
    ownershipType: "Female founded"
  },
  {
    category: "Baby Food",
    brand: "Nurture Life",
    owner: "Nurture Life, Inc.",
    ownershipType: "Female founded"
  },
];

const ContentGrid = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = ["all", ...new Set(data.map(item => item.category))];
  
  const filteredData = data.filter(item => {
    const matchesSearch = item.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.owner.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 p-6">
        <Input
          type="search"
          placeholder="Search brands or owners..."
          className="max-w-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="max-w-xs p-2 rounded-md border border-input bg-background"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map(category => (
            <option key={category} value={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {filteredData.map((item, index) => (
          <ContentCard
            key={index}
            brand={item.brand}
            owner={item.owner}
            ownershipType={item.ownershipType}
            additionalNotes={item.additionalNotes}
          />
        ))}
      </div>
    </div>
  );
};

export default ContentGrid;
