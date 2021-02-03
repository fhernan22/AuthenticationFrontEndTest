import React, { createContext, useReducer } from "react";

export const AuthContext = createContext();
export const AuthDispatchContext = createContext();

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING": {
      return {
        ...state,
        loading: action.loading,
      };
    }

    case "SET_ERRORS": {
      return {
        ...state,
        loading: action.loading,
        errors: action.errors,
      };
    }

    case "SET_USER": {
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export const AuthProvider = ({ children }) => {
  const [user, dispatch] = useReducer(AuthReducer, {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    errors: {},
    loading: false,
  });

  return (
    <AuthDispatchContext.Provider value={dispatch}>
      <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
    </AuthDispatchContext.Provider>
  );
};
