import React, { Dispatch, SetStateAction, useState } from "react";
import { Product } from "../../types/types";

interface SidebarProps {
  categories: string[];
  setFilteredItems: Dispatch<SetStateAction<Product[]>>;
  handleSearch: (term: string, filter?: string) => void;
  handleSidebarToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  categories,
  setFilteredItems,
  handleSearch,
  handleSidebarToggle,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    handleSearch("", category === "all" ? "" : category);
    if (category !== "all") {
      handleSidebarToggle();
    }
  };

  return (
    <div className="bg-gray-100 p-4 sm:w-64 sm:block">
      <h3 className="text-lg font-semibold mb-2">Categories</h3>
      <ul className="space-y-2">
        <li>
          <button
            onClick={() => handleCategorySelect("all")}
            className={`w-full px-4 py-2 rounded-md ${
              selectedCategory === "all"
                ? "bg-blue-500 text-white"
                : "bg-white text-gray-800"
            }`}
          >
            All
          </button>
        </li>
        {categories.map((category) => (
          <li key={category}>
            <button
              onClick={() => handleCategorySelect(category)}
              className={`w-full px-4 py-2 rounded-md ${
                selectedCategory === category
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-800"
              }`}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;