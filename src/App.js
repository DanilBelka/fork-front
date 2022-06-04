import React, {useState} from "react";
import TicketArea from "./TicketArea";

function App() {
	let [someCounter, setSomeCounter] = useState(0)

	return (
		<div className="App">
			<div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-around"}}>
				<TicketArea/>
			</div>
		</div>
	);
}

export default App;
