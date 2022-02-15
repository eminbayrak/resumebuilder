import { createSlice } from "@reduxjs/toolkit";

export const contactSlice = createSlice({
    name: "contact",
    initialState: {
        value: {
            firstName: "",
            lastName: "",
            jobTitle: "",
            email: "",
            phoneNumber: "",
            city: "",
            state: "",
        }
    },
    reducers: {
        contact: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { contact } = contactSlice.actions;
export default contactSlice.reducer;