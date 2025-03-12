import React, { useState } from "react";
import "./ManageBorrow.css";
import DataTable from "react-data-table-component";
import useToast from "../../hooks/useToast";

function ManageBorrow() {
    const { toastAlert } = useToast();

    const [data, setData] = useState([
        {
            No: 4412,
            products: [
                {
                    img: "football.png",
                    name: "ฟุตบอล",
                    qty: 2,
                },
                {
                    img: "muzzle.png",
                    name: "ตะกร้อ",
                    qty: 1,
                },
                {
                    img: "badminton.png",
                    name: "แบดมินตัน",
                    qty: 1,
                },
            ],
            status: "อนุมัติ",
            s_date: "01/10/2023",
            e_date: "06/10/2023",
        },
        {
            No: 7573,
            products: [
                {
                    img: "badminton.png",
                    name: "แบดมินตัน",
                    qty: 1,
                },
                {
                    img: "basketball.png",
                    name: "บาสเกตบอล",
                    qty: 1,
                },
            ],
            status: "รออนุมัติ",
            s_date: "01/10/2023",
            e_date: "03/10/2023",
        },
        {
            No: 7648,
            products: [
                {
                    img: "basketball.png",
                    name: "บาสเกตบอล",
                    qty: 4,
                },
            ],
            status: "อนุมัติ",
            s_date: "01/10/2023",
            e_date: "05/10/2023",
        },
        {
            No: 6508,
            products: [
                {
                    img: "muzzle.png",
                    name: "ตะกร้อ",
                    qty: 2,
                },
            ],
            status: "รออนุมัติ",
            s_date: "30/09/2023",
            e_date: "05/10/2023",
        },
        {
            No: 3123,
            products: [
                {
                    img: "football.png",
                    name: "ฟุตบอล",
                    qty: 2,
                },
                {
                    img: "muzzle.png",
                    name: "ตะกร้อ",
                    qty: 1,
                },
            ],
            status: "รออนุมัติ",
            s_date: "01/10/2023",
            e_date: "11/10/2023",
        },
    ]);

    const columns = [
        {
            name: "No",
            selector: (row) => row.No,
        },
        {
            name: "วันที่ยืม",
            selector: (row) => row.s_date,
        },
        {
            name: "วันที่คืน",
            selector: (row) => row.e_date,
        },
        {
            name: "สถานะ",
            selector: (row) =>
                row.status === "อนุมัติ" ? (
                    <span className="badge bg-success">อนุมัติ</span>
                ) : (
                    <span className="badge bg-warning text-black">รออนุมัติ</span>
                ),
        },
        {
            name: "จัดการ",
            selector: (row) => {
                return (
                    <div className="btn-group">
                        {row.status === "รออนุมัติ" ? (
                            <>
                                <button
                                    className="btn btn-primary"
                                    onClick={() => onSubmit(row.No)}
                                >
                                    อนุมัติ
                                </button>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => onCancel(row.No)}
                                >
                                    ยกเลิก
                                </button>
                            </>
                        ) : (
                            ""
                        )}
                    </div>
                );
            },
        },
    ];

    const ExpandedComponent = ({ data }) =>
        data.products.map((el) => {
            return (
                <div key={el.No} className="d-flex p-2">
                    <img src={"/" + el.img} style={{ height: "70px" }} />
                    <div
                        className="ms-5 d-flex flex-column justify-content-center fw-bold"
                        style={{ lineHeight: 0.5 }}
                    >
                        <p>{el.name}</p>
                        <p>จำนวน: {el.qty}</p>
                    </div>
                </div>
            );
        });

    const onCancel = (No) => {
        setData(data.filter((el) => el.No !== No));
        toastAlert("ยกเลิกรายการสำเร็จ", "success");
    };

    const onSubmit = (No) => {
        const nextData = data.map((el) => {
            if (el.No === No) {
                return {
                    No: el.No,
                    products: el.products,
                    status: "อนุมัติ",
                    s_date: el.s_date,
                    e_date: el.e_date,
                };
            } else {
                return el;
            }
        });
        setData(nextData);
        toastAlert("อนุมัติรายการสำเร็จ", "success");
    };

    return (
        <>
            <h4 className="fw-bold">จัดการยืม - คืน</h4>
            <hr />
            <DataTable
                columns={columns}
                data={data}
                expandableRows
                expandableRowsComponent={ExpandedComponent}
                pagination
            />
        </>
    );
}

export default ManageBorrow;
