import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Layout.css";
import useData from "../hooks/useData";
import { useNavigate } from "react-router-dom";

function Layout() {
    const { role, setRole, setSearch } = useData();
    const navigate = useNavigate();

    const logout = () => {
        setRole("");
        navigate("/login");
    };

    return (
        <>
            <section className="layout-container d-flex flex-column">
                <header className="layout-header">
                    <div className="d-flex align-items-center">
                        <Link to="/">
                            <img
                                src="/logo.png"
                                alt="logo-header"
                                style={{ height: "150px" }}
                            />
                        </Link>
                        <div>
                            <h5 className="fw-bold">ระบบ</h5>
                            <h3 className="fw-bold">ยืม - คืนอุปกรณ์กีฬา</h3>
                        </div>
                    </div>
                </header>
                <section className="d-flex flex-fill">
                    <aside className="layout-sidebar d-flex flex-column justify-content-between">
                        {role === "admin" ? (
                            <div>
                                <Link
                                    to="/"
                                    type="button"
                                    className="btn btn-outline-primary w-100 mb-2"
                                >
                                    Dashboard
                                </Link>
                                <Link
                                    to="/member"
                                    type="button"
                                    className="btn btn-outline-primary w-100 mb-2"
                                >
                                    จัดการสมาชิก
                                </Link>
                                <Link
                                    to="/manageborrow"
                                    type="button"
                                    className="btn btn-outline-primary w-100 mb-2"
                                >
                                    จัดการยืม - คืน
                                </Link>
                                <Link
                                    to="/borrowhistory"
                                    type="button"
                                    className="btn btn-outline-primary w-100 mb-2"
                                >
                                    ประวัติการยืม - คืน
                                </Link>
                            </div>
                        ) : (
                            <div>
                                <div className="mb-2">
                                    <label
                                        htmlFor="search"
                                        style={{ fontSize: "12px" }}
                                    >
                                        ค้นหา
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="search"
                                        onChange={(e) =>
                                            setSearch(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="mb-2 pb-4 border-bottom">
                                    <label
                                        htmlFor="category"
                                        style={{ fontSize: "12px" }}
                                    >
                                        หมวดหมู่
                                    </label>
                                    <select
                                        className="form-select"
                                        id="category"
                                        defaultValue="all"
                                    >
                                        <option value="all">ทั้งหมด</option>
                                    </select>
                                </div>
                                <Link
                                    to="/cart"
                                    type="button"
                                    className="btn btn-outline-primary w-100 mb-2"
                                >
                                    ตะกร้า
                                </Link>
                                <Link
                                    to="/history"
                                    type="button"
                                    className="btn btn-outline-primary w-100 mb-2"
                                >
                                    ประวัติการยืม
                                </Link>
                            </div>
                        )}
                        <button
                            onClick={logout}
                            type="button"
                            className="btn btn-danger w-100 mb-2"
                        >
                            ออกจากระบบ
                        </button>
                    </aside>

                    <main className="layout-main flex-fill">
                        <div className="w-100 h-100 bg-white p-3 rounded-4">
                            <Outlet />
                        </div>
                    </main>
                </section>
            </section>
        </>
    );
}

export default Layout;
