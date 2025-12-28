export const hashTableStorage = Array.from({ length: 7 }, () => undefined);

const calculateHashIndex = (input) => {
  if (isNaN(input)) return input.length % 7;
  return input % 7;
};

const ensureBucket = (bucketIndex) => {
  if (!Array.isArray(hashTableStorage[bucketIndex])) {
    hashTableStorage[bucketIndex] = [];
  }
  return hashTableStorage[bucketIndex];
};

const findValueInTable = (searchValue) => {
  const bucketIndex = calculateHashIndex(searchValue);
  const bucket = hashTableStorage[bucketIndex];

  if (!Array.isArray(bucket)) return null;

  for (let index = 0; index < bucket.length; index++) {
    if (bucket[index] == searchValue) {
      return { bucketIndex, index };
    }
  }

  return null;
};

export const hashTableOperations = {
  insertValue: (valueToInsert) => {
    const bucketIndex = calculateHashIndex(valueToInsert);
    ensureBucket(bucketIndex).push(valueToInsert);
  },

  retrieveValue: (searchValue) => {
    const result = findValueInTable(searchValue);
    return result ?? "valueDosen't exist";
  },

  deleteValue: (valueToDelete) => {
    const result = findValueInTable(valueToDelete);

    if (!result) return "valueDosen't exist";

    const { bucketIndex, index } = result;
    const bucket = hashTableStorage[bucketIndex];

    bucket.splice(index, 1);

    if (bucket.length === 0) {
      hashTableStorage[bucketIndex] = undefined;
    }
  },
};
