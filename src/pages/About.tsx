import React from "react";
import Header from "@/components/Header";
import { Card } from "@/components/ui/card";

const About = () => {
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
        <h1 className="text-4xl font-bold mb-8">About Ian's List</h1>
        <div className="grid gap-8">
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground">
              Ian's List is dedicated to helping consumers make informed choices about the products they buy by providing transparency about company ownership and values. We believe in supporting businesses that align with your values, whether they're family-owned, founder-owned, co-ops, or mission-driven organizations.
            </p>
          </Card>
          
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">What We Track</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Company ownership structure</li>
              <li>Founder information and background</li>
              <li>Business values and missions</li>
              <li>Product categories and offerings</li>
              <li>Additional relevant information about the companies</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">How to Use Ian's List</h2>
            <p className="text-lg text-muted-foreground">
              Browse through our comprehensive database by category or use the search function to find specific products. Each listing includes detailed information about the company's ownership, background, and any notable aspects of their business practices or mission.
            </p>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default About;