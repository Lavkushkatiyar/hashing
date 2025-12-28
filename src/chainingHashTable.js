export const hashTableStorage = Array.from({ length: 7 }, () => undefined);

const calculateHashIndex = (input) => {
  if (isNaN(input)) return input.length % 7;
  return input % 7;
};

export const hashTableOperations = {
  insertValue: (valueToInsert) => {
    const bucketIndex = calculateHashIndex(valueToInsert);
    const bucket = hashTableStorage[bucketIndex];

    if (Array.isArray(bucket)) bucket.push(valueToInsert);
    else if (bucket || bucket === 0) {
      hashTableStorage[bucketIndex] = [bucket, valueToInsert];
    } else hashTableStorage[bucketIndex] = valueToInsert;
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
    } else hashTableOperations[value.bucketIndex] = undefined;
  },
};
