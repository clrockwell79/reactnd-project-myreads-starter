import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Bookshelf from './Bookshelf';
import propTypes from 'prop-types';

const MyBookshelf = props => {
	const { books, onBookShelfChange } = props;
	const getBooksOnShelf = shelfId => {
		return books.filter(book => book.shelf === shelfId);
	};
	return (
		<div className="list-books">
			<div className="list-books-title">
				<h1>MyReads</h1>
			</div>
			<div className="list-books-content">
				<div>
					<Bookshelf
						shelfTitle="Currently Reading"
						booksOnShelf={getBooksOnShelf('currentlyReading')}
						onBookShelfChange={onBookShelfChange}
					/>
					<Bookshelf
						shelfTitle="Want to Read"
						booksOnShelf={getBooksOnShelf('wantToRead')}
						onBookShelfChange={onBookShelfChange}
					/>
					<Bookshelf
						shelfTitle="Read"
						booksOnShelf={getBooksOnShelf('read')}
						onBookShelfChange={onBookShelfChange}
					/>
				</div>
			</div>
			<div className="open-search">
				<Link to="/search" className="search-link">
					Add a book
				</Link>
			</div>
		</div>
	);
};

MyBookshelf.propTypes = {
	books: propTypes.array.isRequired,
	onBookShelfChange: propTypes.func.isRequired,
};

export default MyBookshelf;
