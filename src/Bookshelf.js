import React from 'react';
import ListBooks from './ListBooks';
import propTypes from 'prop-types';

const Bookshelf = props => {
	const { shelfTitle, booksOnShelf, onBookShelfChange } = props;
	return (
		<div className="bookshelf">
			<h2 className="bookshelf-title">{shelfTitle}</h2>
			<div className="bookshelf-books">
				<ListBooks books={booksOnShelf} onBookShelfChange={onBookShelfChange} />
			</div>
		</div>
	);
};

Bookshelf.propTypes = {
	shelfTitle: propTypes.string.isRequired,
	booksOnShelf: propTypes.array.isRequired,
	onBookShelfChange: propTypes.func.isRequired,
};

export default Bookshelf;
