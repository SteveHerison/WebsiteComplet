import { reduerActionType } from "../types/reducerActionType";

export type UserType = {
  name: string;
  email: string;
};

export const userInitialState: UserType = {
  name: "",
  email: "",
};

export const userReducer = (state: UserType, action: reduerActionType) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return { ...state, name: action.payload.name };
      break;
    case "CHARGE_AGE":
      return { ...state, email: action.payload.email };
  }
  return state;
};
