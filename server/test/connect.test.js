import { test, assert } from "vitest";
import { run } from "../src/index.js";
import { Peer } from "../src/peer.js";

test("GET peers from server", async () => {
  run();
  const response = await fetch(new URL("http://localhost:8000/peers"));
  console.log("response", response);
  const peersJson = await response.json();
  const peers = JSON.parse(peersJson);
  assert.deepEqual(peers, []);
});
