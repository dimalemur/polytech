import React from 'react';
import './App.css'
import Registration from "../components/registration/registration"
import Posts from "../components/posts/posts";

export default class App extends React.Component{
    render() {

        return (
            <div className= "AppWrapper">
                <Registration />
                <Posts state = {this.props.state} />
            </div>
        )
    }
}