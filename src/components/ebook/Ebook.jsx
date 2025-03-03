import "./Ebook.css"
import ebook from "../../assets/img/e-book+2.webp";

export function Ebook() {
    return (
        <>
        <section>
            <div className="ebook-container">

                <div className="ebook">
                    
                <div>
                <img className="ebook-img" src={ebook} alt="Imagem de E-book" />
                </div>
                
                <div className="info">
                    <h2>É <span>fácil</span> participar!</h2>
                    <p>Aqui no Pix do Milhão, todo sonho começa com <span>conhecimento</span>.</p>
                    <p>E para te ajudar nessa jornada, toda semana lançamos uma  coleção especial de e-books <span>para te inspirar, guiar e transformar</span>.</p>
                    <p>Escolha o seu conteúdo favorito e concorra a prêmios!</p>

                    <div className="ebook-btn">
                        <a href="#">Quero meu E-book</a>
                    </div>
                </div>
                </div>

            </div>
        </section>
        </>
    )
}