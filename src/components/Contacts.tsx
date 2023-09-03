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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className="bg-white rounded-lg shadow-md"
            style={{ width: '88px', height: '56px' }} // Set fixed width and height
          >
            <div className="p-2">
              <div className="text-sm leading-5 font-medium text-indigo-600 truncate">
                {contact.firstName} {contact.lastName}
              </div>
              <div className="flex justify-between mt-1">
                <button
                  className="text-indigo-600 hover:text-indigo-800 text-xs font-medium"
                  onClick={() => openPopup(contact)}
                >
                  View Details
                </button>
                <button
                  className="text-red-600 hover:text-red-800 text-xs font-medium"
                  onClick={() => handleDeleteContact(contact.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isPopupOpen && <ContactDetailsPopup contact={selectedContact!} onClose={closePopup} />}
    </div>
  );
};

export default Contacts;
