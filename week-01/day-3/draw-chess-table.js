

'use strict';

// Írj egy programot, ami egy ilyen "sakktáblát" rajzol ki:
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//

for(let i = 0; i < 8; i++){
    if(i%2==0){
        console.log("% % % %");
    }else {
        console.log("  % % % %");
    }
}