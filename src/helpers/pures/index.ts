/**
 *
 * @param array an array as the source.
 * @param payload an object or value that wanted to be injected inside array.
 * @param indexFinder the index of the element that wanted to be updated. Gives array source as the first param
 * @returns updated source
 */
const updateElement = <T>(
  array: T[],
  payload: T,
  indexFinder: (list: T[]) => number,
) => {
  const updatedList = [...array];
  Object.assign(updatedList[indexFinder(array)], payload);
  return updatedList;
};

export {updateElement};
