import './styles.css'

export default function Video(){
    return(
        <section>
            <h2>Incorporando Imagem e Vídeo</h2>
            <div className="container">
                <div>
                    <figure>
                        <img src="" height={400} width={600} alt="Exemplo de imagem"/>
                        <figcaption>Legenda da imagem</figcaption>
                    </figure>
                </div>
                <div>
                    <h3>Vídeo incorporado:</h3>
                    <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameBorder="0" allowfullscreen></iframe>
                </div>
            </div>
        </section>
    )
}