import { createSlice } from "@reduxjs/toolkit";

export const skillsSlice = createSlice({
    name: "skills",
    initialState: {
        value: {
            skill1: "",
            skill2: "",
            skill3: "",
        }
    },
    reducers: {
        skills: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { skills } = skillsSlice.actions;
export default skillsSlice.reducer;