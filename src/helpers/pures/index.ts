import {IContact} from '~types';

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gi;

/**
 *
 * @param date
 * @returns formatted date: DD/MM/YYYY
 */
const dateFormatter = (date: Date): string => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const dayFormatted = day < 10 ? `0${day}` : day;
  const monthFormatted = month < 10 ? `0${month}` : month;
  return `${dayFormatted}/${monthFormatted}/${year}`;
};

const emailValidate = (str: number | string | undefined) =>
  !str ||
  `${str}`?.match(emailRegex) !== null ||
  'Please provide a valid email address.';

/**
 *
 * @param list contacts
 * @param keyword name input
 * @returns contacts that the name property contain the keyword
 */
const searchContact = (list: IContact[], keyword: string) => {
  if (!keyword) return list;
  return list.filter(contact =>
    contact.name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()),
  );
};

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

export {dateFormatter, emailValidate, updateElement, searchContact};
