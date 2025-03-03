import "./Promotion.css"
import promo from "../../assets/img/promo.webp"
import banner from "../../assets/img/e-book-banner.webp"

export function Promotion() { 

    return (
        <>
        <section>
            <div id="promo-container">
                
                    <div className="img-promo">
                        <img id="promo-day" src={promo} alt="Promoção do dia" />
                    </div>

                    <div id="content-wrapper">
                    <div className="img-promo">
                        <img id="banner-promo" src={banner} alt="Banner promocional do e-book" />
                    </div>

                    <div id="buy-book">
                    <h1>Compre um e-book</h1>
                    <p> E ganhe 1 número para concorrer!</p>
                    <h2>Não fique de fora dessa, compre agora mesmo e concorra!</h2>

                    <button id="buy-botton" onClick={() => navigate("/pagina-desejada")}>Quero Comprar</button>

                    </div>
                </div>
            </div>
        </section>
        </>
    )

}