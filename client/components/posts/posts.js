import React from "react";

const Posts = props =>
    (
        <div className="PostsWrap">
            {
                props.state.map((a,i) =>
                    <div className="Post" key={i} >
                        <p className="Post-Title">{a.title}</p>
                        <p className="Post-Text">{a.text}</p>
                    </div >

                )
            }
        </div>
    );
export default Posts;