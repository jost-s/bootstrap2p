import express from "express";
import { PeerStore } from "./peer-store.js";

export const run = () => {
  const app = express();

  const peerStore = new PeerStore();

  app.get("/peers", (req, res) => {
    console.log("get request", req.body);
    const peers = peerStore.getPeers();
    const peersJson = JSON.stringify(peers);
    res.json(peersJson);
  });

  app.listen(8000, (error) => {
    if (error) {
      console.error(error);
    }
    console.log("bootstrap2p server listening on port 8000");
  });

  return { app, peerStore };
};
