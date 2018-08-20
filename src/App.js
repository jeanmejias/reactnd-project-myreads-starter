import React from 'react';
import './App.css';
import * as BooksAPI from './BooksAPI';
import SearchPage from './SearchPage';
import BookShelves from './BookShelves';
import {Route} from 'react-router-dom';
import escapeRegExp from 'escape-string-regexp';

class BooksApp extends React.Component {

  state = {
    books: [],
    query: '',
    searchedBooks:[],
    error: '',
  };

//after the App component has been rendered to the DOM a predefined collection of seven books with pre-selected shelves has been added.
componentDidMount(){
  BooksAPI.getAll().then((books) => {
    this.setState({books});
  });
};

updateOptions = (book, shelf) => {
    //console.log(book.shelf, shelf); =>current shelf, updated shelf

    BooksAPI.update(book, shelf).then(()=>{
      book.shelf = shelf; //assign the updated shelf 
      this.setState(prevState =>({
        books: prevState.books.filter((prevBook)=>prevBook.id!==book.id).concat([book]) //filter all books that have different id from previous state and add them to a new array. Then concatenate the filtered books with the updated books in a new array.
      }));
    });
  }


searchedTerm = (query) => {
//update the input text
    this.setState({
      query: query
    });
//if there is a text search() is invoked
  if(query.length>0){
  const match = new RegExp(escapeRegExp(query), 'i');//case insensitive
    BooksAPI.search(query).then((searchedBooks) =>{

      this.setState({
        searchedBooks: searchedBooks.filter(
          (searchedBook)=>match.test(searchedBook.authors)||match.test(searchedBook.title))//new array with maching titles or name of authors.
      })

      //compare book's ids and assign selected shelf if the book is already in collection 
      searchedBooks.forEach((searchedBook)=>{

         this.state.books.forEach(book =>{

          if(searchedBook.id === book.id){
            searchedBook.shelf = book.shelf;
            //console.log(searchedBook.shelf, searchedBook.id, book.id)
              this.setState(prevState=>({
                searchedBooks: prevState.searchedBooks.filter((psearchedBook)=>psearchedBook.shelf!==searchedBook.shelf).concat([searchedBook])
              }))
          }
            return;
        })
        return;
      })
    })
    .catch(()=>{
      setTimeout(()=>{
        this.setState({
          searchedBooks: [],
          error: 'You see this message because the book you are looking for doesn\'t exist in our library, or you have a typo.'//not the best message :(
        })
      }, 500)
    })
    
  }else{
    //if the text is deleted too fast the result searched by first letter remains or the error text is still displayed
    setTimeout(()=>{
      this.setState({
        searchedBooks: [],
        error: ''
      })
      }, 1500);
  }
};


render() {
  let {books,
      query,
      searchedBooks,
      error} = this.state;

  return (
    <div className="app">

      <Route exact path='/'
        render= {() => (
          <BookShelves
          books = {books}
          selectOptions = {this.updateOptions}
          />
        )}
      />

      <Route path = '/search'
        render = {() => (
          <SearchPage
          inputText = {query}
          searchedBooks = {searchedBooks}
          searchedTerm = {this.searchedTerm}
          selectOptions = {this.updateOptions}
          error = {error}
          />
        )}
      />

    </div>
    );
  };
};

export default BooksApp;