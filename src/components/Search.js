import React from "react";

export function Search(props){
    return (
        <section className="searchbox-wrap">
            <input type="text" placeholder="Search a movie" className="searchbox" onChange={props.handleInput} onKeyPress={props.search}/>
        </section>
    )
}