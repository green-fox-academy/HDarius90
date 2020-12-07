'use strict';


//Egy vicces subreddit címét rosszul kaptuk meg, az "odds" helyett "bots" szerepel a linkben.
//Ezen kívül az URL-ből hiányzik egy kulcsfontosságú elem.
//Keresd meg és javítsd ki mindkét hibát!

let url = "https//www.reddit.com/r/nevertellmethebots";
url = url.replace('bots', 'odds');
url = url.slice(0,5) + ':'+ url.slice(5);

console.log(url);

