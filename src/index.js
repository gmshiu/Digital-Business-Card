import React from "react";
import ReactDOM from "react-dom";
import Info from "./Info"
import About from "./About"
import Interests from "./interests";
import Footer from "./Footer";
import "./App.css"

function App() {
    return (
        <div className="App">
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));