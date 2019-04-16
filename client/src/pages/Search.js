import React, { Component } from "react";
import { Input, FormBtn } from "../components/SearchForm";
import BookItem from "../components/BookItem";
import axios from "axios";

const query = "https://www.googleapis.com/books/v1/volumes?q=";

class Search extends Component {

    state = {
        query: query,
        books: [],
        title: "testTitle",
        author: "testAuthor",
        description: "testDescription",
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
    }

    grabBook = (bookData) => {
        return axios.post("/api/save", bookData);
    }

    saveBook = book => {

        this.setState(book)
        
       let title = this.state.title;
       let author = this.state.author;
       let description = this.state.description;

        console.log("Title: " + this.state.title)
        console.log("Author: " + this.state.author)
        console.log("Description: " + this.state.description)

        this.grabBook(
            book
            // title: title.toString(),
            // authors: author.toString(),
            // description: description.toString()
        )
        .then(res=> this.apiQuery(this.state.query))
        .catch(err=> console.log(err));
    }

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
                                onClick={()=>this.saveBook({
                                    title: book.volumeInfo.title,
                                    author: book.volumeInfo.authors,
                                    description: book.volumeInfo.description,
                                })}
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