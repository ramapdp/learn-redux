import toolkit from '@reduxjs/toolkit';

const { configureStore, createSlice } = toolkit;

// 1. buat slice (reducer + action)
const contactSlice = createSlice({
   name: 'contact',
   initialState: [],
   reducers: {
      addContact: (state, action) => {
         state.push(action.payload);
      }
   },
});

// 2. buat store
const store = configureStore({
   reducer: {
      contact: contactSlice.reducer,
   }
});
console.log("data store ketika baru dibuat : ", store.getState());

// 3. buat subscribe
store.subscribe(() => {
   console.log("data store ketika ada perubahan : ", store.getState());
});

// 4. buat dispatch
store.dispatch(contactSlice.actions.addContact({
   id: 1,
   name: "Caca",
   phone: "08123456789",
}));
store.dispatch(contactSlice.actions.addContact({
   id: 2,
   name: "Dedi",
   phone: "08123456789",
}));
