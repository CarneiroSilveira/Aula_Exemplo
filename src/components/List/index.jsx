import './styles.css'

export default function List({ titulo = "Sem titulo" }){
    return (
        <section>
            <h2>{ titulo }</h2>
            <div className="container">
                <div className="menu">
                    <h3>Lista não ordenada:</h3>
                    <ul>
                        <li><a href="#">Item 1</a></li>
                        <li><a href="#">Item 2</a></li>
                        <li><a href="#">Item 3</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Lista ordenada:</h3>
                    <ol>
                        <li>Primeiro item</li>
                        <li>Segundo item</li>
                        <li>Terceiro item</li>
                    </ol>
                </div>
            </div>
        </section>
    )
}