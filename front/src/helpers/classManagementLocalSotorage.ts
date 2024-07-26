class ManagmentLocalStorage {
  toString(dataObjet: object) {
    return JSON.stringify(dataObjet);
  }

  toObject(dataString: string): object {
    return JSON.parse(dataString);
  }

  saveStorage(key: string, data: object) {
    localStorage.setItem(key, this.toString(data));
  }

  getStorage(key: string): object | void {
    const getData = localStorage.getItem(key);
    if (getData) return this.toObject(getData);
    else return console.error("Undefine Key");
  }

  deletStorage(key: string) {
    localStorage.removeItem(key);
  }
}

export const localData = new ManagmentLocalStorage();
