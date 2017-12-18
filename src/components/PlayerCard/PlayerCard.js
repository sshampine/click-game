import React from "react";
import "./PlayerCard.css";

const PlayerCard = props => (
	<div className="card">
		<img src={props.image} />
	</div>

	);

export default PlayerCard;