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


  )
}
}

export default BooksApp