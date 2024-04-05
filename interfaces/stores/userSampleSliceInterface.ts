import UserSampleInterface from "@/interfaces/userSampleInterface";

export default interface UserSampleSliceInterface extends UserSampleInterface {
  setUsername: (username: string) => void;
  setNickname: (nickname: string) => void;
}
