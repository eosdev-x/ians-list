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
    brand: "Serenity",
    owner: "Serenity & Joe Carr",
    ownershipType: "Family owned"
  },
  {
    category: "Baby Food",
    brand: "Once Upon A Farm",
    owner: "Jennifer Garner & John Foraker",
    ownershipType: "Founder owned"
  },
  {
    category: "Baby Food",
    brand: "Tiny Organics",
    owner: "Sofia Laurell, Betsy Fore, Carolyn O'hare",
    ownershipType: "Female founder owned",
    additionalNotes: "Big on subscription model"
  },
  {
    category: "Baby Food",
    brand: "Amara",
    owner: "Jess Sturzenegger",
    ownershipType: "Female founder owned"
  },
  {
    category: "Baby Food",
    brand: "Yumi",
    owner: "Angela Sutherland & Evelyn Rusli",
    ownershipType: "Female founder owned"
  },
  {
    category: "Baby Food",
    brand: "Little Spoon",
    owner: "Lisa Barnett, Angela Vranich, Michelle Muller, and Ben Lewis",
    ownershipType: "Founder owned"
  },
  {
    category: "Baby Food",
    brand: "Baby gourmet",
    owner: "Jennifer Carlson and Jill Vos",
    ownershipType: "Female founder owned"
  },
  // ... Adding all other categories
  {
    category: "Baby Formula",
    brand: "Kendamil",
    owner: "Kendal Nutricare",
    ownershipType: "Family owned",
    additionalNotes: "Owned by the McMahon family- brothers Dylan and Will and their dad Ross"
  },
  {
    category: "Baby Formula",
    brand: "Bobbie",
    owner: "Laura Modi & Sarah Hardy",
    ownershipType: "Female founder owned",
    additionalNotes: "Legit as hell. New company, full of energy and advocacy"
  },
  // ... Adding remaining entries from CSV
];

const ContentGrid = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = ["all", ...new Set(data.map(item => item.category))].sort();
  
  const filteredData = data.filter(item => {
    const matchesSearch = 
      item.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.owner.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.ownershipType.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.additionalNotes || "").toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 p-6">
        <Input
          type="search"
          placeholder="Search brands, owners, or ownership types..."
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
            key={`${item.category}-${item.brand}-${index}`}
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