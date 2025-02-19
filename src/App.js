import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Search from "./Search";
import axios from "axios";
import Result from "./Result";
import Detail from "./Detail";


const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

function App() {
  const [state, setState] = useState({
    search: "",
    results: [],
    selected: [],
  });
  const handleInput = (event) => {
    let search = event.target.value;
    setState((prevState) => {
      return { ...prevState, search: search };
    });
  };
  const openDetail = (id) => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
      .then(({ data }) => {
        setState((prevState) => ({ ...prevState, selected: data }));
      })
      .catch((err) => console.log(err));
  };
  const SearchResult = (event) => {
    if (event.key === "Enter") {
      axios
        .get(`${API_URL}${state.search}`)
        .then((res) => {
          setState((prevState) => {
            return { ...prevState, results: res.data.results || [] };
          });
        })
        .catch((err) => console.log(err));
    }
  };
  const close =()=>{
    setState((prevState) => {return { ...prevState, selected: {} }});
  }
  return (
    <div className="w-100 main-wrapper d-flex flex-column align-items-center min-vh-100">
      {state.selected.title ? (
        <Detail selected={state.selected} close={close}/>
      ) : (
        <header className="w-100 text-center text-white mt-5">
          <h2>Movie Search</h2>
          <Search handleInput={handleInput} SearchResult={SearchResult} />

          <div className="container">
            <div className="row">
              {state.results.map((result, i) => (
                <div
                  key={result.id || i}
                  className="col-12 col-sm-6 col-md-3 col-lg-4"
                >
                  <Result result={result} openDetail={openDetail} />
                </div>
              ))}
            </div>
          </div>
        </header>
      )}
    </div>
  );
}

export default App;
