import React from 'react';
import { Route } from 'react-router-dom';
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
		const onBookShelfChange = (book, shelf) => {
			BooksAPI.update(book, shelf).then(() => {
				book.shelf = shelf;
				this.setState(currentState => {
					const books = currentState.myBooks.filter(myBook => myBook.id !== book.id);
					return {
						myBooks: [...books, book],
					};
				});
			});
		};
		return (
			<div className="app">
				<Route
					path="/"
					exact
					render={() => <MyBookshelf myBooks={this.state.myBooks} onBookShelfChange={onBookShelfChange} />}
				/>
				<Route
					path="/search"
					render={() => <Search myBooks={this.state.myBooks} onBookShelfChange={onBookShelfChange} />}
				/>
			</div>
		);
	}
}

export default BooksApp;
