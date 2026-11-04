// Envia a escala para a API Clojure e retorna os resultados

const API_URL = import.meta.env.VITE_API_URL?.replace(/\/+$/, "");

export interface TableResult {
    "vetor-espacamento-traste": string[];
    "vetor-distancia-rastilho": string[];
    "vetor-distancia-pestana": string[];
}

export async function calcularTabela(
    scaleValue: number
): Promise<TableResult> {

    if (!API_URL) {
        throw new Error("VITE_API_URL não está configurada.");
    }

    const response = await fetch(`${API_URL}/api/calcular-tabela`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "scale-value": scaleValue
        })
    });

    if (!response.ok) {
        throw new Error(
            `Erro ao calcular tabela: HTTP ${response.status}`
        );
    }

    return await response.json() as TableResult;
}
