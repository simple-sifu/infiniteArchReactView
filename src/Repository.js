import { observable, action } from "mobx";
import Gateway from "./Gateway";

export default class AppRepository {
  @observable programmersModel;

  constructor() {
    this.gateway = new Gateway();
    this.programmersModel = { fName: null, lName: null };
  }

  async load() {
    const dto = await this.gateway.get();
    this.programmersModel = { fName: dto.firstName, lName: dto.lastName };
  }

  @action updateProgrammersModel(fName, lName) {
    this.programmersModel = { fName: fName, lName: lName };
  }
}
