import React, { useState } from "react";
import "./History.css";
import DataTable from "react-data-table-component";
import useToast from "../../hooks/useToast";

function History() {
    const { toastAlert } = useToast();
    const [data, setData] = useState([
        {
            No: 2093,
            products: [
                {
                    img: "basketball.png",
                    name: "บาสเกตบอล",
                    qty: 2,
                },
                {
                    img: "muzzle.png",
                    name: "ตะกร้อ",
                    qty: 1,
                },
            ],
            status: "รออนุมัติ",
            s_date: "14/10/2023",
            e_date: "17/10/2023",
        },
        {
            No: 3342,
            products: [
                {
                    img: "muzzle.png",
                    name: "ตะกร้อ",
                    qty: 1,
                },
            ],
            status: "อนุมัติ",
            s_date: "10/10/2023",
            e_date: "12/10/2023",
        },
        {
            No: 2938,
            products: [
                {
                    img: "badminton.png",
                    name: "แบดมินตัน",
                    qty: 1,
                },
            ],
            status: "คืนแล้ว",
            s_date: "05/10/2023",
            e_date: "06/10/2023",
        },
        {
            No: 8892,
            products: [
                {
                    img: "football.png",
                    name: "ฟุตบอล",
                    qty: 1,
                },
            ],
            status: "ยกเลิก",
            s_date: "05/10/2023",
            e_date: "06/10/2023",
        },
    ]);

    const onCancel = (No) => {
        const nextData = data.map((el) => {
            if (el.No === No) {
                return {
                    No: el.No,
                    products: el.products,
                    status: "ยกเลิก",
                    s_date: el.s_date,
                    e_date: el.e_date,
                };
            } else {
                return el;
            }
        });
        setData(nextData);
        toastAlert("ยกเลิกการยืมสำเร็จ", "success");
    };

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
            name: "วันที่ต้องคืน",
            selector: (row) => row.e_date,
        },
        {
            name: "สถานะ",
            selector: (row) => {
                if (row.status === "คืนแล้ว") {
                    return <span className="badge bg-primary">คืนแล้ว</span>;
                } else if (row.status === "ยกเลิก") {
                    return (
                        <span className="badge bg-danger text-black">
                            ยกเลิก
                        </span>
                    );
                } else if (row.status === "อนุมัติ") {
                    return <span className="badge bg-success">อนุมัติ</span>;
                } else {
                    return (
                        <span className="badge bg-warning text-black">
                            รออนุมัติ
                        </span>
                    );
                }
            },
        },
        {
            name: "จัดการ",
            selector: (row) =>
                row.status === "รออนุมัติ" ? (
                    <button
                        className="btn btn-danger"
                        onClick={() => onCancel(row.No)}
                    >
                        ยกเลิก
                    </button>
                ) : (
                    ""
                ),
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

    return (
        <>
            <h4 className="fw-bold">ประวัติการยืม</h4>
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

export default History;
