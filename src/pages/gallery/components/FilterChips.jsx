import React from 'react';
import Button from '../../../components/ui/Button';

const FilterChips = ({ categories, activeCategory, onCategoryChange, className = "" }) => {
  return (
    <div className={`flex overflow-x-auto scrollbar-hide space-x-2 pb-2 ${className}`}>
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={activeCategory === category.id ? "primary" : "outline"}
          size="sm"
          onClick={() => onCategoryChange(category.id)}
          className="whitespace-nowrap flex-shrink-0"
        >
          {category.name}
          <span className="ml-2 text-xs opacity-75">
            ({category.count})
          </span>
        </Button>
      ))}
    </div>
  );
};

export default FilterChips;