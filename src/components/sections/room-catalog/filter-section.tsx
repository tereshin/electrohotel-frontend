import React from 'react';

const FilterSection: React.FC = () => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6">
      {/* Category filter */}
      <div className="flex items-center border border-[rgba(2,26,19,0.12)] rounded-full px-8 py-[18px]">
        <img src="/images/rooms/category-icon.svg" alt="Category" className="w-5 h-5 mr-4" />
        <span className="text-sm text-[#021A13]">Категории</span>
      </div>
      
      {/* Advanced filter options */}
      <div className="flex gap-5">
        {/* Filter */}
        <div className="border border-[rgba(2,26,19,0.12)] rounded-full p-[18px]">
          <img src="/images/rooms/filter-icon.svg" alt="Filter" className="w-5 h-5" />
        </div>
        
        {/* Sort */}
        <div className="border border-[rgba(2,26,19,0.12)] rounded-full p-[18px]">
          <img src="/images/rooms/sort-icon.svg" alt="Sort" className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default FilterSection; 