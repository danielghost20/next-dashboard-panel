import Image from "next/image";

export default function Ghost() {
  return (
    <>
      <main className="p-4 max-w-6xl rounded-md m-auto bg-white mt-20">
        <h1 className="text-4xl font-semibold">¿Que es Ghost?</h1>
            <section className="mt-5">
            <p className="text-gray-600">
              Loruis id possimus ea aliquid, eaque provident magnam odio,
              accusantium corporis culpa. Quos, hic esse? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Mollitia, voluptatem, eos alias
              commodi ut cum, quis enim voluptatibus ex culpa eaque perferendis
              aperiam quod ab eum distinctio omnis adipisci reprehenderit?
            </p>
            <p className="text-gray-600 mt-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque
              architecto facere consequatur deleniti temporibus sint,
              perferendis animi laudantium sequi similique, explicabo quibusdam
              ducimus quas necessitatibus recusandae distinctio aperiam
              repudiandae error?
            </p>
            </section>
            <section className="my-5">
                <h2 className="text-2xl my-3 font-semibold">Proyectos</h2>
                <div  className="columns-3">
                    <Image src='/images/next-blog.png' width={400} height={250} alt="proyect_image"/>
                    <Image src='/images/galery.webp' width={400} height={250} alt="proyect_image"/>
                    <Image src='/images/next-store-image.png' width={400} height={250} alt="proyect_image"/>
                    <Image src='/images/next-ui.png' width={400} height={250} alt="proyect_image"/>
                </div>
                <p className="text-gray-600 my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quidem perferendis error amet reiciendis repellat ad, nesciunt, at aliquid maiores, porro provident velit! Perferendis atque aliquam soluta, quisquam voluptates ab.</p>
            </section>
            <section>
                <h2></h2>
            </section>
      </main>
    </>
  );
}
