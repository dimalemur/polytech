import React from 'react';
import {renderEntireTree} from "../render";

let state = {
    appPages: {
        posts: [
        ]
    }
};

fetch('/data', {
    method:'GET',
    mode:'no-cors',
    dataType:'json'
})
    .then(r => r.json())
    .then(r => {
        r.appPages.posts.forEach((now) => {
            state.appPages.posts.push(now);
        });
    })
    .catch(err => console.log(err));

console.log(state);
console.log("локальный State при загрузке страницы");

export let addpost = (title, text) => {
    let newPost = {
        id: 4,
        title,
        text
    };
    state.appPages.posts.push(newPost);

};




export default state;





