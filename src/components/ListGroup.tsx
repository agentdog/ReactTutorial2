import { useState } from "react";

interface Props {
	items: string[];
	heading: string;
	onSelectItem: (item: string) => void;
}

function ListGroup({items, heading, onSelectItem}: Props) {
	const [selectedInd, setSelectedIndex] = useState(-1)

	return (<>
		<h1>{heading}</h1>
		{items.length === 0 && <p>no item found</p>}
		<ul className="list-group">
			{items.map( (item, index) => (
				<li className={selectedInd === index ? 'list-group-item active' : 'list-group-item'} key={item}
				onClick={() => {
					setSelectedIndex(index);
					onSelectItem(item);
				}}
				>{item}</li>
			))}
		</ul>
	</>)
}

export default ListGroup;