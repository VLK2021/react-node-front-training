import {Route, Routes} from "react-router-dom";

import './App.css';
import Layout from "./Layout/Layout";
import Users from "./components/Users/Users";
import CreateUser from "./components/CreateUser/CreateUser";


function App() {

    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'users'} element={<Users/>}/>
                    <Route path={'create'} element={<CreateUser/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
