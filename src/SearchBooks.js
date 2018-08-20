import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'
import Book from "./Book";
import {Link} from 'react-router-dom'

class SearchBook extends Component {
  state = {
    query: '',
    searchedBooks: []
  }