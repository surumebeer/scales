import { Key } from "./../../types";
import { keys } from './../../const';

export const convertNumIntoKey = (num: number): Key => {
  return keys[num % 12];
}