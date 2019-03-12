import React from 'react';
import propTypes from 'prop-types';

const BookshelfBook = props => {
	const { book, onBookShelfChange, myBooks } = props;
	const getShelfForBook = () => {
		if (book.shelf) {
			return book.shelf;
		}
		if (myBooks === undefined) return 'none';

		const bookOnShelf = myBooks.filter(myBook => myBook.id === book.id);
		return bookOnShelf.length > 0 ? bookOnShelf.shelf : 'none';
	};
	// @todo Need to figure out why I can't simply use `getShelfForBook` in `defaultValue={}`
	const bookShelf = getShelfForBook();

	const bookImage =
		book.imageLinks && book.imageLinks.smallThumbnail
			? book.imageLinks.smallThumbnail
			: 'http://placehold.jp/24/cccccc/ffffff/128x193.png?text=no%20image%20available';
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
						backgroundImage: `url("${bookImage}")`,
					}}
				/>
				<div className="book-shelf-changer">
					<select onChange={updateBookShelf} defaultValue={bookShelf}>
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
			{book.authors && <div className="book-authors">{book.authors.join(', ')}</div>}
		</div>
	);
};

BookshelfBook.propTypes = {
	book: propTypes.object.isRequired,
	onBookShelfChange: propTypes.func.isRequired,
	myBooks: propTypes.array,
};

export default BookshelfBook;
