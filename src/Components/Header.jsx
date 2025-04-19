import React from "react";
import { Search, ChevronDown } from 'lucide-react';

const Header = () => {
  return (
    <header className="border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="h-[12px] w-[12px]">
              <img src="https://gerator.io/gerator04-1@2x.d8e2cea2.png?1745086886514" alt="" />
            </div>
            <nav className="flex space-x-6">
              <div className="flex items-center">
                <span className="mr-1">Buy</span>
                <ChevronDown size={16} />
              </div>
              <span>Sell</span>
              <span>Jobs</span>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative w-72">
              <Search size={20} className="absolute left-3 top-2.5 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search" 
                className="pl-10 py-2 pr-3 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <button className="p-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
            </button>
            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};


  export default Header;