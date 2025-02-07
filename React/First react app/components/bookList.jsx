import React from "react"
import styles from "./bookList.module.css"
    
export const BookList =()=>{    
    return (
        <div className ={styles}>
		<header>
			<div className="page-banner">
				<h1 class="title"> Book Collections</h1>
				<p>Books</p>
				<form className="search-books">
					<input type="text" placeholder="Search books..." />
				</form>
			</div>
		</header>
		<div className="book-list">
			<h2 class="title">Books to Read</h2>
			<ul>
				<li>
					<span class="name">Name of the Wind</span>
					<span class="delete">delete</span>
				</li>
				<li>
					<span class="name">The Wise Man's Fear</span>
					<span class="delete">delete</span>
				</li>
				<li>
					<span class="name">Kafka on the Shore</span>
					<span class="delete">delete</span>
				</li>
				<li>
					<span class="name">The Master and the Margarita</span>
					<span class="delete">delete</span>
				</li>
			</ul>
		</div>
		<form className="add-book">
			<input type="text" placeholder="Add a book..." />
			<button>Add</button>
		</form>

	</div>
    )
}
