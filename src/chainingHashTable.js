const TABLE_SIZE = 7;
export const hashTableStorage = Array.from(
  { length: TABLE_SIZE },
  () => undefined,
);

const calculateHashIndex = (str) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash += Math.abs(str.charCodeAt(i) * str.length);
  }
  return hash % TABLE_SIZE;
};

const ensureBucket = (bucketIndex) => {
  if (!Array.isArray(hashTableStorage[bucketIndex])) {
    hashTableStorage[bucketIndex] = [];
  }
  return hashTableStorage[bucketIndex];
};

const findValueInTable = (searchValue) => {
  const bucketIndex = calculateHashIndex(searchValue.toString());
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
    const bucketIndex = calculateHashIndex(valueToInsert.toString());
    ensureBucket(bucketIndex).push(valueToInsert);
  },

  hasValue: (searchValue) => {
    const result = findValueInTable(searchValue);
    return result ? true : false;
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
