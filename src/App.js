import Header from "./componentes/Header";
import FeedbackItem from "./componentes/FeedbackItem.";

function App(){
    //Objeto de estilos
    const HeaderStyles = {
        backgroundColor: '#FF0072',
        color:'#FBEEEE'
    }
    return (
        <div className="container">
            { /* props: atributos de etiqueta de un componente react */ }
            <Header 
                bgColor={HeaderStyles.backgroundColor}
                color={HeaderStyles.color}    />

                <FeedbackItem />
                <FeedbackItem />
                <FeedbackItem />

            <h2> Componenete App </h2>
        </div>
    )
}

export default App;