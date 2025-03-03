import "./Instagram.css"
import imagem from "../../assets/img/instagram.png";
import imagem2 from "../../assets/img/instagram2.png";
import imagem3 from "../../assets/img/instagram3.png";


export function Instagram() {
    return (
        <>
            <section>
                <div className="container">

                    <div className="general">

                     <div className="title"><h2>Siga o nosso <span>Intagram!</span></h2></div>
                       
                       <div className="img-instagram">
                       <a className="reflex" target="_blank" href="https://www.instagram.com/p/DFsTIxypcKQ/"> <img src={imagem} alt="Poster filme" /> </a>

                       <a className="reflex" target="_blank" href="https://www.instagram.com/p/DBJpSmavhtu/?img_index=1"> <img src={imagem2} alt="Poster filme" /> </a>

                       <a className="reflex" target="_blank" href="https://www.instagram.com/p/DFpt9rWJJaz/"> <img src={imagem3} alt="Poster filme" /> </a>

                       </div>
                       

                        <div className="follow-btn">
                            <a href="#">Seguir</a>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}