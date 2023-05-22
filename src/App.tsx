import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RequestStore } from "./commonFunctions/RequestStore";
import { Home } from "./pages/Home/Home";
import "./App.sass";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
