import { dummyApiRecord } from "../constants/constants";
import {
  getMostVisitedPageTitle,
  getHighestUsersVisitTimeStamp,
} from "./helper";

test("should call the getMostVisitedPageTitle with dummyApiRecord and get the most visited as A", () => {
  const { labels, label } = getMostVisitedPageTitle(dummyApiRecord);
  const dummyLabels = ["A", "B", "C", "E", "F", "G", "H", "I"];
  expect(label).toBe("A");
  expect(labels).toStrictEqual(dummyLabels);
});

test("should call the getHighestUsersVisitTimeStamp with dummyApiRecord and get the most visited hour as 11:06:07", () => {
  const dummyTimeStampValue = { "11:06:07": 10 };
  const { timeStampValues, timeStampLabels } =
    getHighestUsersVisitTimeStamp(dummyApiRecord);
  expect(timeStampValues).toStrictEqual(dummyTimeStampValue);
  expect(timeStampLabels).toStrictEqual("11:06:07");
});
