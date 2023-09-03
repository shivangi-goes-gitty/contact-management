import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../state/reducers/contactsIndex';
import ContactDetailsPopup from './ContactDetailsPopup';

const ContactList: React.FC = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState<any>(null);

  const contacts = useSelector((state: RootState) => state.contacts.contacts);

  const openPopup = (contact: any) => {
    setSelectedContact(contact);
    setPopupOpen(true);
  };

  const closePopup = () => {
    setSelectedContact(null); // Clear the selected contact
    setPopupOpen(false);
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Contact List</h1>
      <ul className="divide-y divide-gray-200">
        {contacts.map((contact) => (
          <li key={contact.id} className="px-4 py-4 sm:px-6">
            <div className="flex items-center justify-between">
              <div className="text-lg leading-5 font-medium text-indigo-600 truncate">
                {contact.firstName} {contact.lastName}
              </div>
              <div className="mt-2 sm:mt-0">
                <button
                  className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
                  onClick={() => openPopup(contact)}
                >
                  View Details
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {isPopupOpen && <ContactDetailsPopup contact={selectedContact} onClose={closePopup} />}
      {selectedContact && !isPopupOpen && (
        <div className="mt-4">
          <h2 className="text-2xl font-semibold mb-2">Create New Contact</h2>
          <p>ID: {selectedContact.id}</p>
          <p>Name: {selectedContact.firstName} {selectedContact.lastName}</p>
          <p>Phone Number: {selectedContact.phoneNumber}</p>
        </div>
      )}
    </div>
  );
};

export default ContactList;
