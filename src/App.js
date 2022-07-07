import WelcomePage from "./WelcomePage";
import MainPage from "./MainPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NotFound from "./NotFound";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={"/welcome"} element={<WelcomePage/>}></Route>
				<Route path={"/index"} element={<MainPage/>}></Route>
				<Route path={"*"} element={<NotFound/>}/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
