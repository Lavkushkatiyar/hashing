import { assertEquals } from "jsr:@std/assert";
import { hashTableOperations } from "../src/chainingHashTable.js";
Deno.test("insert and retrieve a number", () => {
  hashTableOperations.insertValue(10);
  assertEquals(hashTableOperations.retrieveValue(10), true);
});

Deno.test("numeric collision via modulo", () => {
  hashTableOperations.insertValue(3);
  hashTableOperations.insertValue(10);
  assertEquals(hashTableOperations.retrieveValue(3), true);
  assertEquals(hashTableOperations.retrieveValue(10), true);
});

Deno.test(" 0", () => {
  hashTableOperations.insertValue(0);
  hashTableOperations.insertValue(7);
  assertEquals(
    hashTableOperations.retrieveValue(0),
    true,
  );
});

Deno.test("string length collision", () => {
  hashTableOperations.insertValue("abc");
  hashTableOperations.insertValue("def");
  assertEquals(hashTableOperations.retrieveValue("abc"), true);
  assertEquals(hashTableOperations.retrieveValue("def"), true);
});
