import React from 'react';

const Contacts: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Contacts</h1>
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {/* Example contact list item */}
          <li className="px-4 py-4 sm:px-6">
            <div className="flex items-center justify-between">
              <div className="text-lg leading-5 font-medium text-indigo-600 truncate">
                John Doe
              </div>
              <div className="ml-2 flex-shrink-0 flex">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Active
                </span>
              </div>
            </div>
            <div className="mt-2 sm:flex sm:justify-between">
              <div className="sm:flex">
                <div className="mr-6 flex items-center text-sm leading-5 text-gray-500">
                  Email: john.doe@example.com
                </div>
                <div className="mt-2 flex items-center text-sm leading-5 text-gray-500 sm:mt-0">
                  Phone: +1 (123) 456-7890
                </div>
              </div>
              <div className="mt-2 flex items-center text-sm leading-5 text-gray-500 sm:mt-0">
                Last Active: 2 days ago
              </div>
            </div>
          </li>

          {/* Add more contact list items as needed */}
        </ul>
      </div>
    </div>
  );
};

export default Contacts;
