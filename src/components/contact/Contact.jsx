import "./Contact.css"
import whatsapp from "../../assets/img/whatsapp.webp";

export function Contact() {
    return (
        <>
            <section>
                <div className="ebook-container">

                    <div className="ebook reverse">

                        <div>
                            <img className="what-img" src={whatsapp} alt="logo whatzapp" />
                        </div>

                        <div className="info-contact">
                            <h2>Entre no nosso grupo do WhatsApp e concorra diariamente a prêmios <span>Exclusivos!</span></h2>

                            <div>
                                <button className="whats-btn" onClick={() => navigate("/pagina-desejada")}>Entrar</button>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}