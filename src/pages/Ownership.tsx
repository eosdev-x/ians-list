import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";

interface CerealData {
  brand: string;
  owner: string;
  ownershipType: string;
  notes?: string;
}

const cerealData: CerealData[] = [
  { brand: "Cheerios", owner: "General Mills", ownershipType: "Megacorp" },
  { brand: "Kix", owner: "General Mills", ownershipType: "Megacorp" },
  { brand: "Chex", owner: "General Mills", ownershipType: "Megacorp" },
  { brand: "Cinnamon Toast Crunch", owner: "General Mills", ownershipType: "Megacorp" },
  { brand: "Reeses Puffs", owner: "General Mills", ownershipType: "Megacorp" },
  { brand: "Cocoa Puffs", owner: "General Mills", ownershipType: "Megacorp" },
  { brand: "Trix", owner: "General Mills", ownershipType: "Megacorp" },
  { brand: "Lucky Charms", owner: "General Mills", ownershipType: "Megacorp" },
  { brand: "Cookie Crisp", owner: "General Mills", ownershipType: "Megacorp" },
  { brand: "Golden Grahams", owner: "General Mills", ownershipType: "Megacorp" },
  { brand: "Fiber One", owner: "General Mills", ownershipType: "Megacorp" },
  { brand: "Wheeties", owner: "General Mills", ownershipType: "Megacorp" },
  { brand: "Total", owner: "General Mills", ownershipType: "Megacorp" },
  { brand: "Oatmeal Crisp", owner: "General Mills", ownershipType: "Megacorp" },
  { brand: "Raisin Nut Bran", owner: "General Mills", ownershipType: "Megacorp" },
  { brand: "Basic 4", owner: "General Mills", ownershipType: "Megacorp" },
  { brand: "All-bran", owner: "Kellogg's", ownershipType: "Megacorp" },
  { brand: "Honey Smacks", owner: "Kellogg's", ownershipType: "Megacorp" },
  { brand: "Cracklin' Oat Bran", owner: "Kellogg's", ownershipType: "Megacorp" },
  { brand: "Krave", owner: "Kellogg's", ownershipType: "Megacorp" },
  { brand: "Corn Flakes", owner: "Kellogg's", ownershipType: "Megacorp" },
  { brand: "Crispix", owner: "Kellogg's", ownershipType: "Megacorp" },
  { brand: "Raisin Bran", owner: "Kellogg's", ownershipType: "Megacorp" },
  { brand: "Corn Pops", owner: "Kellogg's", ownershipType: "Megacorp" },
  { brand: "Mueslix", owner: "Kellogg's", ownershipType: "Megacorp" },
  { brand: "Bear Naked Granola", owner: "Kellogg's", ownershipType: "Megacorp" },
  { brand: "Smart Start", owner: "Kellogg's", ownershipType: "Megacorp" },
  { brand: "Apple Jacks", owner: "Kellogg's", ownershipType: "Megacorp" },
  { brand: "Special K", owner: "Kellogg's", ownershipType: "Megacorp" },
  { brand: "Frosted Flakes", owner: "Kellogg's", ownershipType: "Megacorp" },
  { brand: "Froot Loops", owner: "Kellogg's", ownershipType: "Megacorp" },
  { brand: "Frosted Mini Wheats", owner: "Kellogg's", ownershipType: "Megacorp" },
  { brand: "Kashi", owner: "Kellogg's", ownershipType: "Megacorp" },
  { brand: "Rice Krispies", owner: "Kellogg's", ownershipType: "Megacorp" },
  { brand: "Alpen Muesli", owner: "Post", ownershipType: "Megacorp" },
  { brand: "Barbara's", owner: "Post", ownershipType: "Megacorp" },
  { brand: "Better Oats", owner: "Post", ownershipType: "Megacorp" },
  { brand: "Bran Flakes", owner: "Post", ownershipType: "Megacorp" },
  { brand: "Coco Wheats", owner: "Post", ownershipType: "Megacorp" },
  { brand: "Disney100", owner: "Post", ownershipType: "Megacorp" },
  { brand: "Farina Mills", owner: "Post", ownershipType: "Megacorp" },
  { brand: "Golden Crisp", owner: "Post", ownershipType: "Megacorp" },
  { brand: "Grape-Nuts", owner: "Post", ownershipType: "Megacorp" },
  { brand: "Great Grains", owner: "Post", ownershipType: "Megacorp" },
  { brand: "Honey Bunches of Oats", owner: "Post", ownershipType: "Megacorp" },
  { brand: "HONEY MAID S'mores", owner: "Post", ownershipType: "Megacorp" },
  { brand: "Honeycomb", owner: "Post", ownershipType: "Megacorp" },
  { brand: "Malt-O-Meal Hot", owner: "Post", ownershipType: "Megacorp" },
  { brand: "Malt-O-Meal", owner: "Post", ownershipType: "Megacorp" },
  { brand: "Mom's Best", owner: "Post", ownershipType: "Megacorp" },
  { brand: "Honey Ohs!", owner: "Post", ownershipType: "Megacorp" },
  { brand: "OREO O's", owner: "Post", ownershipType: "Megacorp" },
  { brand: "PEBBLES", owner: "Post", ownershipType: "Megacorp" },
  { brand: "Premier Protein", owner: "Post", ownershipType: "Megacorp" },
  { brand: "Puffins", owner: "Post", ownershipType: "Megacorp" },
  { brand: "Raisin Bran", owner: "Post", ownershipType: "Megacorp" },
  { brand: "Shredded Wheat", owner: "Post", ownershipType: "Megacorp" },
  { brand: "Snoop Cereal", owner: "Post", ownershipType: "Megacorp" },
  { brand: "Sweet Dreams", owner: "Post", ownershipType: "Megacorp" },
  { brand: "Sweet Home Farm", owner: "Post", ownershipType: "Megacorp" },
  { brand: "Uncle Sam", owner: "Post", ownershipType: "Megacorp" },
  { brand: "Waffle Crisp", owner: "Post", ownershipType: "Megacorp" },
  { brand: "Weetabix", owner: "Post", ownershipType: "Megacorp" },
  { brand: "Cap'n Crunch", owner: "PepsiCo", ownershipType: "Megacorp" },
  { brand: "Quaker Oats", owner: "PepsiCo", ownershipType: "Megacorp" },
  { brand: "Life Cereal", owner: "PepsiCo", ownershipType: "Megacorp" },
  { brand: "Annies Organic Cocoa Bunnies", owner: "General Mills", ownershipType: "Megacorp", notes: "Annie's Homegrown is owned by General Mills" },
  { brand: "Heritage Flakes", owner: "Nature's Path", ownershipType: "Founder Family Owned" },
  { brand: "Heritage O's", owner: "Nature's Path", ownershipType: "Founder Family Owned" },
  { brand: "Love Crunch", owner: "Nature's Path", ownershipType: "Founder Family Owned" },
  { brand: "Mesa Sunrise", owner: "Nature's Path", ownershipType: "Founder Family Owned" },
  { brand: "Smart Bran", owner: "Nature's Path", ownershipType: "Founder Family Owned" },
  { brand: "Gorilla Munch", owner: "Nature's Path", ownershipType: "Founder Family Owned" },
  { brand: "Panda Puffs", owner: "Nature's Path", ownershipType: "Founder Family Owned" },
  { brand: "Fruit Juice Sweetened Corn Flakes", owner: "Nature's Path", ownershipType: "Founder Family Owned" },
  { brand: "Koala Crisp", owner: "Nature's Path", ownershipType: "Founder Family Owned" },
  { brand: "Amazon Flakes", owner: "Nature's Path", ownershipType: "Founder Family Owned" },
  { brand: "Crispy Rice", owner: "Nature's Path", ownershipType: "Founder Family Owned" },
  { brand: "Keto Organic Cereal", owner: "Nature's Path", ownershipType: "Founder Family Owned" },
  { brand: "Magic Spoon Cereals", owner: "Magic Spoon", ownershipType: "Founder Owned" },
  { brand: "Forager Project Cereals", owner: "Forager Project", ownershipType: "Founder Owned", notes: "Danone has purchased a minority stake in the company" },
  { brand: "Catalina Crunch Cereals", owner: "Catalina Crunch", ownershipType: "Founder Owned" },
  { brand: "High Key Cereals", owner: "High Key Snacks", ownershipType: "Founder Owned", notes: "AJ Patel is the founder and he is a serial entrepreneur" },
  { brand: "Ezekiel 4:9 Cereal", owner: "Food For Life", ownershipType: "Founder Family Owned" },
  { brand: "Erin Baker's", owner: "Erin Baker's", ownershipType: "Founder Family Owned" }
];

const Ownership = () => {
  const [isDark, setIsDark] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

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

  const filteredData = cerealData.filter(
    (item) =>
      item.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.owner.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.ownershipType.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header toggleTheme={toggleTheme} isDark={isDark} />
      <main className="container mx-auto flex-grow px-4 py-8 animate-fade-in">
        <h1 className="text-4xl font-bold mb-8">Cereal Brand Ownership</h1>
        <div className="mb-6">
          <Input
            type="search"
            placeholder="Search brands, owners, or ownership types..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-md"
          />
        </div>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Brand</TableHead>
                <TableHead>Owner</TableHead>
                <TableHead>Ownership Type</TableHead>
                <TableHead>Notes</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{item.brand}</TableCell>
                  <TableCell>{item.owner}</TableCell>
                  <TableCell>{item.ownershipType}</TableCell>
                  <TableCell>{item.notes || "-"}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Ownership;