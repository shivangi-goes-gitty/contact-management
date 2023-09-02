import React, { useState } from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import store from './state/store';
import Sidebar from './components/Sidebar';
import ChartsAndMaps from './components/ChartsAndMaps';
import SidebarContent from './components/SidebarContent';
import Contacts from './components/Contacts';
import ContactForm from './components/ContactForm';
import Modal from './components/Modal';

function App() {
  const [activeTab, setActiveTab] = useState('contacts');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex">
      <Sidebar setActiveTab={setActiveTab} activeTab={activeTab} />
      <div className="w-4/5 p-4">
        {activeTab === 'contacts' && (
          <div className="text-center mb-4">
            <button
              onClick={openModal}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg text-xl"
            >
              Create New Contact
            </button>
          </div>
        )}
        {activeTab === 'contacts' && <Contacts />}
        {activeTab === 'charts' && <ChartsAndMaps />}
        {activeTab === 'maps' && <h1>Maps Content</h1>}
        {activeTab === 'sidebar' && <SidebarContent />}
        {isModalOpen && (
          <Modal isOpen={isModalOpen} onClose={closeModal}>
            <ContactForm closeModal={closeModal} />
          </Modal>
        )}
      </div>
    </div>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

export default App; // Export the App component
