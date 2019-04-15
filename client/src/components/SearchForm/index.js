import React from "react";

let divStyle = {
    "marginBottom": '10px'
  };

export function Input (props) {
    return (
        <div style={divStyle}>
            <h4>Which book would you like to search for</h4>
            {/* <form className="my-lg-0"> */}
                <input className="form-control mr-sm-2" type="text" placeholder="Search" {...props} />
                {props.children}
            
        </div>
            )
}

export function FormBtn (props) {
    return (
        <button type="submit" className="btn btn-primary btn-block my-2 my-sm-0" htmlFor="title" {...props}>Search</button>
    )
}

