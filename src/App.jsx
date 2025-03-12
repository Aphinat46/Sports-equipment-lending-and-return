import React from "react";
import Layout from "./components/Layout";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import Member from "./components/Member/Member";
import ManageBorrow from "./components/MangeBorrow/ManageBorrow";
import BorrowHistory from "./components/BorrowHistory/BorrowHistory";
import HomePage from "./components/HomePage/HomePage";
import Cart from "./components/Cart/Cart";
import History from "./components/History/History";
import { Routes, Route, Navigate } from "react-router-dom";
import useData from "./hooks/useData";
import "./App.css";

function App() {
    const { role } = useData();

    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={!role ? <Navigate to="/login" /> : <Layout />}
                >
                    <Route
                        path="/"
                        element={
                            role === "admin" ? <Dashboard /> : <HomePage />
                        }
                    />
                    <Route path="/member" element={<Member />} />
                    <Route path="/manageborrow" element={<ManageBorrow />} />
                    <Route path="/borrowhistory" element={<BorrowHistory />} />
                    <Route path="/cart" element={role === "admin" ? <Dashboard /> :  <Cart />} />
                    <Route path="/history" element={role === "admin" ? <Dashboard /> :  <History />} />
                </Route>
                <Route path="/login" element={<Login />} />
            </Routes>
        </>
    );
}

export default App;
