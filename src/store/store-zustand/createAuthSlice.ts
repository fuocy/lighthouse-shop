import { GetState, SetState } from "zustand";
import { MyState } from "./useStore";

export interface AuthSlice {
  tokenId: string;
  email: string;
  avatar: string;
  login: (token: string) => void;
  logout: () => void;
  setEmail: (email: string) => void;
  setToken: (token: string) => void;
  setAvatar: (avatar: string) => void;
}

const createAuthSlice = (set: SetState<MyState>, get: GetState<MyState>) => ({
  tokenId: "",
  email: "",
  avatar: "",
  login: (token: string) => {
    set({ tokenId: token });
    localStorage.setItem("token", get().tokenId);
  },
  logout: () => {
    set({ tokenId: "" });
    localStorage.removeItem("token");
    localStorage.removeItem("email");
  },
  setEmail: (email: string) => {
    set({ email: email });
    localStorage.setItem("email", email);
  },
  setAvatar: (avatar: string) => {
    set({ avatar: avatar });
    localStorage.setItem("avatar", avatar);
  },
  setToken: (token: string) => set({ tokenId: token }),
});

export default createAuthSlice;
