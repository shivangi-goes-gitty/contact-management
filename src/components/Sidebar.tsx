import React from 'react';

interface SidebarProps {
  setActiveTab: (tab: string) => void;
  activeTab: string;
}

const Sidebar: React.FC<SidebarProps> = ({ setActiveTab, activeTab }) => {
  return (
    <div className="w-1/5 bg-gray-800 text-white p-4 h-screen">
      <button
        className={`w-full py-2 mb-2 rounded ${
          activeTab === 'contacts' ? 'bg-blue-600' : 'bg-gray-600'
        }`}
        onClick={() => setActiveTab('contacts')}
      >
        Contacts
      </button>
      <button
        className={`w-full py-2 mb-2 rounded ${
          activeTab === 'charts' ? 'bg-blue-600' : 'bg-gray-600'
        }`}
        onClick={() => setActiveTab('charts')}
      >
        Charts and Maps
      </button>
      <button
        className={`w-full py-2 mb-2 rounded ${
          activeTab === 'maps' ? 'bg-blue-600' : 'bg-gray-600'
        }`}
        onClick={() => setActiveTab('maps')}
      >
      
        Sidebar
      </button>
    </div>
  );
};

export default Sidebar;
