import React, {useState} from 'react';
import {Search} from "./components/Search";
import axios from "axios";
import {Results} from "./components/Results"
import {Popup} from "./components/Popup"
function App() {
  const API_KEY = '28c9d3b7';
  const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;
  const [state,setState] = useState(
    {
      s: "",
      results:[],
      selected:{}
    }
  );

  const search = (e) => {
if(e.key === "Enter"){
  axios(API_URL+"&s="+ state.s).then(({data}) => {
    let results = data.Search;
    setState(prevState => {
      return {...prevState, results:results}
    })
  });
}
  }
  const handleInput = (e) =>{
    let s =e.target.value;
    setState(prevState => {
        return {...prevState,s:s}
    })
    console.log(state.s)
  }

  const openPopup = (id) =>{
    axios(API_URL + "&i=" +id).then(({data}) => {
      let result = data;
      console.log(result)
      setState(prevState => {
        return {...prevState, selected: result};
        
      })
      console.log(state)
    })
  }

  const closePopup = () => {
      setState(prevState => {
        return{...prevState,selected:{}}
      });
  }

  return (
    <div className="App">
      <header className="App-header">
       <h1>MoviesPortal</h1>
       <main>
         <Search handleInput={handleInput} search={search}/>
         <Results results={state.results} openPopup={openPopup}/>
         {(typeof state.selected.Title != "undefined" ? <Popup selected={state.selected} closePopup={closePopup} /> : false)}
       </main>
      </header>
    </div>
  );
}

export default App;
