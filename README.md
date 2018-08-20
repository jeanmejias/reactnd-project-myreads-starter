# MyReads Project

Project of the Udacity Frond-End Developer Nanodegree.

This is a bookshelf app that allows users to select and categorize books they have read, are currently reading, or want to read. On search page users can search for books by title or authors names.

In this project I use the starter template, which provides a static example of the CSS and HTML markup, but without any of the React code that is needed to complete the project.

The goal is to be added interactivity to the app by refactoring the static code.

## Instructions

To get started developing right away:

* download or clone this project
* install all project dependencies with `npm install`
* start the development server with `npm start`

## Backend Server

To simplify the development process, a backend server is provided to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods needed to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
