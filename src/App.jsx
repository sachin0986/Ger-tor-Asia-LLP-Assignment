import { useState, useEffect } from 'react';
import { Filter } from 'lucide-react';
import DeviceCard from "./Components/DeviceCard";
import Header from "./Components/Header";
import FilterSection from "./Components/FilterSection";
import Breadcrumb from "./Components/Breadcrumb";
import listingData from './Utils/listing_data.json';

// Function to format date from ISO format to readable format
const formatDate = (isoDate) => {
  const date = new Date(isoDate);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

const DeviceListingApp = () => {
  const [devices, setDevices] = useState([]);
  const [visibleDevices, setVisibleDevices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(8); // Initial number of visible items
  const [totalCount, setTotalCount] = useState(0);
  
  useEffect(() => {
    // Load data from the imported JSON file
    const loadData = () => {
      try {
        // Map the data to the format needed by the DeviceCard component
        const mappedDevices = listingData.data.map(device => ({
          id: device.id,
          title: device.title,
          status: device.tax_post_status.name,
          location: `${device.device_address.addressTownCity}, ${device.device_address.tax_country.name}`,
          date: formatDate(device.createdAt),
          price: parseInt(device.price),
          currency: device.tax_unit_measure_device_spare.name.split(' - ')[0],
          listingType: device.tax_transaction_type.name,
          tags: [
            device.tax_device_category.name,
            device.tax_oem.name,
            device.tax_clinical_application.name
          ],
          image: device.featureImage || "/api/placeholder/150/150",
          seller: {
            name: device.device_user.displayName,
            role: device.device_business.businessName,
            avatar: device.profileImage || "/api/placeholder/50/50"
          },
          totalReviews: device.totalReviews || 0,
          totalRatingAvg: device.totalRatingAvg || 0
        }));
        
        setDevices(mappedDevices);
        setTotalCount(listingData.totalCount);
        setLoading(false);
      } catch (error) {
        console.error('Error loading data:', error);
        setLoading(false);
      }
    };

    // Simulate network delay for loading effect
    setTimeout(() => {
      loadData();
    }, 500);
  }, []);

  // Update visible devices when devices or visibleCount changes
  useEffect(() => {
    setVisibleDevices(devices.slice(0, visibleCount));
  }, [devices, visibleCount]);

  // Load more devices
  const handleLoadMore = () => {
    setVisibleCount(prevCount => Math.min(prevCount + 2, devices.length));
  };
  
  // Generate shimmer placeholders while loading
  const renderShimmerPlaceholders = () => {
    return Array(4).fill(0).map((_, index) => (
      <DeviceCard key={`shimmer-${index}`} isLoading={true} />
    ));
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-6">
        <Breadcrumb />
        
        <div className="flex flex-col md:flex-row">
          <FilterSection />
          
          <div className="flex-1 px-4">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h1 className="text-2xl font-bold">
                  {loading ? "Loading listings..." : `${totalCount} Listings Found`}
                </h1>
                <p className="text-gray-500">You searched based on the following criteria.</p>
              </div>
              
              <button className="flex items-center bg-white border border-gray-300 rounded-md px-4 py-2">
                <Filter size={16} className="mr-2" />
                <span>Sort By</span>
              </button>
            </div>
            
            <div className="space-y-4">
              {loading ? (
                renderShimmerPlaceholders()
              ) : (
                visibleDevices.map(device => (
                  <DeviceCard key={device.id} device={device} isLoading={false} />
                ))
              )}
            </div>
            
            {!loading && visibleCount < devices.length && (
              <div className="flex justify-center mt-6">
                <button 
                  className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-md transition duration-200"
                  onClick={handleLoadMore}
                >
                  Load More
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default DeviceListingApp;