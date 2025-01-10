import React from "react";
import ContentCard from "./ContentCard";

// Placeholder data until CSV is provided
const placeholderData = [
  {
    title: "Sample Item 1",
    description: "This is a placeholder description for the first item.",
  },
  {
    title: "Sample Item 2",
    description: "Another placeholder description for demonstration.",
  },
  {
    title: "Sample Item 3",
    description: "Third placeholder item showing the grid layout.",
  },
  {
    title: "Sample Item 4",
    description: "Fourth item demonstrating the responsive grid.",
  },
];

const ContentGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {placeholderData.map((item, index) => (
        <ContentCard
          key={index}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default ContentGrid;