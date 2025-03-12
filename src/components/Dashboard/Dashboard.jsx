import React from "react";
import "./Dashboard.css";
import { FaRandom, FaSpinner } from "react-icons/fa";

function Dashboard() {
    return (
        <>
            <h4 className="fw-bold">Dashboard</h4>
            <hr />
            <div className="row">
                <div className="col-12 col-md-6 col-lg-3">
                    <div className="bg-success rounded-2 shadow-lg px-3 py-2 text-white">
                        <div className="d-flex align-items-center justify-content-between">
                            <h4>อุปกรณ์ที่รออนุมัติ</h4>
                            <h2>5</h2>
                        </div>
                        <div className="text-center" style={{ fontSize: '3rem' }}>
                            <FaSpinner />
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <div className="bg-danger rounded-2 shadow-lg px-3 py-2 text-white">
                        <div className="d-flex align-items-center justify-content-between">
                            <h4>อุปกรณ์ที่ต้องได้รับคืน</h4>
                            <h2>12</h2>
                        </div>
                        <div className="text-center" style={{ fontSize: '3rem' }}>
                            <FaRandom />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;
