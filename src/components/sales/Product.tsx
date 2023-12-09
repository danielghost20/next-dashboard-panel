"use client"

import clsx from "clsx"
import Image from "next/image"


export default function Product ({className, name, price, category, description, image} : {className?: string, name: string, price: number, category: {name: string, color: string}, description: string, image: any}) {

    return (
        <div className={clsx('max-w-xs w-full', className)}>
            <Image className=" w-full rounded-t-md bg-light-primary h-72  object-contain" src={`${image? image : '/images/vaso.webp'}`} alt="image" width={300} height={300} />
            <div className="w-full bg-light-primary p-2 rounded-md mt-2">
            <h2 className="my-2 text-xl font-semibold">{name === ''? 'Nombre': name}</h2>
            <p className="text-sm font-medium text-gray-500">{description !== '' ? description : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, explicabo recusandae. Eum saepe tempore officiis fuga'}</p>
            <div className="flex my-3 w-full justify-between">
                <span className="font-semibold">${!price ? 0 : price} MNX</span>
                <span className={clsx(`font-semibold  p-1 rounded-xl ${category.color}`)}>{category.name}</span>
            </div>
            </div>
        </div>
    )
}