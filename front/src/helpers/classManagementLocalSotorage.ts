import { IUserLoginRes } from "@/interfaces/user.interface";

class ManagmentLocalStorage {
  userData: string;
  userProductOrder: string;
  constructor() {
    this.userData = "dataUserID:";
    this.userProductOrder = `productOrderUserID:`;
  }

  toString(dataObjet: object) {
    return JSON.stringify(dataObjet);
  }

  toObject(dataString: string): object {
    return JSON.parse(dataString);
  }

  saveStorage(key: string, userID: number, data: {}) {
    localStorage.setItem(key + userID, this.toString(data));
  }

  getStorage(key: string): object | undefined {
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
