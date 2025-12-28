import { assertEquals } from "jsr:@std/assert";
import { hashTableOperations } from "../src/chainingHashTable.js";
import { hashTableStorage } from "../src/chainingHashTable.js";
Deno.test("insert and retrieve a number", () => {
  hashTableOperations.insertValue(10);
  assertEquals(hashTableOperations.retrieveValue(10), {
    bucketIndex: 3,
    index: 0,
  });
});

Deno.test("same index valued using modulo 10 and 3", () => {
  hashTableOperations.insertValue(3);
  hashTableOperations.insertValue(10);
  assertEquals(hashTableOperations.retrieveValue(3), {
    bucketIndex: 3,
    index: 1,
  });
  assertEquals(hashTableOperations.retrieveValue(10), {
    bucketIndex: 3,
    index: 0,
  });
});

Deno.test(" 0", () => {
  hashTableOperations.insertValue(0);
  hashTableOperations.insertValue(7);
  assertEquals(
    hashTableOperations.retrieveValue(0),
    { bucketIndex: 0, index: 0 },
  );
  assertEquals(
    hashTableOperations.retrieveValue(7),
    { bucketIndex: 0, index: 1 },
  );
});

Deno.test("string length collision", () => {
  hashTableOperations.insertValue("abc");
  hashTableOperations.insertValue("def");
  assertEquals(hashTableOperations.retrieveValue("abc"), {
    bucketIndex: 3,
    index: 3,
  });
  assertEquals(hashTableOperations.retrieveValue("def"), {
    bucketIndex: 3,
    index: 4,
  });
});
// -------------Delete Testes -----------------

Deno.test("deleting string abc", () => {
  hashTableOperations.deleteValue("abc");
  console.log(hashTableStorage);
});
Deno.test("deleting string def", () => {
  hashTableOperations.deleteValue("def");
});
