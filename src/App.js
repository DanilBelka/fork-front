import WelcomePage from "./WelcomePage";
import MainPage from "./MainPage";
import NewProjectPage from "./NewProjectPage";
import TaskCreation from "./NewTaskPage"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NotFound from "./NotFound";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={"/welcome"} element={<WelcomePage/>}></Route>
				<Route path={"/index"} element={<MainPage/>}></Route>
				<Route path={"/project-creation"} element={<NewProjectPage/>}></Route>
				<Route path={"/task-creation"} element={<TaskCreation/>}></Route>
				<Route path={"*"} element={<NotFound/>}/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
