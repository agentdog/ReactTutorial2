function ListGroup() {
	const items = [
		"New york",
		"Another city"
		,"San francisco?"
	]

	const itemElem = items.map( item => {
		<li>{item}</li>
	})

	return (<>
		<h1>List</h1>
		<ul className="list-group">
			{itemElem}
		</ul>
	</>)
}

export default ListGroup;