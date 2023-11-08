import React from "react";
import "./assets/scss/style.scss";
import AppRouter from "./router/AppRouter";
import Context from "./context/Contex";

const App = () => {
    return (
        <Context>
                <AppRouter />
        </Context>
    );
};

export default App;
