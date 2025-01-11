import React from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import ContentGrid from "@/components/ContentGrid";
import Footer from "@/components/Footer";

const Browse = () => {
  const [isDark, setIsDark] = React.useState(false);
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

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
    <div className="min-h-screen bg-background flex flex-col">
      <Header toggleTheme={toggleTheme} isDark={isDark} />
      <main className="container mx-auto flex-grow px-4 py-8 animate-fade-in">
        <h1 className="text-4xl font-bold mb-8">
          {category ? `Browse ${category}` : 'Browse All Products'}
        </h1>
        <ContentGrid initialCategory={category || "all"} />
      </main>
      <Footer />
    </div>
  );
};

export default Browse;