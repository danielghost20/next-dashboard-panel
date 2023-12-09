"use client";

import Link from "next/link";
import { CiMenuKebab } from "react-icons/ci";
import { RiShoppingBag3Line } from "react-icons/ri";
import { IoShirtOutline, IoBookmarksOutline } from "react-icons/io5";
import { BiGhost } from "react-icons/bi";
import { usePathname } from "next/navigation";

export default function Dashboard() {
  const pathname = usePathname();

  const links = [
    {
      link: "/admin/dashboard",
      icon: RiShoppingBag3Line,
      name: "ventas",
    },
    {
      link: "/admin/dashboard/products",
      icon: IoShirtOutline,
      name: "productos",
    },
    {
      link: "/admin/dashboard/documentation",
      icon: IoBookmarksOutline,
      name: "Documentacion",
    },
    {
      link: "/admin/dashboard/ghost",
      icon: BiGhost,
      name: "ghost",
    },
  ];

  return (
    <div className="w-full relative  h-full">
      <div className="rounded-md p-2 flex justify-between items-center gap-2 ">
        <div className="flex gap-2">
          <div className="rounded-md w-9 h-9 bg-gray-600" />
          <div className="flex-col flex">
            <strong className="text-lg  font-semibold leading-none">
              Daniel Ramos
            </strong>
            <span className="text-sm  font-medium text-gray-600">
              Vendedor{" "}
            </span>
          </div>
        </div>
        <CiMenuKebab className="text-xl cursor-pointer" />
      </div>
      <h2 className="mt-7">Vendedor</h2>
      <ul className="mt-1 flex flex-col gap-2">
        {links.map((item) => (
          <li key={item.link}>
            <Link
              className={`flex gap-2  items-center p-2 rounded-lg ${
                item.link == pathname ? "bg-light-primary" : ""
              }`}
              href={item.link}
            >
              {<item.icon className="text-xl" />} <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      <button className="absolute bottom-0 w-full p-2 rounded-md bg-black text-white">
        Salir
      </button>
    </div>
  );
}
