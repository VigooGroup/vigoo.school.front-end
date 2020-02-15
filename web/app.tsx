import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ApplicationName123 } from "sms-core";
import { ttt } from "sms-core/types/ttt";

export const App: React.FC = () => {
    return (
        <div>
            Application {ApplicationName123} {ttt}
        </div>
    )
}

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);