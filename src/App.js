import React, {Component} from 'react'
import './App.css'
import MainPage from "./MainPage"
import SearchBook from "./SearchBook"
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class BooksApp extends Component {
  state = {
    books: []
  }
// get all books before loading the component
componentDidMount() {
  BooksAPI.getAll().then((books) => {
    this.setState({books})
  })
}

updateShelf = (book, shelf) => {
  BooksAPI.update(book, shelf);
  BooksAPI.getAll().then((books) => {
    this.setState({books})
  })
}
render() {
  return (
    <div className="app">
    <Route exact path='/search' render={() => (
      <SearchBook books={this.state.books} updateShelf={this.updateShelf}/>
    )}/>
    <Route exact path='/' render={() => (
      <MainPage books={this.state.books} updateShelf={this.updateShelf}/>
    )}/>
    </div>

  )
}
}

export default BooksApp