import React from 'react';
import Icon from '../../../components/AppIcon';

const FilterChips = ({ activeFilter, onFilterChange, accommodationCounts }) => {
  const filters = [
    { 
      id: 'all', 
      label: 'All Accommodations', 
      icon: 'Home',
      count: accommodationCounts.all 
    },
    { 
      id: 'tents', 
      label: 'Tents', 
      icon: 'Mountain',
      count: accommodationCounts.tents 
    },
    { 
      id: 'cottages', 
      label: 'Cottages', 
      icon: 'Building',
      count: accommodationCounts.cottages 
    },
    { 
      id: 'groups', 
      label: 'Group Packages', 
      icon: 'Users',
      count: accommodationCounts.groups 
    }
  ];

  return (
    <div className="flex flex-wrap gap-3 mb-8">
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => onFilterChange(filter.id)}
          className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-organic-fast ${
            activeFilter === filter.id
              ? 'bg-primary text-primary-foreground shadow-organic-subtle'
              : 'bg-surface text-text-primary hover:bg-surface-hover border border-border'
          }`}
        >
          <Icon name={filter.icon} size={16} />
          <span>{filter.label}</span>
          <span className={`px-2 py-0.5 rounded-full text-xs ${
            activeFilter === filter.id
              ? 'bg-primary-700 text-primary-foreground'
              : 'bg-primary-50 text-primary'
          }`}>
            {filter.count}
          </span>
        </button>
      ))}
    </div>
  );
};

export default FilterChips;