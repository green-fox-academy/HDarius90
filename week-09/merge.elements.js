"use strict";

function mergeElements(list1, list2) {
    const list3 = [...list1, ...list2].sort();
    for (let i = 0; i < list3.length; i++){
        if(list3[i] === list3[i+1]){
            list3.splice(i+1,1);
        }
    }
    return list3; 
}

const array1 = ["Vijendra", "Singh"];
const array2 = ["Singh", "Shakya"];

console.log(mergeElements(array1, array2));
