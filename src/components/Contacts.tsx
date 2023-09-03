import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../state/reducers/contactsIndex';
import { Contact } from '../state/action-creators/contactActions';
import ContactDetailsPopup from './ContactDetailsPopup';
import { deleteContact } from '../state/action-creators/contactActions';

const Contacts: React.FC = () => {
  const dispatch = useDispatch();
  const contacts: Contact[] = useSelector((state: RootState) => state.contacts.contacts);

  const [selectedContact, setSelectedContact] = React.useState<Contact | null>(null);
  const [isPopupOpen, setPopupOpen] = React.useState(false);

  const openPopup = (contact: Contact) => {
    setSelectedContact(contact);
    setPopupOpen(true);
  };

  const closePopup = () => {
    setSelectedContact(null);
    setPopupOpen(false);
  };

  const handleDeleteContact = (contactId: string) => {
    dispatch(deleteContact(contactId));
    closePopup();
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Contacts</h1>
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
              <div className="mt-2 sm:mt-0">
                <button
                  className="text-red-600 hover:text-red-800 text-sm font-medium"
                  onClick={() => handleDeleteContact(contact.id)} // Pass the correct contact.id
                >
                  Delete Contact
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {isPopupOpen && <ContactDetailsPopup contact={selectedContact!} onClose={closePopup} />}
    </div>
  );
};

export default Contacts;
