import React from 'react';
import { Link } from 'react-router-dom';
import Bookshelf from './Bookshelf';
import propTypes from 'prop-types';

const MyBookshelf = props => {
	const { myBooks, onBookShelfChange } = props;
	const getBooksOnShelf = shelfId => {
		return myBooks.filter(book => book.shelf === shelfId);
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
	myBooks: propTypes.array.isRequired,
	onBookShelfChange: propTypes.func.isRequired,
};

export default MyBookshelf;
