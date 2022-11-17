import { useState } from "react";

const FeedbackItem = () => {

    //Estados: presisten informacion a traves del ciclo de vida
    // de un unico componente

    //estados iniciales
    const [rating, setRating  ] = useState(2)
    const[text , setText] = useState("Mejorar Curso, mejores recursos")

    const subirNota=()=>{
        //cambiar estado a rating
        setRating((prev)=>{
            return prev + 1
        })
    }

    const bajarNota=()=>{
        //cambiar estado a rating
        setRating((prev)=>{
            return prev - 1
        })
    }

    return (
        <div className="card">
            <div className="num-display">
                { rating }
            </div>
            <div className="text-display">
                { text }
            </div>
            <button onClick={ subirNota }>
                Subir nota
            </button>
            <br></br>
            <button onClick={ bajarNota }>
                Bajar nota
            </button>
        </div>
    )
}

export default FeedbackItem;