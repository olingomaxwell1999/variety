import React, { useState } from "react";

interface FilterOption {
  value: string;
  label: string;
}

type SearchbarProps = {
  onSearch: (term: string, filter?: string) => void;
  filterOptions: FilterOption[];
};

const Searchbar: React.FC<SearchbarProps> = ({ onSearch, filterOptions }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFilter(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(searchTerm, selectedFilter);
  };

  return (
    <div className="w-full flex flex-row items-center">
      <select
        className="px-3 py-2 border rounded-lg mr-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
        value={selectedFilter}
        onChange={handleFilterChange}
      >
        <option value="">All</option>
        {filterOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <form onSubmit={handleSubmit} className="flex flex-grow">
        <input
          type="text"
          className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button
          type="submit"
          className="ml-2 button hover:bg-blue-700 text-white rounded-lg"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
