import { intialArrayValue, numberOfRecords,numberOfUserIds,randomTimeStamps } from "../constants/constants";

const randomPageTitle =()=> {
    let pageTitles = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    let pageTitle = pageTitles[Math.floor(Math.random() * pageTitles.length)];
    return pageTitle
}

const generateUserIds = ()=>{
    const userIds = [];
    let uniqueId = 0
    for(let i=intialArrayValue;i<numberOfUserIds;i++) {
        uniqueId++
        userIds.push(uniqueId)
    }
    return userIds
}

const selectRandomUserId = ()=>{
    let userIds = generateUserIds();
    let userId = userIds[Math.floor(Math.random() * userIds.length)];
    return userId
} 

selectRandomUserId();

const selectRandomTimeStamp = ()=>{
  let timestamps = randomTimeStamps;
  let timestamp = timestamps[Math.floor(Math.random() * timestamps.length)];
  return timestamp
} 

export const generateDummyRecords = ()=>{
    const apiData = [];
    for(let i=intialArrayValue;i<numberOfRecords;i++) {
        const userData = {
            "Timestamp":selectRandomTimeStamp(),
            "userId":selectRandomUserId(),
            "pageTitle":randomPageTitle()
        }
        apiData.push(userData)
    }
    return apiData
}

  