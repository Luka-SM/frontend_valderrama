import { useNavigate } from "react-router-dom"
import { RiArrowGoBackFill } from "react-icons/ri";
import { useState } from "react";
import guitarCollection from "../assets/images/guitarImage3.jpg";
import { calcularTabela, type TableResult } from "../services/tableService";

export default function FretCalcPage() {

    const navigate = useNavigate()
    const backToGuitarCrafting = () => navigate('/')

    const fretList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    const [inputValue, setInputValue] = useState<string>("")
    const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    const [resultado, setResultado] = useState<TableResult | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleCalculate = async () => {

        const scaleValue = Number(inputValue);
    
        if (!inputValue.trim() || !Number.isFinite(scaleValue) || scaleValue <= 0) {
            setError("Informe uma escala numérica positiva.");
            return;
        }
    
        try {
            setLoading(true);
            setError(null);
    
            const data = await calcularTabela(scaleValue);
    
            setResultado(data);
    
        } catch (err) {
            console.error("Erro ao calcular tabela:", err);
            setError("Não foi possível calcular a tabela. Verifique a conexão com o servidor.");
    
        } finally {
            setLoading(false);
        }
    };

    return(
        <main
        style={{backgroundImage: `url(${guitarCollection})`}}
        className="bg-cover min-h-screen w-full flex flex-col justify-center items-center gap-4">
            <section className="bg-black/60 absolute inset-0 z-1"/>
            
            <section className="absolute inset-0 z-2 h-10 w-full text-white text-3xl flex justify-start items-center pl-8 pt-8 hover:cursor-pointer">
                <RiArrowGoBackFill onClick={backToGuitarCrafting} className="h-10 w-16 bg-gray-900 rounded-2xl py-1 px-4 hover:scale-110 transition-transform duration-300"/>
            </section>

            <section className="flex flex-col items-center gap-4 z-2 select-none">
                <h1 className="text-white text-5xl font-semibold font-serif">Cálculo de Trastes</h1>
                <p className="text-[#F5A623] text-lg">SIMULADOR VALDERRAMA PERSONALIZADO</p>
            </section>

            <section className="bg-[#0C0F11] z-2 flex flex-col gap-8 p-8 rounded-2xl">

                <article className="flex flex-col justify-center items-start gap-4">
                    <p className="text-white select-none">Informe o valor da escala (em milímetros)</p>
                    <div className="flex gap-4">
                        <input value={inputValue} onChange={(e) => handleInputValue(e)} type="text" className="bg-gray-900 border border-white w-40 h-12 rounded-2xl focus:outline-none px-4 text-white"/>
                        <button
                        onClick={handleCalculate}
                        disabled={loading}
                        className="bg-[#F5A623] h-12 px-4 py-2 rounded-2xl hover:cursor-pointer hover:scale-108 transition-transform duration-300 disabled:opacity-50"
                        >
                            <p className="text-black font-bold select-none">
                                {loading ? "CALCULANDO..." : "CALCULAR"}
                            </p>
                        </button>
                    </div>
                    
                    {/* MENSAGEM DE ERRO */}
                    {error && (
                        <p className="text-red-500 text-sm">
                            {error}
                        </p>
                    )}
                </article>
                
                <article className="flex flex-col">
                    <p className="text-white/80 select-none">Aviso: o simulador pode demorar alguns segundos para responder</p>

                    <article className="flex flex-col md:h-144 md:w-7xl justify-start text-[#F5A623] border border-white/40 rounded-2xl">
                        <div className="flex justify-between border-b border-white/40">
                            <div className="flex justify-center items-center md:w-40 px-8 py-2 border-r border-white/40 bg-red">
                                <h2 className="font-semibold">TRASTE Nº</h2>
                            </div>

                            <div className="flex justify-center items-center w-80 border-r border-white/40">
                                <h2 className="font-semibold">ESPAÇAMENTO DO TRASTE (mm)</h2>
                            </div>

                            <div className="flex justify-center items-center md:w-80 px-8 py-2 border-r border-white/40">
                                <h2 className="font-semibold">DISTÂNCIA AO RASTILHO (mm)</h2>
                            </div>

                            <div className="flex justify-center items-center md:w-80 px-8 py-2">
                                <h2 className="font-semibold">DISTÂNCIA À PESTANA (mm)</h2>
                            </div>
                        </div>

                        {fretList.map((fret, index) => (
                            <div
                                key={fret}
                                className="flex justify-between border-b border-white/40 text-white"
                            >
                                <div className="flex justify-center items-center md:w-40 px-8 py-2 border-r border-white/40">
                                    <h2>{fret}</h2>
                                </div>

                                <div className="flex justify-center items-center w-80 border-r border-white/40">
                                    <h2>
                                        {resultado?.["vetor-espacamento-traste"][index] ?? "-"}
                                    </h2>
                                </div>

                                <div className="flex justify-center items-center md:w-80 px-8 py-2 border-r border-white/40">
                                    <h2>
                                        {resultado?.["vetor-distancia-rastilho"][index] ?? "-"}
                                    </h2>
                                </div>

                                <div className="flex justify-center items-center md:w-80 px-8 py-2">
                                    <h2>
                                        {resultado?.["vetor-distancia-pestana"][index] ?? "-"}
                                    </h2>
                                </div>
                            </div>
                        ))}

                        <div className="flex flex-1 justify-between items-center text-white/70 px-12">
                            <div className="flex items-center gap-2">
                                <div className="bg-white/70 h-2 w-2 rounded-full"></div>
                                <p>A tabela acima foi feita a partir da fórmula: d_n = L * (1 - (1/2)^(n/12))</p>
                            </div>

                            <div className="flex items-center gap-2">
                                <div className="bg-white/70 h-2 w-2 rounded-full"></div>
                                <p>L = valor da escala</p>
                            </div>

                            <div className="flex items-center gap-2">
                                <div className="bg-white/70 h-2 w-2 rounded-full"></div>
                                <p>n = número do traste</p>
                            </div>
                        </div>
                    </article>

                </article>

            </section>
        </main>
    )
}