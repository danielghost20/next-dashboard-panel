"use client"
import React, { useState } from 'react';
import Image from "next/image";

export default function PaymentCard({svg, description}: {svg: string, description: string}) {
  
  const [select, setSelect] = useState<boolean>(false)

  const handleItemSelect = () => {
    setSelect(!select)
  }

  return (
    <div onClick={handleItemSelect} className={` flex bg-light-primary justify-center items-center border-2 ${select ? 'border-green-400': ''} p-2 w-52 rounded-md`}>
      <Image className='w-14 h-14' src={svg} width={100} height={100} alt="logo" />
    </div>
  );
}
