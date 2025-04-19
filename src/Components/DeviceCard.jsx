import { MapPin, Calendar, MoreVertical, ExternalLink } from 'lucide-react';

// Shimmer component for loading state
const ShimmerEffect = () => {
  return (
    <div className="bg-white rounded-md border border-gray-200 overflow-hidden mb-4">
      <div className="animate-pulse p-4">
        <div className="flex">
          <div className="w-40 h-40 bg-gray-200 rounded mr-4"></div>
          <div className="flex-1">
            <div className="h-6 w-3/4 bg-gray-200 rounded mb-4"></div>
            <div className="flex mb-2">
              <div className="h-6 w-24 bg-gray-200 rounded-full mr-2"></div>
              <div className="h-6 w-16 bg-gray-200 rounded-full"></div>
            </div>
            <div className="flex items-center mb-2">
              <div className="h-4 w-4 bg-gray-200 rounded mr-2"></div>
              <div className="h-4 w-32 bg-gray-200 rounded"></div>
            </div>
            <div className="flex flex-wrap gap-2 mb-3">
              <div className="h-6 w-20 bg-gray-200 rounded-full"></div>
              <div className="h-6 w-24 bg-gray-200 rounded-full"></div>
              <div className="h-6 w-16 bg-gray-200 rounded-full"></div>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <div className="h-6 w-6 bg-gray-200 rounded-full"></div>
            <div className="h-8 w-24 bg-gray-200 rounded mb-2 mt-auto"></div>
            <div className="h-6 w-16 bg-gray-200 rounded mb-1"></div>
            <div className="h-4 w-24 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DeviceCard = ({ device, isLoading }) => {
  if (isLoading) {
    return <ShimmerEffect />;
  }

  return (
    <div className="bg-white rounded-md border border-gray-200 overflow-hidden mb-4 p-4">
      <div className="flex justify-between">
        <div className="flex">
          {/* Device Image */}
          <div className="w-40 h-40 mr-4">
            <img 
              src={device.image} 
              alt={device.title} 
              className="w-full h-full object-contain"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/api/placeholder/160/160";
              }}
            />
          </div>
          
          {/* Device Info */}
          <div className="flex-1">
            <h2 className="text-xl font-medium mb-2">{device.title}</h2>
            
            <div className="flex mb-2">
              <span className="px-3 py-1 text-sm bg-green-100 text-green-800 rounded-full mr-2">
                Published
              </span>
              <span className="text-gray-500 text-sm py-1">ID# {device.id}</span>
            </div>
            
            <div className="flex items-center text-gray-500 mb-2">
              <MapPin size={16} className="mr-2" />
              <span>{device.location}</span>
            </div>
            
            <div className="flex items-center text-gray-500 mb-2">
              <Calendar size={16} className="mr-2" />
              <span>{device.date}</span>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-3">
              {device.tags && device.tags.map((tag, index) => (
                <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          {/* Price and Action */}
          <div className="flex flex-col items-end">
            <button className="text-gray-500 hover:text-gray-700">
              <MoreVertical size={20} />
            </button>
            <div className="mt-auto">
              <div className="bg-red-500 text-white text-sm py-1 px-4 rounded-md mb-2 text-center">
                Rent/Lease
              </div>
              <div className="text-xl font-bold text-indigo-600 text-right">
                ${typeof device.price === 'number' ? device.price.toLocaleString() : device.price}
              </div>
              <div className="text-sm text-gray-500 text-right">USD - Per Unit</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Seller Information */}
      <div className="border-t border-gray-200 mt-4 pt-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-gray-200 mr-3 overflow-hidden">
              <img 
                src={device.seller?.avatar || "/api/placeholder/40/40"} 
                alt={device.seller?.name || "Seller"} 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="font-medium">{device.seller?.name}</div>
              <div className="text-sm text-purple-600">{device.seller?.role}</div>
            </div>
          </div>
          <button className="text-gray-500 hover:text-gray-700">
            <ExternalLink size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeviceCard;