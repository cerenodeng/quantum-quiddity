export default function Grid() {
	const canvas = document.querySelector('.grid');
	const context = canvas.getContext('2d');

	context.beginPath();

	for (let x = 0; x < 10; x++) {
		context.moveTo(x * 100, 0);
		context.lineTo(x * 100, 900);
	}

	context.lineWidth = 1;
	context.strokeStyle = '#cccccc';
	context.stroke();
	context.closePath();

	return <canvas className="grid" width="900" height="900"></canvas>;
}
