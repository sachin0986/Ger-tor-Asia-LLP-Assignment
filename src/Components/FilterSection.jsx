import { Search, ChevronDown } from 'lucide-react';

const FilterSection = () => {
    const filters = [
      { name: "Price", expanded: true },
      { name: "Date Posted", expanded: false },
      { name: "Seller Role", expanded: false },
      { name: "Transaction Type", expanded: false },
      { name: "Status", expanded: false },
      { name: "Warranty", expanded: false },
      { name: "Shipping", expanded: false }
    ];
  
    return (
      <div className="w-full max-w-xs border-r border-gray-200">
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">Filters</h2>
          <p className="text-sm text-gray-500 mb-4">Apply filters to table data.</p>
          
          {filters.map((filter) => (
            <div key={filter.name} className="border-b border-gray-200 py-3">
              <div className="flex items-center justify-between cursor-pointer">
                <span className="font-medium">{filter.name}</span>
                <ChevronDown size={18} className="text-gray-500" />
              </div>
            </div>
          ))}
          
          <div className="mt-6 space-y-4">
            <div className="relative">
              <Search size={18} className="absolute left-3 top-2.5 text-gray-400" />
              <input 
                type="text" 
                placeholder="Country" 
                className="pl-10 py-2 pr-3 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            
            <div className="relative">
              <Search size={18} className="absolute left-3 top-2.5 text-gray-400" />
              <input 
                type="text" 
                placeholder="Device Category" 
                className="pl-10 py-2 pr-3 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
  

export default FilterSection;