import React, { useEffect, useState } from "react";
import "./HomePage.css";
import useData from "../../hooks/useData";
import useToast from "../../hooks/useToast";

function HomePage() {
    const { search, cart, setCart, equipments } = useData();
    const {toastAlert} = useToast();
    
    const [searchedData, setSearchedData] = useState([]);
    const [cartQty, setCartQty] = useState([]);

    useEffect(() => {
        const found = equipments.filter((el) => el.name.includes(search));
        setSearchedData(found);
    }, [search]);

    const submitCart = (id) => {
        let cartQtyData = cartQty.find((el) => el.id === id);

        if (cartQtyData.qty > 0) {
            const found = cart.findIndex((el) => el.id === id);

            if (found === -1) {
                setCart([
                    ...cart,
                    {
                        id: id,
                        qty: cartQtyData.qty,
                    },
                ]);
            } else {
                const nextCart = cart.map((el) => {
                    if (el.id === id) {
                        return {
                            id: el.id,
                            qty: el.qty + cartQtyData.qty,
                        };
                    } else {
                        return el;
                    }
                });
                setCart(nextCart);
            }

            toastAlert("เพิ่มลงตะกร้าสำเร็จ", "success")
            setCartQty(cartQty.filter((el) => el.id !== id));
        }
    };

    const handleCartQty = (id, type) => {
        const found = cartQty.findIndex((el) => el.id === id);
        if (found === -1) {
            setCartQty([
                ...cartQty,
                {
                    id: id,
                    qty: 1,
                },
            ]);
        } else {
            const nextCartQty = cartQty.map((el) => {
                if (el.id === id) {
                    if (type === "plus") {
                        return {
                            id: el.id,
                            qty: el.qty + 1,
                        };
                    } else {
                        return {
                            id: el.id,
                            qty: el.qty <= 0 ? el.qty : el.qty - 1,
                        };
                    }
                } else {
                    return el;
                }
            });
            setCartQty(nextCartQty);
        }
    };
    return (
        <>
            <div className="row">
                {searchedData.map((el) => {
                    return (
                        <div className="col-12 col-md-6 col-lg-3" key={el.id}>
                            <div className="card e-card">
                                <div className="w-100 text-center">
                                    <img
                                        src={"/" + el.img}
                                        className="e-img "
                                    />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{el.name}</h5>
                                    <p className="text-truncation-2">
                                        {el.desc}
                                    </p>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <button
                                            href="#"
                                            className="btn btn-primary"
                                            onClick={() =>
                                                handleCartQty(el.id, "minus")
                                            }
                                        >
                                            -
                                        </button>
                                        <div className="px-4 fw-bold">
                                            {cartQty.find(
                                                (obj) => obj.id === el.id
                                            )
                                                ? cartQty.find(
                                                      (obj) => obj.id === el.id
                                                  ).qty
                                                : 0}
                                        </div>

                                        <button
                                            href="#"
                                            className="btn btn-primary"
                                            onClick={() =>
                                                handleCartQty(el.id, "plus")
                                            }
                                        >
                                            +
                                        </button>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <button
                                            className="btn btn-success mt-2 px-5"
                                            onClick={() => submitCart(el.id)}
                                        >
                                            เพิ่ม
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default HomePage;
