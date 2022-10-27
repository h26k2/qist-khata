
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from './AuthForms/Login'
import Home from './Dashboard/Home'

const App = () => {
    return(
        <div className="app">
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route path="/login" element={<Login/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;