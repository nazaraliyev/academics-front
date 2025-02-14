import { makeObservable } from "mobx";

export default class GeneralStore {
  constructor() {
    makeObservable(this);
  }
}
