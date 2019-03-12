import React from 'react';
import { Route, Link } from 'react-router-dom';
import Search from './Search';
import * as BooksAPI from './BooksAPI';
import './App.css';
import MyBookshelf from './MyBookshelf';

class BooksApp extends React.Component {
	state = {
		myBooks: [],
		// If time, let's allow a user to create their own shelves.
		shelves: [],
	};
	componentDidMount() {
		BooksAPI.getAll().then(data => {
			this.setState({
				myBooks: data,
			});
		});
	}

	render() {
		/**
		 * My primary mental struggle is how far removed this method is from the component that actually uses it.
		 * As I type this, I realize that this state might be fine at least one component down because we're updating the API.
		 * I initially thought the API would need to know what books are currently on a shelf for the search, however...
		 */

		const onBookShelfChange = book => {
			this.setState(currentState => {
				const books = currentState.myBooks.filter(myBook => myBook.id !== book.id);
				return {
					myBooks: [...books, book],
				};
			});
			BooksAPI.update(book, book.shelf);
		};
		return (
			<div className="app">
				<Route
					path="/"
					exact
					render={() => <MyBookshelf books={this.state.myBooks} onBookShelfChange={onBookShelfChange} />}
				/>
				<Route path="/search" component={Search} />
			</div>
		);
	}
}

export default BooksApp;
