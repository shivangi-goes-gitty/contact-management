import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateContact, deleteContact } from '../state/action-creators/contactActions';
import { Contact } from '../state/action-creators/contactActions';

interface ContactDetailsPopupProps {
  contact: Contact;
  onClose: () => void;
}

const ContactDetailsPopup: React.FC<ContactDetailsPopupProps> = ({ contact, onClose }) => {
  const dispatch = useDispatch();
  const [editedContact, setEditedContact] = useState<Contact>({ ...contact }); // State to store edited contact

  const handleEditContact = () => {
    // Dispatch an action to update the contact with editedContact data
    dispatch(updateContact(editedContact));

    // Close the popup after editing
    onClose();
  };

  const handleDeleteContact = () => {
    // Dispatch the deleteContact action with the contact.id
    dispatch(deleteContact(contact.id));

    // Close the popup after deleting
    onClose();
  };

  return (
    <div className="popup fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white w-96 p-4 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Contact Details</h2>
        <p>ID: {contact.id}</p>
        <div className="mb-2">
          <label className="block text-gray-600">First Name</label>
          <input
            type="text"
            className="w-full border rounded-md px-2 py-1"
            value={editedContact.firstName}
            onChange={(e) => setEditedContact({ ...editedContact, firstName: e.target.value })}
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-600">Last Name</label>
          <input
            type="text"
            className="w-full border rounded-md px-2 py-1"
            value={editedContact.lastName}
            onChange={(e) => setEditedContact({ ...editedContact, lastName: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Phone Number</label>
          <input
            type="text"
            className="w-full border rounded-md px-2 py-1"
            value={editedContact.phoneNumber}
            onChange={(e) => setEditedContact({ ...editedContact, phoneNumber: e.target.value })}
          />
        </div>
        <div className="flex justify-end">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-blue-600"
            onClick={handleEditContact}
          >
            Edit Contact
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
            onClick={handleDeleteContact}
          >
            Delete Contact
          </button>
          <button
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md ml-2 hover:bg-gray-400"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactDetailsPopup;
