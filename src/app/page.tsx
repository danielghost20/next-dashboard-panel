import { LuGhost } from "react-icons/lu";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa6";
import Icon from "@/components/Icon";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <header className="h-screen w-full flex flex-col items-center justify-center">
        <nav className="w-full h-14 flex justify-between items-center  px-4 py-2 fixed top-0">
        <div className="flex gap-2 items-center">
        <LuGhost className="text-2xl" />
        <ul className="flex gap-2 font-semibold text-gray-600">
          <li><a href="">Ghost</a></li>
          <li><a href="">Documentacion</a></li>
          <li><a href="">next store</a></li>
        </ul>
        </div>
        <div className="flex gap-2 items-center">
          <Icon icon={<FiGithub className="text-xl" />} link="https://github.com/danielghost20"/>
          <Icon icon={<FaLinkedinIn className="text-xl" />} link="https://www.linkedin.com/in/daniel-ramos21/"/>
        </div>
        </nav>
        <div className=" w-full max-w-4xl text-center flex flex-col justify-center items-center gap-10">
        <h3 className="p-2  max-w-max m-auto"><span className="rounded-2xl border-2 text-white bg-black border-gray-500 p-1">Contactame</span> para mas sugerencias o consultas sobre el proyecto</h3>
        <h1 className="text-6xl font-medium ">Crea productos para vender y administra todos tus ventas </h1>
        <p className=" text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, vero vitae fugit quos voluptatibus hic enim praesentium fuga autem eum! Nulla maiores iusto reiciendis quam porro voluptas hic quia odio.</p>
        <Link href='/admin/dashboard' className="text-base hover:bg-gray-700 max-w-max px-4 rounded-lg py-2 bg-black text-white ">Empezar</Link>
        </div>
      </header>
      <main>

      </main>
    </>
  )
}
