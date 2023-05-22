import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppMenuBar } from "./components/Menu/Menu";
import { Home } from "./pages/Home/Home";
import { Docs } from "./pages/Docs/Docs";
import { Contacts } from "./pages/Contacts/Contacts";
import "./App.sass";

function App() {
    return (
        <div className="App">
            <AppMenuBar />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/docs" element={<Docs />} />
                    <Route path="/contacts" element={<Contacts />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
