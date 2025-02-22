import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsSlice= createSlice({
    name: "contacts",
    initialState: {
        items: [],
      },
    reducers:{
        addContact: {
            reducer: (state, action) => {
              state.items.push(action.payload);
            },
            prepare: ({ name, number }) => ({
              payload: { id: nanoid(), name, number }, 
            }),
          },
        deleteContact: (state, action) =>{
            state.items = state.items.filter(item => item.id !== action.payload);
        },
    },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;