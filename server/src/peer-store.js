export class PeerStore {
  #peers;

  constructor() {
    this.#peers = [];
  }

  getPeers() {
    return this.#peers;
  }
}
