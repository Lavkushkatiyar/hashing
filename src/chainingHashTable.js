const TABLE_SIZE = 7;

export const hashTableStorage = Array.from(
  { length: TABLE_SIZE },
  () => undefined,
);

const calculateHashIndex = (input) => {
  if (isNaN(input)) return input.length % TABLE_SIZE;
  return input % TABLE_SIZE;
};

const ensureBucket = (bucketIndex) => {
  if (!Array.isArray(hashTableStorage[bucketIndex])) {
    hashTableStorage[bucketIndex] = [];
  }
  return hashTableStorage[bucketIndex];
};

export const hashTableOperations = {
  insertValue: (valueToInsert) => {
    const bucketIndex = calculateHashIndex(valueToInsert);
    ensureBucket(bucketIndex).push(valueToInsert);
  },

  retrieveValue: (searchValue) => {
    const bucketIndex = calculateHashIndex(searchValue);
    const storedValue = hashTableStorage[bucketIndex];

    if (Array.isArray(storedValue)) {
      for (let index = 0; index < storedValue.length; index++) {
        if (storedValue[index] == searchValue) return { bucketIndex, index };
      }
      return `valueDosen't exist`;
    }
    return { bucketIndex } || "value doesn't exist";
  },
  deleteValue: (valueTodelete) => {
    const value = hashTableOperations.retrieveValue(valueTodelete);

    if (hashTableStorage[value.bucketIndex][value.index] !== undefined) {
      hashTableStorage[value.bucketIndex][value.index] = undefined;
    } else {
      hashTableOperations[value.bucketIndex] = undefined;
    }
  },
};
