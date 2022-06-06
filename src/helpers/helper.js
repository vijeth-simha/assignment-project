import {
  intialArrayValue,
  numberOfRecords,
  numberOfUserIds,
  randomTimeStamps,
  pageTitles,
} from "../constants/constants";

const randomPageTitle = () => {
  let pageTitle = pageTitles[Math.floor(Math.random() * pageTitles.length)];
  return pageTitle;
};

const generateUserIds = () => {
  const userIds = [];
  let uniqueId = 0;
  for (let i = intialArrayValue; i < numberOfUserIds; i++) {
    uniqueId++;
    userIds.push(uniqueId);
  }
  return userIds;
};

const selectRandomUserId = () => {
  let userIds = generateUserIds();
  let userId = userIds[Math.floor(Math.random() * userIds.length)];
  return userId;
};

selectRandomUserId();

const selectRandomTimeStamp = () => {
  let timestamps = randomTimeStamps;
  let timestamp = timestamps[Math.floor(Math.random() * timestamps.length)];
  return timestamp;
};

export const generateDummyRecords = () => {
  const apiData = [];
  for (let i = intialArrayValue; i < numberOfRecords; i++) {
    const userData = {
      Timestamp: selectRandomTimeStamp(),
      userId: selectRandomUserId(),
      pageTitle: randomPageTitle(),
    };
    apiData.push(userData);
  }
  return apiData;
};

export const getMostFrequent = (arr) => {
  const hashmap = arr.reduce((acc, val) => {
    acc[val.pageTitle] = (acc[val.pageTitle] || 0) + 1;
    return acc;
  }, {});
  let values = hashmap;
  let labels = Object.keys(hashmap);
  let label = Object.keys(hashmap).reduce((a, b) =>
    hashmap[a] > hashmap[b] ? a : b
  );
  return {
    values,
    labels,
    label,
  };
};

export const getFrequentTimeStamps = (arr) => {
  const hashmap = arr.reduce((acc, val) => {
    acc[val.Timestamp.substr(11, 19)] =
      (acc[val.Timestamp.substr(11, 19)] || 0) + 1;
    return acc;
  }, {});
  let timeStampValues = hashmap;
  let timeStampChartlabels = Object.keys(hashmap);
  let timeStampLabels = Object.keys(hashmap).reduce((a, b) =>
    hashmap[a] > hashmap[b] ? a : b
  );
  return {
    timeStampValues,
    timeStampLabels,
    timeStampChartlabels,
  };
};
