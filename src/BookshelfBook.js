import React from 'react';
import propTypes from 'prop-types';

const BookshelfBook = props => {
	const { book, onBookShelfChange } = props;
	const updateBookShelf = e => {
		if (e.target.value !== book.shelf) {
			onBookShelfChange(book, e.target.value);
		}
	};
	return (
		<div className="book">
			<div className="book-top">
				<div
					className="book-cover"
					style={{
						width: 128,
						height: 193,
						backgroundImage: `url("${book.imageLinks.smallThumbnail}")`,
					}}
				/>
				<div className="book-shelf-changer">
					<select onChange={updateBookShelf} defaultValue={book.shelf}>
						<option value="move" disabled>
							Move to...
						</option>
						<option value="currentlyReading">Currently Reading</option>
						<option value="wantToRead">Want to Read</option>
						<option value="read">Read</option>
						<option value="none">None</option>
					</select>
				</div>
			</div>
			<div className="book-title">{book.title}</div>
			<div className="book-authors">{book.authors.join(', ')}</div>
		</div>
	);
};

BookshelfBook.propTypes = {
	book: propTypes.object.isRequired,
	onBookShelfChange: propTypes.func.isRequired,
};

export default BookshelfBook;
