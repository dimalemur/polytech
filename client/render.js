import  React from 'react';
import  ReactDom from 'react-dom';
import App from "./App/App";

export let renderEntireTree = (state) => ReactDom.render(
    <App state = {state.appPages.posts} />,
    document.getElementById('Page')
);