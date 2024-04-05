import { StateCreator } from "zustand";
import UserSampleSliceInterface from "@interfaces/stores/userSampleSliceInterface";

const createUserSampleSlice: StateCreator<UserSampleSliceInterface> = (
  set,
) => ({
  username: "",
  nickname: "",
  setUsername: (username) => set((state) => ({ username })),
  setNickname: (nickname) => set((state) => ({ nickname })),
});

export default createUserSampleSlice;
