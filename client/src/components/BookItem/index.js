import React from "react";

function BookItem(props) {
    return (
        <div>
            <div className="card text-white bg-primary mb-3">
                <div className="card-header">{props.author}</div>
                <div className="card-body">
                    <h4 className="card-title">{props.title}</h4>
                    <p className="card-text">{props.description}</p>
                </div>
            </div>
        </div>
    )
}

export default BookItem; 