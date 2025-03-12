import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { DataProvider } from "./context/DataContext";
import { ToastProvider } from "./context/ToastContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <DataProvider>
            <ToastProvider>
                <App />
            </ToastProvider>
        </DataProvider>
    </BrowserRouter>
);
