import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";


export function Acordion({ title, description }) {
    const [open, setopen] = useState(false)

    return (
        <>
            <div className="container-acordion">
                <div className="acordion" onClick={() => setopen(!open)}>
                    <div className="text-acordion">
                        <span className="text-btn" >{title}</span>
                        <div className="icon-btn">
                            {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
                        </div>
                    </div>
                </div>
                {open && <div className="description-acordion"><p>{description}</p>
                </div>}
            </div>
        </>
    )
}