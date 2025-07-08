import React from 'react';
import Icon from '../../../components/AppIcon';

import Input from '../../../components/ui/Input';

const FilterSidebar = ({ 
  categories, 
  activeCategory, 
  onCategoryChange, 
  searchTerm, 
  onSearchChange,
  totalImages,
  className = "" 
}) => {
  return (
    <div className={`bg-surface rounded-lg p-6 shadow-organic-subtle ${className}`}>
      <div className="space-y-6">
        {/* Search */}
        <div>
          <h3 className="text-lg font-heading font-semibold text-text-primary mb-3">
            Search Gallery
          </h3>
          <div className="relative">
            <Input
              type="search"
              placeholder="Search images..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10"
            />
            <Icon 
              name="Search" 
              size={18} 
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-muted"
            />
          </div>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-heading font-semibold text-text-primary mb-3">
            Categories
          </h3>
          <div className="space-y-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-organic-fast ${
                  activeCategory === category.id
                    ? 'bg-primary-50 text-primary border-l-4 border-primary' :'hover:bg-surface-hover text-text-primary'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Icon name={category.icon} size={18} className="opacity-70" />
                  <span className="font-medium">{category.name}</span>
                </div>
                <span className="text-sm text-text-muted bg-background px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="pt-4 border-t border-border-muted">
          <div className="flex items-center space-x-2 text-sm text-text-secondary">
            <Icon name="Image" size={16} />
            <span>Total: {totalImages} images</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;