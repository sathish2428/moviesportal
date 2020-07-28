import React from "react";
import {Result} from "./Result"

export function Results(props){
    return (
        <section className="results">
            {props.results.map(result => (
                <Result key={result.imdbID} result={result} openPopup={props.openPopup}/>
            ))}
        </section>
    );
}