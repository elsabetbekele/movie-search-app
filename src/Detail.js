import React from "react";
import "./App.css";

function Detail({ selected, close }) {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <div className="container mt-5 ">
        <div className="row">
          <div className="col-12 col-md-4 ">
            <img
              src={`https://image.tmdb.org/t/p/w500${selected.poster_path}`}
              alt={selected.title}
              className="img-fluid text-end "
            />
          </div>
          <div className="col-12 col-md-6 text-white">
            <h2>{selected.title}</h2>

            <p>{selected.release_date.split("-")[0]}</p>
            <p>
              <strong>Rating:</strong> {selected.vote_average}
            </p>
            <p> {selected.overview}</p>
            <button onClick={close} className="btn btn-danger">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
