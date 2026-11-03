interface PageProps {
    id: string,
}

export default function GuitarsDisplayPage({id}: PageProps) {

    const imagensviolao = [1, 2, 3, 4, 5, 6, 7, 8 ,9, 10]

    return(
        <main id={id} className="bg-[#0C0F11] min-h-screen w-full flex flex-col justify-center items-center gap-12">
            <section className="flex flex-col items-center w-200 gap-4">
                <h2 className="text-[#F5A623] text-lg">INSTRUMENTOS ARTESANAIS</h2>
                <h1 className="text-white text-5xl font-semibold font-serif">Violões Valderrama</h1>
                <p className="flex flex-wrap text-center text-white/80 text-lg">
                    A seguir, alguns dos violões já desenvolvidos pelo luthier José Valderrama, apresentados em registros
                    fotográficos que evidenciam a construção, os materiais e os detalhes de cada instrumento
                </p>
            </section>

            <section className="bg-gray-900 flex gap-8 md:w-400 md:h-120 rounded-2xl overflow-x-auto px-8 py-8">
                {imagensviolao.map(() => (
                    <div className="md:min-h-100 md:min-w-80 bg-gray-800 rounded-2xl"></div>
                ))}
            </section>
        </main>
    )
}