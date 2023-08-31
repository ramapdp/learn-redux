import { legacy_createStore } from "redux";

// 1. buat reducer
const contactReducer = (
   state = {
      contact: [
         {
            id: 1,
            name: "Andi",
            phone: "08123456789",
         },
         {
            id: 2,
            name: "Budi",
            phone: "08123456789",
         }
      ],
   }, action) => {
   switch (action.type) {
      case 'ADD_CONTACT':
         return {
            ...state,
            contact: [...state.contact, action.payload]
         };
      default:
         return state;
   }
};

// 2. buat store
const store = legacy_createStore(contactReducer);
console.log("data store ketika baru dibuat : ", store.getState());

// 3. buat action
const action1 = {
   type: 'ADD_CONTACT',
   payload: {
      id: 3,
      name: "Caca",
      phone: "08123456789",
   }
}

// 4. buat subscribe
store.subscribe(() => {
   console.log("data store ketika ada perubahan : ", store.getState());
});

// 5. buat dispatch
store.dispatch(action1);