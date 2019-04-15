import React from "react";

function Jumbotron() {
    return (
        <div className="jumbotron">
            <h1>Search from Google Books</h1>
            <div className="progress">
                <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: '100%'}} ></div>
            </div>
        </div>
    );
}

export default Jumbotron;