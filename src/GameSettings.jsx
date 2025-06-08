function GameSettings({ player1Points, player2Points, onChangeBoardSize }) {
	const handleChange = (event) => {
		const value = parseInt(event.target.value, 10);
		if (!isNaN(value)) {
			onChangeBoardSize(value);
		}
	};

	return (
		<div>
			<input
				type="number"
				onChange={handleChange}
				placeholder="Enter board size"
			/>
			<br />
		</div>
	);
}

export default GameSettings;
