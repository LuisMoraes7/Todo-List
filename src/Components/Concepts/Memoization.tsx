import { useMemo, useState } from "react";

interface MemoizationProps{
    financialData: {
        incomes: number[];
        outcomes: number[];
    }
}


export const Memoization: React.FC<MemoizationProps> = ( { financialData } ) => {
    // estado que define se os valores devem ser mostrados ou nao
    const [showValues, setShowValues] = useState(false)
    
    const TotalIncomes = useMemo(() => {
        return financialData.incomes.reduce((total, income) => {
            console.log('calculando receita')
            return total += income
        }, 0)
    }, [financialData.incomes])

    const TotalOutcomes = useMemo(() => {
        return financialData.outcomes.reduce((total, outcome) => {
            console.log('calculando despesas')
            return total += outcome
        }, 0)
    }, [financialData.outcomes])

    return(
        <div style={{margin: '5px 5rem', fontSize: '1.3rem', border: '1px solid blue'}}>
            <h1>Memoization</h1>
        
            <h2>UseMemo</h2>

            <p>{`Total de receitas: ${showValues? TotalIncomes : 'XXXXX'}`}</p>
            <br />
            <p>{`Total de despesas: ${showValues? TotalOutcomes : 'XXXXX'}`}</p>
            <button onClick={() => {setShowValues(!showValues)}}>
                {showValues ? 'Ocultar valores' : 'Mostrar valores'}
                </button>
        </div>
        
    )
}