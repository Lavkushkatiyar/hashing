const hashTableStorage = Array(7);

const MAX_LOAD_FACTOR = 0.9;

const calculateHashIndex = (input) => {
  if (isNaN(input)) return input.length % 7;
  return input % 7;
};

export const hashTableOperations = {
  insertValue: (valueToInsert) => {
    const bucketIndex = calculateHashIndex(valueToInsert);
    const bucket = hashTableStorage[bucketIndex];

    if (Array.isArray(bucket)) bucket.push(valueToInsert);
    else if (bucket) hashTableStorage[bucketIndex] = [bucket, valueToInsert];
    else hashTableStorage[bucketIndex] = valueToInsert;
  },

  retrieveValue: (searchValue) => {
    const bucketIndex = calculateHashIndex(searchValue);
    const storedValue = hashTableStorage[bucketIndex];

    if (Array.isArray(storedValue)) {
      return storedValue.some((value) => value === searchValue);
    }
    return storedValue === searchValue || "value doesn't exist";
  },
};
