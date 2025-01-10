import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import ContentGrid from "@/components/ContentGrid";

const Index = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check system preference
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
      <main className="container mx-auto animate-fade-in">
        <ContentGrid />
      </main>
    </div>
  );
};

export default Index;