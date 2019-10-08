import  React from 'react';
import {renderEntireTree} from "./render";
import state from "./redux/state";

fetch('/data', {
    method:'GET',
    mode:'no-cors',
    dataType:'json'
})
    .then(r => r.json())
    .then(r => {
        if ( r === "{}"){
            renderEntireTree(r);
        }
        else {
            renderEntireTree(state);
        }
    })
    .catch(err => console.log("Вот эта ошибка" + err));
