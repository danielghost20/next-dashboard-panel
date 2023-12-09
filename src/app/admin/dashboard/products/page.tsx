"use client";

import Input from "@/components/Input";
import Select from "@/components/Select";
import PaymentCard from "@/components/products/PaymentCard";
import Product from "@/components/sales/Product";
import { CATEGORIES } from "@/constants/categories";
import { ChangeEvent, FormEvent, useState } from "react";
import { CiCircleQuestion } from "react-icons/ci";
import paypal from "../../../../../public/paypal.svg";
import mastercard from "../../../../../public/mastercard.svg";
import visa from "../../../../../public/visa.svg";
import amazon from "../../../../../public/amazon.svg";
import hyper from "../../../../../public/hiper.svg";
import { postProducts } from "@/services/products.service";
import { postImages } from "@/services/firebase.service";

export default function ProductsPage() {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>(150);
  const [category, setCategory] = useState({ name: "otro", color: "#A6FF96" });
  const [amount, setAmount] = useState<number>(4);
  const [image, setImage] = useState<File>();
  const [description, setDescription] = useState<string>(
    "Descripcion de tu producto..."
  );
  const [imageUploaded, setImageUploaded] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (image !== undefined) {
      postImages(image, setImageUploaded).then(({ status }) => {
        if (status === 202) {
          if (imageUploaded !== '') {
            const prod = {
              title: name,
              price: price,
              description: description,
              category: category,
              image: imageUploaded,
              amount: amount,
            };
            postProducts(prod).then((res) => console.log(res));
          }
        }
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <>
      <header className="w-full">
        <nav className="h-14 bg-white"></nav>
      </header>
      <main className="w-full p-2">
        <h1 className="text-center font-bold text-5xl">Crear productos</h1>
        <p className="mt-2 text-sm text-center">
          Crea un nuevo producto y publicalo ala venta en la next-store
        </p>
        <section className="max-w-6xl rounded-md m-auto flex mt-5 w-full bg-white">
          <div className="max-w-xs w-full p-2">
            <h3>Vista previa</h3>
            <Product
              image={image !== undefined && URL.createObjectURL(image)}
              description={description}
              category={category}
              price={price}
              name={name}
              className="w-full"
            />
          </div>
          <form onSubmit={handleSubmit} className=" p-3 w-full">
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Nombre del producto</label>
              <Input
                id="name"
                name="name"
                defaultValue={name}
                placeholder="Nombre del producto"
                className="px-3 py-2 rounded-md outline-none bg-light-primary"
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setName(e.target.value);
                }}
                type="text"
              />
            </div>
            <div className="w-full  mt-3   p-3">
              <div className="w-full gap-3 flex justify-start flex-wrap">
                <div className=" flex flex-col gap-3">
                  <label className="text-base" htmlFor="">
                    precio
                  </label>
                  <Input
                    placeholder="120.00 MNX"
                    type="number"
                    className="px-3 py-2 rounded-md w-28 outline-none bg-light-primary"
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      setPrice(parseFloat(e.target.value));
                    }}
                    defaultValue={price}
                  />
                </div>
                <div className="max-w-sm w-full flex flex-col gap-3">
                  <label className="text-base" htmlFor="">
                    Categoria
                  </label>
                  <Select
                    setValue={setCategory}
                    initialValue="nada"
                    className="py-2 px-2 bg-light-primary rounded-md"
                    options={CATEGORIES}
                  />
                </div>
                <div className="  flex flex-col gap-3">
                  <label className="text-base">Cantidad </label>
                  <Input
                    type="number"
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      setAmount(Number(e.target.value))
                    }}
                    placeholder="12"
                    className="px-3 py-2 w-28 rounded-md outline-none bg-light-primary"
                  />
                </div>
                <div className="w-80 flex flex-col gap-3">
                  <h2>Subir imagen</h2>
                  <label
                    className="w-full cursor-pointer bg-light-primary rounded-md p-2"
                    htmlFor="upload"
                  >
                    Subir imagen
                  </label>
                  <Input
                    type="file"
                    id="upload"
                    accept=".png, .jpg, .jpeg"
                    className="max-w-sm w-full outline-none hidden"
                    placeholder="subir imagen"
                    onChange={handleFileChange}
                  />
                </div>
                <div className=" w-full my-3 flex flex-col gap-3">
                  <label className="text-base">Descripcion del producto</label>
                  <textarea
                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                      setDescription(e.target.value);
                    }}
                    placeholder="Recamara de 5x3 con almuadas...."
                    className="outline-none bg-light-primary h-48 rounded-md p-2"
                  ></textarea>
                </div>
              </div>
              <h2 className="flex gap-2 items-center my-2">
                Metodos de pago
                <CiCircleQuestion className="text-xl" />
              </h2>
              <div className="w-full flex flex-wrap  gap-2 p-2 rounded-md">
                <PaymentCard
                  description="Lorem ipsum dolor sit amet consectetur adipisicing e"
                  svg={paypal}
                />
                <PaymentCard
                  description="Lorem ipsum dolor sit amet consectetur adipisicing e"
                  svg={mastercard}
                />
                <PaymentCard
                  description="Lorem ipsum dolor sit amet consectetur adipisicing e"
                  svg={visa}
                />
                <PaymentCard
                  description="Lorem ipsum dolor sit amet consectetur adipisicing e"
                  svg={amazon}
                />
                <PaymentCard
                  description="Lorem ipsum dolor sit amet consectetur adipisicing e"
                  svg={hyper}
                />
              </div>
            </div>
            <div className="w-full flex justify-end">
              <button
                type="submit"
                className=" max-w-max p-2 rounded-md   bg-black text-white"
              >
                Crear producto
              </button>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}
