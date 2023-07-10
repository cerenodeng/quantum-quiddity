import Cell from './Cell';

export default function Grid() {
	let cells = [];
	for (let i = 0; i < 81; i++) {
		cells.push(<Cell key={i} />);
	}

	return (
		<div className="grid grid-cols-9 grid-rows-9 gap-px w-fit h-fit">
			{cells}
		</div>
	);
}
