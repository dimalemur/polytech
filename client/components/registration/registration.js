import React from 'react'
import './registration.css'
import state, {addpost} from '../../redux/state'
import {renderEntireTree} from "../../render";


export default class Registration extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title:"" ,
            text:""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);

    }

    handleSubmit(event){
        event.preventDefault();
        if (this.state.text !== "" && this.state.title !== ""){
            addpost(this.state.title,this.state.text);

            fetch('/data', {
                method: 'post',
                body: JSON.stringify(state)
            })
                .then((res) => {
                    console.log("Ответ Получен: ", res);
                })
                .catch((err) =>{
                    console.log("Ошибка отправки: ", err)
                });

        }

            renderEntireTree(state);
    }

    handleTitleChange(event){
        this.setState({title: event.target.value});
    }
    handleTextChange(event){
        this.setState({text: event.target.value});
    }


    render() {
        return (
            <div className= "RegistrationWrap">
                <form action= "/data" method="POST" className="Registration" onSubmit={this.handleSubmit}>
                    <input name="title" className= "Registration-Title" placeholder= "title" value= {this.state.title} onChange = {this.handleTitleChange} />
                    <input name= "text" className="Registration-Text"  placeholder= "text" value= {this.state.text} onChange = {this.handleTextChange} />
                    <button  className= "Registration-Button" >Add</button>
                </form>
            </div>
        )
    }
}