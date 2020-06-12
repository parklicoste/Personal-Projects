import React from 'react'
import { render } from 'react-dom'

let bookList = [
	{"title": "Hunger", "author": "Roxane Gay", "pages": 320},
	{"title": "The Sun Also Rises", "author": "Ernest Hemingway", "pages": 260},
	{"title": "White Teeth", "author": "Zadie Smith", "pages": 480},
	{"title": "Cat's Cradle", "author": "Kurt Vonnegut", "pages": 304}
]

const Book = ({title, author, pages, freeBookmark}) => {
	return (
		<section>
			<h2>{title}</h2>
			<p>by: {author}</p>
			<p>Pages: {pages} pages</p>
			<p>Free Bookmark Today: {freeBookmark ? 'yes!': 'no!'}</p>
		</section>
	)
}

const Hiring = () =>
	<div>
		<p>The library is hiring. Go to www.library.com/jobs for more.</p>
	</div>

const NotHiring = () =>
	<div>
		<p>The library is not hiring. Check back later for more info.</p>
	</div>

class Library extends React.Component {

	componentDidMount() {
		console.log("The component is now mounted")
	}

	componentDidUpdate(){
		console.log("The component is now updated")
	}

	state = {
		open: true,
		freeBookmark: false,
		hiring: true
	}

	toggleOpenClosed = () => {
		this.setState(prevState => ({
			open: !prevState.open
		}))
	}
	render() {
		const { books } = this.props
		return (
			<div>
				{this.state.hiring ? <Hiring /> : <NotHiring />}
				<h1>The library is {this.state.open ? 'open' : 'closed'}</h1>
				<button onClick={this.toggleOpenClosed}>Change</button>
				{books.map(
					(book, i) =>
						<Book
							key={i}
							title={book.title}
							author={book.author}
							pages={book.pages}
							freeBookmark={this.state.freeBookmark}/>
				)}
			</div>
		)
	}
}



render(
	<Library books={bookList}/>,
	document.getElementById('root')
)
