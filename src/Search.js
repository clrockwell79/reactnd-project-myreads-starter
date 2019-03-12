import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';

class Search extends Component {
	state = {
		searchResults: [],
	};
	render() {
		const handleSearch = e => {
			BooksAPI.search(e.target.value).then(results => {
				this.setState({ searchResults: results });
				console.log(results);
			});
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
				<div className="search-books-results">
					<ol className="books-grid" />
				</div>
			</div>
		);
	}
}

export default Search;
