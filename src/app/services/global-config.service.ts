import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class GlobalConfigService {
  constructor() {}

  getUrlBase() {
    return "https://ionic-5.herokuapp.com";
  }
}
