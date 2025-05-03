export const StorageType = {
  browser: "browser",
};

export class Peer {
  #storageType;

  constructor() {
    this.#storageType = StorageType.browser;
  }

  storageType() {
    return this.storageType;
  }
}
