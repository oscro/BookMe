import React, { Component } from "react";
import { Input, FormBtn } from "../components/SearchForm";
import BookItem from "../components/BookItem";
import axios from "axios";

const query = "https://www.googleapis.com/books/v1/volumes?q=";

class Search extends Component {

    state = {
        query: query,
        books: [],
        title: "",
        authors: "",
        description: "",
        image: "",
        link: "",
    }

    componentDidMount() {
        this.apiQuery(this.state.query + "harry+potter");
    }

    apiQuery = (q) => {
        axios.get(q)
            .then((res) => {
                this.setState({ books: res.data.items})
                console.log(this.state.books);
            }
            )
            .catch(err => console.log(err));
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        let newString = value.split(' ').join('+');
        let newQ = query + newString;
        this.setState({
            [name]: value,
            query: newQ
        })

        console.log("Query: " + this.state.query)

    }

    handleFormSubmit = event => {
        event.preventDefault();
        let newQ = query + this.state.title; 

        if (this.state.title) {
            this.setState({
                query: newQ
            })
            console.log(this.state.query)
            this.apiQuery(this.state.query)


        }
    };

    render() {
        return (
            <div>
                <div className="container" style={{marginBottom: '10px'}}>
                <form>
                    <Input
                        value={this.state.title}
                        onChange={this.handleInputChange}
                        name="title"
                    />
                    <FormBtn
                        onClick={this.handleFormSubmit}
                    />
                </form>
                </div>
                <div className="container">
                    {this.state.books.length ? (
                        this.state.books.map(book => (
                            <BookItem
                                key={book.id}
                                author={book.volumeInfo.authors}
                                title={book.volumeInfo.title}
                                description={book.volumeInfo.description}
                            />
                        ))
                    ) : (
                            <h3>No Results to Display</h3>
                        )}
                </div>
            </div>
        )
    }
}

export default Search; 