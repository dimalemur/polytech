import React from 'react';
import './App.css'
import Registration from "../components/registration/registration"

const Posts = props =>
    (
        <div className="PostsWrap">
            {
                props.state.map((a) =>
                    <div className="Post">
                        <p className="Post-Title">{a.title}</p>
                        <p className="Post-Text">{a.text}</p>
                    </div>

                )
            }
        </div>
    );

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