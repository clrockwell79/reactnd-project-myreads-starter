import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import ListBooks from './ListBooks';
import PropTypes from 'prop-types';

class Search extends Component {
	state = {
		searchResults: [],
	};

	render() {
		const { myBooks, onBookShelfChange } = this.props;
		const handleSearch = e => {
			if (e.target.value === '') {
				this.setState({ searchResults: [] });
			} else {
				BooksAPI.search(e.target.value).then(results => {
					this.setState({ searchResults: results });
				});
			}
		};
		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link to="/" className="close-search">
						Close
					</Link>
					<div className="search-books-input-wrapper">
						<input type="text" placeholder="Search by title or author" onChange={handleSearch} />
					</div>
				</div>
				{this.state.searchResults.length > 0 && (
					<div className="search-books-results">
						<ListBooks
							books={this.state.searchResults}
							onBookShelfChange={onBookShelfChange}
							myBooks={myBooks}
						/>
					</div>
				)}
			</div>
		);
	}
}

Search.propTypes = {
	myBooks: PropTypes.array.isRequired,
	onBookShelfChange: PropTypes.func.isRequired,
};

export default Search;
