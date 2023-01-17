import { observable, observe } from "mobx";
import Repository from "./Repository";

class Presenter {
  @observable viewModel;

  constructor() {
    this.repository = new Repository();
    this.viewModel = { formattedString: null, fName: null, lName: null };
  }

  load = async () => {
    observe(this.repository, "programmersModel", obj => {
      this.viewModel = {
        formattedString:
          "Hello your name is " + obj.newValue.fName + " " + obj.newValue.lName,
        fName: obj.newValue.fName,
        lName: obj.newValue.lName
      };
    });
    await this.repository.load();
  };

  submit = viewModel => {
    this.repository.updateProgrammersModel(viewModel.fName, viewModel.lName);
  };
}

export const presenter = new Presenter();
