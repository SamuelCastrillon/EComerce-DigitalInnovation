import { IUserLoginRes } from "@/interfaces/user.interface";

class ManagmentLocalStorage {
  userData: string;

  constructor() {
    this.userData = "userData";
  }

  toString(dataObjet: object) {
    return JSON.stringify(dataObjet);
  }

  toObject(dataString: string): IUserLoginRes {
    return JSON.parse(dataString);
  }

  saveStorage(data: object) {
    localStorage.setItem(this.userData, this.toString(data));
  }

  getStorage(key: string): IUserLoginRes | undefined {
    const getData = localStorage.getItem(key);
    if (getData) return this.toObject(getData);
    else {
      console.error("Undefine Key");
    }
  }

  deletStorage(key: string) {
    localStorage.removeItem(key);
  }
}

export const localData = new ManagmentLocalStorage();
