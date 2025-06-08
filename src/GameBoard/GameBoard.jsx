import { Fragment, useState } from "react";
import XYSLot from "./XOSlot";
import PlayerValues from "../PlayerValues";
import "./GameBoard.css";
import SizeErrorMessage from "./SizeErrorMessage";

const firstPlayer = PlayerValues.X; //player X always starts

function createArrayOfNDimentionsAndFillEachElementWithEmptyString(boardSize) {
	//the following code is a short-hand JS syntax to creating an NxN array
	const N = boardSize;
	return Array.from({ length: N }, () =>
		new Array(N).fill(PlayerValues.None)
	);
}

function checkIfGameEnded(slotsArray) {
	return !slotsArray.flat().includes(""); //we know that every slot has been filled if no slot has been left with a value of: ''
}

export default function GameBoard({ boardSize, increasePointsOfAPlayer }) {
	if (boardSize < 3) return <SizeErrorMessage />;

	const [turn, setTurn] = useState(firstPlayer);
	const [slots, setSlots] = useState(
		createArrayOfNDimentionsAndFillEachElementWithEmptyString(boardSize) //this function name is my mugnum opus
	);

	const swapTruns = (index) => {
		const [i, j] = [...index];

		const newSlots = slots.map((row) => [...row]);
		newSlots[i][j] = turn;

		//TODO: implament use effect function that checks if anyone won and move it outside of here
		//TODO: check for player win
		if (checkIfGameEnded(newSlots)) {
			console.log("YEEPEE game ended");
		}


		turn === PlayerValues.X
			? setTurn(PlayerValues.O)
			: setTurn(PlayerValues.X);

		setSlots(newSlots);
	};

	//originally this was put inside the return jsx but it was harder to read so moved outside
	let arrayOfSlots = slots.map((row, i) => (
		<Fragment key={i}>
			{row.map((_, j) => (
				<XYSLot
					key={j}
					index={[i, j]}
					whichPLayerPosessesSlot={slots[i][j]}
					changeSlotPosessionFunction={swapTruns}
					className="slot"
				/>
			))}
		</Fragment>
	));

	return <div className="board" style={{ "--size": boardSize }}>{arrayOfSlots}</div>;
}
