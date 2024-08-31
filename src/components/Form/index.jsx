import './styles.css'

export default function Form(){
    return(
        <section className="last">
            <h2>Formulário Simples</h2>
            <form>
                <div>
                    <label form="nome">Nome:</label>
                    <input type="text" id="nome" name="nome" required/>
                </div>
                <div>
                    <label form="email">Email:</label>
                    <input type="email" id="email" name="email" required/>
                </div>
                <div>
                    <label form="mensagem">Mensagem:</label><br/>
                    <textarea id="mensagem" name="mensagem" rows="4" cols="50"></textarea>
                </div>
                <div>
                    <label form="idade">Idade:</label>
                    <input type="number" id="idade" name="idade" min="18" max="100"/>
                </div>
                <div>
                    <label form="cor">Cor favorita:</label>
                    <input type="color" id="cor" name="cor"/>
                </div>
                <div>
                    <label form="anexo">Anexo:</label>
                    <input type="file" id="anexo" name="anexo"/>
                </div>
                <button type="submit">Enviar</button>
            </form>
        </section>
    )
}