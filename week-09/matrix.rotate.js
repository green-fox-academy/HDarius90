'use strickt';

function rotateMatrix(inputArray){
    let rotatedArray;
    let nDim = inputArray.length;
    for ( let i = 0; i < nDim; i++ ) {
        for ( let j = 0; j < nDim; j++ ) {
            rotatedArray[nDim-j][i] = inputArray[i][j];
        }
    }
    return rotatedArray;
}

console.log(rotateMatrix([[1,2],[3,4]]));