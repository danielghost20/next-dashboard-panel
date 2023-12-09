"use client"
import clsx from "clsx"
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";


export default function Select ({options, initialValue, className, setValue}: {options: any[], initialValue: string, className?: string, setValue: any}) {
    
    const [open, setOpen] = useState<boolean>(false)
    const [option, setOption] = useState<string>('seleccionar valor')

    return (
        <div className={clsx('w-full relative', className)}>
            <div className="flex items-center justify-between">
            <span>{option}</span>
            <MdKeyboardArrowDown className="cursor-pointer" onClick={() => setOpen(!open)} />
            </div>
            <div className={`w-full absolute left-0 flex-col top-12 rounded-md  bg-light-primary p-2 ${open == true ? 'flex': 'hidden'}`}>
            {
                options.map(item => (
                    <span key={item.name} onClick={() => {setOption(item.name), setOpen(!open), setValue({name: item.name, color: item.color})}} className="p-2 hover:bg-white rounded-md">{item.name}</span>
                ))
            }
            </div>
        </div>
    )
}