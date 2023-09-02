// src/state/action-creators/contactActions.tsx
import { createAction, PayloadAction } from '@reduxjs/toolkit';

// Define the Contact interface
export interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  status: string;
}

// Define the UpdatedContact interface
export interface UpdatedContact {
  id: string;
  // Define other properties as needed for updating contacts
}

// Define actions using the Contact and UpdatedContact types
export const addContact = createAction<Contact>('addContact');
export const deleteContact = createAction<number>('deleteContact');
export const updateContact = createAction<UpdatedContact>('updateContact');
