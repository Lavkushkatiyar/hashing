import { assertEquals } from "jsr:@std/assert";
import { hashTableOperations } from "../src/chainingHashTable.js";
import { hashTableStorage } from "../src/chainingHashTable.js";

Deno.test("insert and retrieve a number", () => {
  hashTableOperations.insertValue(10);
  assertEquals(hashTableOperations.hasValue(10), true);
});

Deno.test("same index valued using modulo 10 and 3", () => {
  hashTableOperations.insertValue(3);
  hashTableOperations.insertValue(10);
  assertEquals(hashTableOperations.hasValue(3), true);
  assertEquals(hashTableOperations.hasValue(10), true);
});

Deno.test(" 0", () => {
  hashTableOperations.insertValue(0);
  hashTableOperations.insertValue(7);
  assertEquals(
    hashTableOperations.hasValue(0),
    true,
  );
  assertEquals(
    hashTableOperations.hasValue(7),
    true,
  );
});

Deno.test("string length collision", () => {
  hashTableOperations.insertValue("abc");
  hashTableOperations.insertValue("def");
  assertEquals(hashTableOperations.hasValue("abc"), true);
  assertEquals(hashTableOperations.hasValue("def"), true);
  assertEquals(hashTableOperations.hasValue("jsc"), false);
});
// -------------Delete Testes -----------------

Deno.test("deleting string abc", () => {
  hashTableOperations.deleteValue("abc");
  console.log(hashTableStorage);
});
Deno.test("deleting string def", () => {
  hashTableOperations.deleteValue("def");
});
