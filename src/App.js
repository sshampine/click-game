import React, { Component } from "react";
import PlayerCard from "./components/PlayerCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import players from "./players.json"

class App extends Component {
	state = {
		players
	};


render() {
	return (
		<div>
			<Navbar />
			<Header />
			<Wrapper>
				{this.state.players.map(player => (
					<PlayerCard
						image={player.image}
					/>
					))}
			</Wrapper>
			<Footer />
		</div>
	)
	};
}
export default App;
