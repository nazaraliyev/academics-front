import { makeObservable } from "mobx";

export default class UserStore {
  user: any = null;
  constructor() {
    makeObservable(this);
  }
}
