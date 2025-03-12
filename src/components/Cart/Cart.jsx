import React from "react";
import "./Cart.css";
import { FaRegTrashAlt } from "react-icons/fa";
import useData from "../../hooks/useData";
import useToast from "../../hooks/useToast";
import { useNavigate } from "react-router-dom";

function Cart() {
    const { cart, setCart, equipments } = useData();
    const { toastAlert } = useToast();
    const navigate = useNavigate();

    const onDelete = (id) => {
        setCart(cart.filter((el) => el.id !== id));
        toastAlert("ลบรายการในตะร้า", "success");
    };

    const onSubmit = (e) => {
        e.preventDefault();
        navigate("/history");
    };

    return (
        <>
            <div className="d-flex justify-content-center">
                <h4 className="fw-bold">ตะกร้า</h4>
            </div>
            <hr />
            {cart.map((el) => {
                return (
                    <div className="row mb-3" key={el.id}>
                        <div className="col-1 col-md-2 col-lg-1">
                            <img
                                src={
                                    "/" +
                                    equipments.find((obj) => obj.id === el.id)
                                        .img
                                }
                                className="img-fluid"
                            />
                        </div>
                        <div className="col-2 col-md-9 col-lg-10">
                            <div className="d-flex flex-column justify-content-center h-100">
                                <h4 className="fw-bold">
                                    {
                                        equipments.find(
                                            (obj) => obj.id === el.id
                                        ).name
                                    }
                                </h4>
                                <p className="fw-bold">จำนวน: {el.qty}</p>
                            </div>
                        </div>
                        <div
                            className="col-1 col-md-1 col-lg-1 text-center text-danger"
                            style={{ fontSize: "1.5rem" }}
                        >
                            <FaRegTrashAlt
                                style={{ cursor: "pointer" }}
                                onClick={() => onDelete(el.id)}
                            />
                        </div>
                    </div>
                );
            })}
            <hr className="mt-5" />
            <form
                onSubmit={onSubmit}
                className="d-flex justify-content-between align-items-center px-5"
            >
                <div>
                    <label htmlFor="borrow-end" className="fw-bold">
                        วันที่คืน:
                    </label>
                    <input
                        type="date"
                        id="borrow-end"
                        className="form-control"
                        required
                    />
                </div>
                <div>
                    <button type="submit" className="btn btn-primary py-2 px-4">
                        ยืนยัน
                    </button>
                </div>
            </form>
        </>
    );
}

export default Cart;
