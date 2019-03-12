import React from 'react';
import BookshelfBook from './BookshelfBook';
import propTypes from 'prop-types';

const BookshelfBooks = props => {
	const { booksOnShelf, onBookShelfChange } = props;
	return (
		<ol className="books-grid">
			{booksOnShelf.map(book => (
				<li key={book.id}>
					<BookshelfBook book={book} onBookShelfChange={onBookShelfChange} />
				</li>
			))}
		</ol>
	);
};

BookshelfBooks.propTypes = {
	booksOnShelf: propTypes.array.isRequired,
	onBookShelfChange: propTypes.func.isRequired,
};

export default BookshelfBooks;
