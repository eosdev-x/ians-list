import React from "react";
import Header from "@/components/Header";
import ContentGrid from "@/components/ContentGrid";

const Browse = () => {
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
        <h1 className="text-4xl font-bold mb-8">Browse All Products</h1>
        <ContentGrid />
      </main>
    </div>
  );
};

export default Browse;