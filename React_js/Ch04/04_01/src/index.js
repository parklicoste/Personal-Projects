import React, { Component } from 'react'
import { render } from 'react-dom'

const Library = () => {
	return (
		<div>
			<Book title="The Sun Also Rises" author="Ernest Hemingway" Pages={260}/>
			<Book title="White teeth" author="Zadie Smith" Pages={480} />
			<Book title="Cat's Cradle" author="Kurt vonnegut" Pages={304}/>
		</div>
	)
}
const Book = ({title, author, pages}) => {
	return (
		<section>
			<h2>{title}</h2>
			<p>by: {author}</p>
			<p>Pages: {pages}</p>
		</section>
	)
}

render(
		<Library />,
	document.getElementById('root')
)
