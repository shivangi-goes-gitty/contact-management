import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { addContact, deleteContact, updateContact } from '../action-creators/contactActions';

// Import the Contact and UpdatedContact types directly from your action creators
import { Contact, UpdatedContact } from '../action-creators/contactActions';

interface ContactState {
  contacts: Contact[];
}

const initialState: ContactState = {
  contacts: [],
};

const contactReducer = createReducer(initialState, {
  [addContact.type]: (state, action: PayloadAction<Contact>) => {
    state.contacts.push(action.payload);
  },
  [deleteContact.type]: (state, action: PayloadAction<number>) => {
    // Cast the contact.id to a string for comparison
    state.contacts = state.contacts.filter((contact) => contact.id !== String(action.payload));
  },
  [updateContact.type]: (state, action: PayloadAction<UpdatedContact>) => {
    // Update contact logic here
  },
});

export default contactReducer;
