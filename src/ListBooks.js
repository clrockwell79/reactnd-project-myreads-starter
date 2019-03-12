import React from 'react';
import BookshelfBook from './BookshelfBook';
import propTypes from 'prop-types';

const ListBooks = props => {
	const { books, onBookShelfChange } = props;
	return (
		<ol className="books-grid">
			{books.map(book => (
				<li key={book.id}>
					<BookshelfBook book={book} onBookShelfChange={onBookShelfChange} />
				</li>
			))}
		</ol>
	);
};

ListBooks.propTypes = {
	books: propTypes.array.isRequired,
	onBookShelfChange: propTypes.func.isRequired,
};

export default ListBooks;
