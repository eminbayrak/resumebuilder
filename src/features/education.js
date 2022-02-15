import { createSlice } from "@reduxjs/toolkit";

export const educationSlice = createSlice({
    name: "education",
    initialState: {
        value: {
            schoolName: "",
            schoolLocation: "",
            degree: "",
            fieldOfStudy: "",
            startDate: "",
            endDate: "",
        }
    },
    reducers: {
        education: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { education } = educationSlice.actions;
export default educationSlice.reducer;