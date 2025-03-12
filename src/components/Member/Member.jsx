import React from "react";
import "./Member.css";
import DataTable from "react-data-table-component";
import { FaRegTrashAlt, FaEdit, FaPlus } from "react-icons/fa";

const columns = [
    {
        name: "รหัสประจำตัว",
        selector: (row) => row.id,
    },
    {
        name: "ชื่อ",
        selector: (row) => row.name,
    },
    {
        name: "วันที่ลงทะเบียน",
        selector: (row) => row.date,
    },
    {
        name: "ตำแหน่ง",
        selector: (row) =>
            row.role === "ผู้ดูแล" ? (
                <span class="badge bg-warning text-black">ผู้ดูแล</span>
            ) : (
                <span class="badge bg-primary">สมาชิก</span>
            ),
    },
    {
        name: "จัดการ",
        selector: () => {
            return (
                <div className="btn-group">
                    <button className="btn btn-primary">
                        <FaEdit />
                    </button>
                    <button className="btn btn-danger">
                        <FaRegTrashAlt />
                    </button>
                </div>
            );
        },
    },
];

const data = [
    {
        id: 1108131268,
        name: "นิมมาน อินทรมา",
        role: "ผู้ดูแล",
        date: "22/07/2023",
    },
    {
        id: 2740831332,
        name: "นิษฐา คุ้มวงศ์",
        role: "ผู้ดูแล",
        date: "12/08/2023",
    },
    {
        id: 2835341858,
        name: "นิษฐา คุ้มวงศ์",
        role: "สมาชิก",
        date: "15/08/2023",
    },
    {
        id: 7166586430,
        name: "ธิญา สันติวงษ์",
        role: "สมาชิก",
        date: "21/08/2023",
    },
    {
        id: 2300313522,
        name: "จิรัณ รัตนเศรษฐา",
        role: "ผู้ดูแล",
        date: "13/08/2023",
    },
];

function Users() {
    return (
        <>
            <div className="d-flex justify-content-between">
                <h4 className="fw-bold">จัดการสมาชิก</h4>
                <button className="btn btn-primary">
                    <FaPlus /> เพิ่มผู้ใช้งาน
                </button>
            </div>
            <hr />
            <DataTable columns={columns} data={data} pagination />
        </>
    );
}

export default Users;
