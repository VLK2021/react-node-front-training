import {Route, Routes} from "react-router-dom";

import './App.css';
import Layout from "./Layout/Layout";
import Users from "./components/Users/Users";
import CreateUser from "./components/CreateUser/CreateUser";
import SingleUser from "./components/SingleUser/SingleUser";


function App() {

    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'users'} element={<Users/>}/>
                    <Route path={'create'} element={<CreateUser/>}/>
                    <Route path={'users/:id'} element={<SingleUser/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
