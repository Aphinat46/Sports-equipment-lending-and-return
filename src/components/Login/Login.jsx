import React, { useState } from "react";
import "./Login.css";
import useData from "../../hooks/useData";
import useToast from "../../hooks/useToast";
import { useNavigate } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState("");
    const { setRole } = useData();
    const { toastAlert } = useToast();
    const navigate = useNavigate();

    const isLogin = (e) => {
        e.preventDefault();
        if (username === "admin" || username === "user") {
            setRole(username);
            navigate("/");
        } else {
            toastAlert("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง", "error");
        }
    };

    return (
        <div className="bg-login d-flex flex-column justify-content-center align-items-center min-vh-100">
            <h1 className="text-center mb-5">ระบบยืม - คืนอุปกรณ์กีฬา</h1>
            <div className="col-8 col-sm-6 col-md-5 col-lg-3">
                <div className="card rounded-4 border-0">
                    <img src="/logo.png" className="card-img-top mx-auto" />
                    <div className="card-body">
                        <form onSubmit={isLogin}>
                            <div className="mb-3">
                                <label htmlFor="username">Username</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="username"
                                    onChange={(e) =>
                                        setUsername(e.target.value)
                                    }
                                    required
                                />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    required
                                />
                            </div>
                            <div className="text-center mb-4">
                                <button
                                    type="submit"
                                    className="btn btn-primary px-4 py-2"
                                >
                                    เข้าสู่ระบบ
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
