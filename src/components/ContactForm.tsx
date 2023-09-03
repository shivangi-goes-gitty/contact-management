import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../state/action-creators/contactActions';

interface ContactFormProps {
  closeModal: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ closeModal }) => {
  const dispatch = useDispatch();

  const [contact, setContact] = useState({
    id: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    status: 'active',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(addContact(contact));

    closeModal();
    setContact({
      id: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
      status: 'active',
    });
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="bg-white rounded-lg shadow-lg p-6 w-full md:w-2/3 lg:w-1/2">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Create New Contact
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-600 font-bold text-sm mb-2"
                htmlFor="firstName"
              >
                First Name:
              </label>
              <input
                className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="firstName"
                value={contact.firstName}
                onChange={(e) =>
                  setContact({ ...contact, firstName: e.target.value })
                }
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-600 font-bold text-sm mb-2"
                htmlFor="lastName"
              >
                Last Name:
              </label>
              <input
                className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="lastName"
                value={contact.lastName}
                onChange={(e) =>
                  setContact({ ...contact, lastName: e.target.value })
                }
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-600 font-bold text-sm mb-2"
                htmlFor="phoneNumber"
              >
                Phone Number:
              </label>
              <input
                className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="phoneNumber"
                value={contact.phoneNumber}
                onChange={(e) =>
                  setContact({ ...contact, phoneNumber: e.target.value })
                }
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-600 font-bold text-sm mb-2"
                htmlFor="status"
              >
                Status:
              </label>
              <select
                className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="status"
                value={contact.status}
                onChange={(e) =>
                  setContact({ ...contact, status: e.target.value })
                }
                required
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-green-300 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-700"
              >
                Save
              </button>
              <button
                onClick={closeModal}
                type="button"
                className="text-grren-500 hover:text-grren-600 font-semibold focus:outline-none focus:underline"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
