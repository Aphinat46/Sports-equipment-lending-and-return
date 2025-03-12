import React from "react";
import "./BorrowHistory.css";
import DataTable from "react-data-table-component";

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
            row.status === "คืนแล้ว" ? (
                <span className="badge bg-primary">คืนแล้ว</span>
            ) : (
                <span className="badge bg-danger text-black">ยกเลิก</span>
            ),
    },
];

const data = [
    {
        No: 4040,
        products: [
            {
                img: "football.png",
                name: "ฟุตบอล",
                qty: 2,
            },
            {
                img: "badminton.png",
                name: "แบดมินตัน",
                qty: 1,
            },
        ],
        status: "คืนแล้ว",
        s_date: "11/09/2023",
        e_date: "13/09/2023",
    },
    {
        No: 5552,
        products: [
            {
                img: "basketball.png",
                name: "บาสเกตบอล",
                qty: 1,
            },
        ],
        status: "คืนแล้ว",
        s_date: "11/09/2023",
        e_date: "15/09/2023",
    },
    {
        No: 7674,
        products: [
            {
                img: "muzzle.png",
                name: "ตะกร้อ",
                qty: 4,
            },
        ],
        status: "ยกเลิก",
        s_date: "12/09/2023",
        e_date: "17/09/2023",
    },
    {
        No: 8627,
        products: [
            {
                img: "basketball.png",
                name: "บาสเกตบอล",
                qty: 2,
            },
        ],
        status: "คืนแล้ว",
        s_date: "12/09/2023",
        e_date: "16/09/2023",
    },
    {
        No: 1013,
        products: [
            {
                img: "muzzle.png",
                name: "ตะกร้อ",
                qty: 1,
            },
        ],
        status: "ยกเลิก",
        s_date: "14/09/2023",
        e_date: "18/09/2023",
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

function BorrowHistory() {
    return (
        <>
            <h4 className="fw-bold">ประวัติการยืม - คืน</h4>
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

export default BorrowHistory;
