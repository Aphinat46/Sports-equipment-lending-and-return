import { createContext, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [role, setRole] = useState("");
    const [search, setSearch] = useState("");
    const [cart, setCart] = useState([]);
    const [equipments, setEquipments] = useState([
        {
            id: 1,
            name: "ฟุตบอล",
            img: "football.png",
            desc: "เป็นกีฬาประเภททีมที่เล่นระหว่างสองทีม โดยแต่ละทีมมีผู้เล่น 11 คน โดยใช้ลูกบอล เป็นที่ยอมรับอย่างแพร่หลายว่าเป็นกีฬาที่เป็นที่นิยมมากที่สุดในโลก",
        },
        {
            id: 2,
            name: "ตะกร้อ",
            img: "muzzle.png",
            desc: "เซปักตะกร้อแตกต่างจากกีฬาที่คล้ายกันของฟุตวอลเลย์ โดยใช้ลูกที่ทำจากหวายและอนุญาตให้ผู้เล่นใช้เท้า, เข่า, หน้าอก และศีรษะเพื่อสัมผัสลูก",
        },
        {
            id: 3,
            name: "แบดมินตัน",
            img: "badminton.png",
            desc: "เป็นกีฬาชนิดหนึ่ง ที่ใช้ไม้ตีลูก ลูกสำหรับใช้ตีนั้น เรียกกันมาช้านานว่า ลูกขนไก่หรือลูกแบด เพราะสมัยก่อนกีฬานี้ใช้ขนของไก่มาติดกับลูกบอลทรงกลมขนาดเล็ก ปัจจุบันลูกขนไก่ผลิตจากขนเป็ดที่คัดแล้ว ลูกบอลทรงกลมขนาดเล็กที่ทำเป็นหัวลูกขนไก่ทำด้วยไม้คอร์ก",
        },
        {
            id: 4,
            name: "บาสเกตบอล",
            img: "basketball.png",
            desc: "เป็นกีฬาชนิดหนึ่งซึ่งแบ่งผู้เล่นเป็น 2 ทีม แต่ละทีมประกอบด้วยผู้เล่น 5 คนพยายามทำคะแนนโดยการโยนลูกเข้าห่วงหรือตะกร้า ภายใต้กติกาการเล่นมาตรฐาน",
        },
    ]);

    return (
        <DataContext.Provider
            value={{
                role,
                setRole,
                search,
                setSearch,
                cart,
                setCart,
                equipments,
                setEquipments,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

export default DataContext;
