import Product from "@/components/sales/Product";
import Table from "@/components/sales/Table";

export default function DashboardPage () {
    return (
        <>
            <header>
                <nav className="h-14 w-full px-3 bg-white"></nav>
            </header>
            <main className="w-full rounded-md p-4 bg-white max-w-6xl mt-5 m-auto">
                <h1 className="text-5xl font-semibold my-3">Bienvenido Daniel Ramos</h1>
                <section className="w-full">
                    <h2 className="my-5">Productos mas vendidos</h2>
                    <div className="flex flex-wrap gap-4">
                        <Product category={{name: 'Roja', color: '#EDEEF1'}} description="Este producto es de dudosa calidad importado desde china" name="Vaso de agua puro" price={120} />
                        <Product category={{name: 'Roja', color: '#EDEEF1'}} description="Este producto es de dudosa calidad importado desde china" name="Vaso de agua puro" price={120} />
                        <Product category={{name: 'Roja', color: '#EDEEF1'}} description="Este producto es de dudosa calidad importado desde china" name="Vaso de agua puro" price={120} />

                    </div>
                </section>
                <section className="w-full">
                    <h2 className="my-3">Historial de ventas</h2>
                    <div className="w-full  overflow-auto">
                        {/* <Table /> */}
                    </div>
                </section>
            </main>
        </>
    )
}