import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
  isAuthenticated: false,
  signupPage: {
    // Data for signup pages
    basicdetail: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
    privateinfo: {
      age: null,
      gender: "",
      location: null,
      purpose: "",
      companyName: "",
    },
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      const { email, password } = action.payload;
      const user = state.users.find(
        (u) => u.email === email && u.password === password,
      );
      if (user) {
        state.isAuthenticated = true;
        state.currentUser = user;
      }
    },

    updatebasicdetail: (state, action) => {
      state.signupPage.basicdetail = {
        ...state.signupPage.basicdetail,
        ...action.payload,
      };
    },

    updateprivateinfo: (state, action) => {
      state.signupPage.privateinfo = {
        ...state.signupPage.privateinfo,
        ...action.payload,
      };
    },

    signup: (state, action) => {
      const newUser = action.payload;
      state.users.push(newUser);
      state.isAuthenticated = true;
      state.currentUser = newUser;
    },

    logout: (state) => {
      state.currentUser = null;
      state.isAuthenticated = false;
    },
  },
});

// Export the action creators
export const { login, updatebasicdetail, updateprivateinfo, signup, logout } =
  userSlice.actions;

// Export the reducer
export default userSlice.reducer;
