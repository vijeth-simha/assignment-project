import { intialArrayValue, numberOfRecords,numberOfUserIds } from "../constants/constants";

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

// function randomDate(start, end) {
//     return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
// }

function randomDate(start, end) {
    var date = new Date(+start + Math.random() * (end - start));
    return date;
  }

// console.log(randomDate(new Date(2021,1,1), new Date()).toISOString());

export const generateDummyRecords = ()=>{
    const apiData = [];
    for(let i=intialArrayValue;i<numberOfRecords;i++) {
        const userData = {
            "Timestamp":randomDate(new Date(2021,1,1), new Date(2022,1,1)).toISOString(),
            "userId":selectRandomUserId(),
            "pageTitle":randomPageTitle()
        }
        apiData.push(userData)
    }
    return apiData
}