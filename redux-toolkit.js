import toolkit from '@reduxjs/toolkit';

const { configureStore, createAction, createReducer } = toolkit;

// 1. buat reducer
const contactReducer = createReducer([], (builder) => {
   builder.addCase(addContact, (state, action) => {
      state.push(action.payload);
   });
});

const loginReducer = createReducer({ isLogin: false }, (builder) => {
   builder.addCase(login, (state, action) => {
      state.isLogin = true;
   });
});

// 2. buat store
const store = configureStore({
   reducer: {
      contact: contactReducer,
      login: loginReducer,
   }
});
console.log("data store ketika baru dibuat : ", store.getState());

// 3. buat action
const addContact = createAction('ADD_CONTACT');
const login = createAction('CREATE_SESSION');

const action1 = addContact({
   id: 1,
   name: "Caca",
   phone: "08123456789",
});

const action2 = login();


// 4. buat subscribe
store.subscribe(() => {
   console.log("data store ketika ada perubahan : ", store.getState());
});

// 5. buat dispatch
store.dispatch(action2);
store.dispatch(action1);