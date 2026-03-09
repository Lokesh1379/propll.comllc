import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Admin {
  createdAt: string;
  email: string;
  name: string;
  role: string;
  updatedAt: string;
  __v: number;
  _id: string;
}

interface DeletingAdminState {
  deleteAdmin: boolean;
  isDeleting: boolean;
  adminData: Admin | null;
}

interface AdminState {
  accessToken: string | null;
  isAdminLoggedIn: boolean;
  adminDetails: Admin;
  deletingAdmin: DeletingAdminState;
  adminWantToLogout: boolean;
  creatingAdmin: boolean;
  allAdmins: Admin[];
}

const initialState: AdminState = {
  accessToken: null,
  isAdminLoggedIn: false,

  deletingAdmin: {
    deleteAdmin: false,
    isDeleting: false,
    adminData: null,
  },

  adminWantToLogout: false,
  creatingAdmin: false,

  allAdmins: [],

  adminDetails: {
    createdAt: "",
    email: "",
    name: "",
    role: "",
    updatedAt: "",
    __v: 0,
    _id: "",
  },
};

export const adminSlice = createSlice({
  name: "adminData",
  initialState,
  reducers: {
    setIsAdminLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isAdminLoggedIn = action.payload;
    },

    setDeletingAdmin: (state, action: PayloadAction<DeletingAdminState>) => {
      state.deletingAdmin = action.payload;
    },

    setAdminWantToLogout: (state, action: PayloadAction<boolean>) => {
      state.adminWantToLogout = action.payload;
    },

    setCreatingAdmin: (state, action: PayloadAction<boolean>) => {
      state.creatingAdmin = action.payload;
    },

    setAccesToken: (state, action: PayloadAction<string | null>) => {
      state.accessToken = action.payload;
    },

    setAllAdmins: (state, action: PayloadAction<Admin[]>) => {
      state.allAdmins = action.payload;
    },

    setAdminDetails: (state, action: PayloadAction<Admin>) => {
      state.adminDetails = action.payload;
    },
    resetAdminState: () => initialState,
  },
});

export const {
  setIsAdminLoggedIn,
  setAllAdmins,
  setDeletingAdmin,
  setAccesToken,
  setAdminWantToLogout,
  setCreatingAdmin,
  setAdminDetails,
  resetAdminState,
} = adminSlice.actions;

export default adminSlice.reducer;
