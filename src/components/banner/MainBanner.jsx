import "./MainBanner.css"
import banner from "../../assets/img/banner1.webp";

export function MainBanner() {
    return (
       <section>
        <main>
            <div id="banner-container">
                <div id="banner-background">
                    <div id="banner">
                        <h2>Prêmio em destaque</h2>
                        <a href="#">
                            <img id="banner-img" src={banner} alt="Banner destaque de prêmio" />
                        </a>
                        
                        <div className="footer-banner">
                        <h3>Você pode ser o próximo ganhador! - 1 Milhão de reais + 1.000 bilhetes premiados</h3>
                        <p>Compre um e-book e garanta a sua participação!</p>
                        
                        <button className="banner-btn" onClick={() => navigate("/pagina-desejada")}>Comprar</button>
                        
                        </div>
                    </div>
                </div>
            </div>
        </main>
       </section>
    )

}