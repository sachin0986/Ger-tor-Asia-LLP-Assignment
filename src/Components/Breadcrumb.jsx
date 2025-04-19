import React from "react";
import {  Home } from 'lucide-react';

const Breadcrumb = () => {
  return (
    <div className="flex items-center py-4 text-sm">
      <Home size={18} className="mr-2 text-gray-500" />
      <span className="mx-2 text-gray-400">/</span>
      <span className="text-gray-500">Dashboard</span>
      <span className="mx-2 text-gray-400">/</span>
      <span className="text-gray-700 font-medium">Devices</span>
    </div>
  );
};

export default Breadcrumb