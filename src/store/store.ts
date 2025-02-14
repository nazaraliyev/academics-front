// Slices
import GeneralStoreInstance from "./slices/general";
import UserStoreInstance from "./slices/user";

export default {
  userStore: new UserStoreInstance(),
  generalStore: new GeneralStoreInstance(),
};
