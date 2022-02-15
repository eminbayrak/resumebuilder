import { createSlice } from "@reduxjs/toolkit";

export const workExperienceSlice = createSlice({
    name: "workExperience",
    initialState: {
        value: {
            company: "",
            jobTitle: "",
            location: "",
            startDate: "",
            endDate: "",
        }
    },
    reducers: {
        workExperience: (state, action) => {
            state.value = action.payload;
        },
    },
})

export const { workExperience } = workExperienceSlice.actions;
export default workExperienceSlice.reducer;