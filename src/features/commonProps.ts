import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  baseUrl: "http://localhost:5000",
  // baseUrl: "https://propll-server-1.onrender.com",
  adminTab: "Admins",
  popUpMessage: {
    isOpen: false,
    type: "success",
    message: "",
  },
  applyJob: { isApplyingJob: false, jobData: null },
  activeLink: "home",
  applied: false,
};

export const commonSlice = createSlice({
  name: "commonProps",
  initialState,
  reducers: {
    setAdminTab: (state, action) => {
      state.adminTab = action.payload;
    },
    setPopUpMessage: (state, action) => {
      state.popUpMessage = action.payload;
    },
    setApplyJob: (state, action) => {
      state.applyJob = action.payload;
    },
    setActiveLink: (state, action) => {
      state.activeLink = action.payload;
    },
    setApplied: (state, action) => {
      state.applied = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setAdminTab,
  setActiveLink,
  setPopUpMessage,
  setApplyJob,
  setApplied,
} = commonSlice.actions;

export default commonSlice.reducer;
