import { RiShoppingCart2Line } from "react-icons/ri";
import Icon from "../Icon";

type DataProps = {
    name: string,
    category: string,
    date: string,
    price: string
}

type TableProps = {
    head: string[],
    data: string[]
}


export default function Table (data : TableProps) {
    return (
        <table className="w-full bg-white shadow rounded-md">
        <thead className=" border-b-2 border-b-gray-200">
            <tr>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">Nombre</th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">Tipo</th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">Fecha</th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">Cantidad</th>
                {data.head.map((item, i) => (
                    <th key={i}>{item}</th>
                ))}
            </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
            {/* {
                data.data.map((item, i) => (
                    <tr key={i}>
                        <td>{item.name}</td>
                        <td>{item.category}</td>
                    </tr>
                ))
            } */}
            <tr>
                <td className="p-3 text-sm text-gray-800 whitespace-nowrap flex gap-2">
                    <Icon className="border-cyan-600" icon={<RiShoppingCart2Line className="text-xs text-cyan-600"/>}  />
                    <strong className="text-lg font-semibold">
                    Plato de soya dasdasdsad asdasdsadasd 
                    </strong>
                </td>
                <td className="p-3 text-sm text-gray-600 whitespace-nowrap">
                    Comida
                </td>
                <td className="p-3 text-sm text-gray-600 whitespace-nowrap">
                    17 Dic 2023
                </td>
                <td className="p-3 text-sm whitespace-nowrap">
                    <strong className="text-black font-semibold">
                    149.00 MNX
                    </strong>
                </td>
            </tr>
            <tr>
                <td className="p-3 text-sm text-gray-800 whitespace-nowrap flex gap-2">
                <Icon className="border-cyan-600" icon={<RiShoppingCart2Line className="text-xs text-cyan-600"/>}  />
                <strong className="text-lg font-semibold">
                    Plato de soya dasdasdsad asdasdsadasd 
                </strong>
                </td>
                <td className="p-3 text-sm text-gray-600 whitespace-nowrap">
                    Comida
                </td>
                <td className="p-3 text-sm text-gray-600 whitespace-nowrap">
                    17 Dic 2023
                </td>
                <td className="p-3 text-sm  whitespace-nowrap ">
                    <strong className="text-black font-semibold">
                    149.00 MNX
                    </strong>
                </td>
            </tr>
            <tr>
                <td className="p-3 text-sm text-gray-800 whitespace-nowrap flex gap-2">
                <Icon className="border-cyan-600" icon={<RiShoppingCart2Line className="text-xs text-cyan-600"/>}  />
                <strong className="text-lg font-semibold">
                    Plato de soya dasdasdsad asdasdsadasd 
                </strong>
                </td>
                <td className="p-3 text-sm text-gray-600 whitespace-nowrap">
                    Comida
                </td>
                <td className="p-3 text-sm text-gray-600 whitespace-nowrap">
                    17 Dic 2023
                </td>
                <td className="p-3 text-sm whitespace-nowrap ">
                    <strong className="text-black font-semibold">
                    149.00 MNX
                    </strong>
                </td>
            </tr>
        </tbody>
    </table>
    )
}